import React, { useState, useRef } from 'react';
import { Terminal, Sparkles } from 'lucide-react';
import { jsPDF } from "jspdf";
import { COURSES_DATA } from '../constants';

export const AICard: React.FC = () => {
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("Introductory");
  const [days, setDays] = useState(5);
  const [hours, setHours] = useState(2);
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [isRejected, setIsRejected] = useState(false);
  const [copied, setCopied] = useState(false);

  const resultRef = useRef<HTMLDivElement>(null);

  const playInputClick = (freqMultiplier: number = 1) => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      
      const audioCtx = new AudioContext();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      // Regular Mouse Click: Short, high-frequency sine burst without pitch drop
      oscillator.type = 'sine';
      // Base frequency is 700Hz, multiplied by modifier (e.g. 0.7 for 30% lower)
      oscillator.frequency.setValueAtTime(700 * freqMultiplier, audioCtx.currentTime);
      
      // Envelope: Instant attack, extremely fast decay
      // Reduced volume by 50% (0.025 -> 0.0125)
      gainNode.gain.setValueAtTime(0.0125, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.01);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + 0.01);
    } catch (error) {
      // Ignore audio errors
    }
  };

  const handleGenerate = async () => {
    if (!topic) return;
    setIsGenerating(true);
    setResult(null);
    setIsRejected(false);

    try {
      // Prepare context from existing courses to ground the AI in the specific style
      const courseContext = COURSES_DATA.map(c => 
        `Course: ${c.title.replace('\n', ' ')} (${c.category})\nDescription: ${c.description}\nLevels: ${c.levels.map(l => l.name).join(', ')}`
      ).join('\n---\n');

      const prompt = `
        You are the "Training Days" Curated Curriculum Engine, managed by Joe Nasr.
        
        CRITICAL INSTRUCTION: STRICT TOPIC VALIDATION.
        The user has requested a syllabus for: "${topic}".
        
        You must verify if this topic belongs to the SPECIFIC curriculum catalog of Joe Nasr, which focuses EXCLUSIVELY on Creative Technology, Design, and Media Production.
        
        AUTHORIZED DOMAINS (STRICTLY LIMITED TO):
        1. MEDIA PRODUCTION (Video Editing, Filmmaking, DaVinci Resolve, Premiere Pro, Integrated Digital Media)
        2. DESIGN & GRAPHICS (Adobe Photoshop, Illustrator, InDesign, Visual Communication, Branding, UI/UX, Figma)
        3. 3D & MOTION (Cinema 4D, After Effects, VFX, Animation, Motion Graphics, Nuke)
        4. IMMERSIVE TECH (VR, AR, XR, SimLab Composer, Metaverse, Game Dev, Unity/Unreal in context of design)
        5. WEB & CODE (HTML, CSS, JS, Python for creative context, Vibe Coding, Applied CS)
        6. AI & AUTOMATION (Generative AI for Creatives, n8n, Workflow Automation, AI for Business Strategy)
        
        EXPLICITLY UNAUTHORIZED / REJECTED TOPICS:
        - General Office Software (Microsoft Excel, Word, PowerPoint, Outlook) -> REJECT IMMEDIATELY.
        - General Business Administration (Accounting, HR, Supply Chain, Traditional Management) -> REJECT.
        - Non-Tech/Non-Creative Fields (Cooking, Sports, History, Medical, Law, Politics, General Education).
        - Any topic that does not involve "making", "designing", "coding", or "automating" in a creative context.
        
        DECISION LOGIC:
        - If the topic is "Excel", "Spreadsheets", "Data Entry" -> RETURN REJECTION_MODE.
        - If the topic is "Sales" without a Branding/Marketing context -> RETURN REJECTION_MODE.
        - If the topic is loosely related but not in the Authorized Domains -> RETURN REJECTION_MODE.
        - Only generate if the topic fits the AUTHORIZED DOMAINS above.

        IF REJECTED:
        Return ONLY this specific string format:
        "REJECTION_MODE: [Insert a short, sarcastic, dry-witted response here. Make fun of the fact that this is a high-end creative design system and not a place for mundane tasks. Be professional but biting. e.g., 'Spreadsheets do not spark joy in this architecture.']"

        IF AUTHORIZED:
        Generate a detailed professional course syllabus using the template below.
        
        Parameters:
        - Proficiency Level: ${level}
        - Duration: ${days} Days
        - Intensity: ${hours} Hours per day
        
        Context (Existing Course Style & Pedagogical Approach):
        ${courseContext}
        
        Format requirements:
        Strictly follow this plain text template structure (do not use markdown bolding like ** or ##). 
        DO NOT include the Course Ref, Trainer, Level, Duration, or Hours headers. Start directly with COURSE OVERVIEW.

        COURSE OVERVIEW:
        [A professional paragraph describing the course, audience, and methodology. Adopt the tone of the existing courses.]

        ------------------------------------------------------------

        SYLLABUS (TOPICS):
        - [Topic 1]
        - [Topic 2]
        ...

        ------------------------------------------------------------

        MODULES (DETAILED):
        MODULE 01: [TITLE UPPERCASE]
           Focus: [Description]

        MODULE 02: [TITLE UPPERCASE]
           Focus: [Description]
        
        (Generate enough modules to cover the duration. Roughly 1 module per half-day or day depending on intensity.)

        ------------------------------------------------------------

        OUTCOMES:
        1. [Outcome 1]
        2. [Outcome 2]
        3. [Outcome 3]
      `;

      const response = await fetch("/api/generate-syllabus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, level, days, hours, prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        const msg = data?.error ?? "Generation failed";
        throw new Error(msg);
      }

      const text: string = data.text ?? "";

      if (text.startsWith("REJECTION_MODE:")) {
        setIsRejected(true);
        setResult(text.replace("REJECTION_MODE:", "").trim());
      } else {
        setIsRejected(false);
        setResult(text);
      }

    } catch (error) {
      console.error("Generation failed", error);
      setResult(`ERROR: UNABLE TO GENERATE CONTENT.\n\nPlease check your API connection or try again.\n\nDetails: ${(error as Error).message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const generateDocumentContent = () => {
    const date = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    const separator = "________________________________________________________________________________";
    const subSeparator = "--------------------------------------------------------------------------------";

    if (isRejected) {
       return `
${separator}
SYSTEM SECURITY ALERT | TRAINING DAYS v3.0
${separator}

DATE: ${date}
STATUS: ACCESS DENIED

TOPIC REQUEST: ${topic.toUpperCase()}

${result}

${separator}
`.trim();
    }

    return `
${separator}
TRAINING DAYS | ARCHITECTURE SYSTEM V3
CORPORATE TRAINING AND KNOWLEDGE DEVELOPMENT
${separator}

OFFICIAL COURSE SYLLABUS DOCUMENT
GENERATED VIA CURATED CURRICULUM ENGINE

DATE:            ${date}
COURSE REF:      ${topic.toUpperCase()}
INSTRUCTOR:      JOE NASR

ACADEMIC LEVEL:  ${level.toUpperCase()}
DURATION:        ${days} DAYS
INTENSITY:       ${hours} HOURS PER DAY
TOTAL LOAD:      ${days * hours} CONTACT HOURS

${subSeparator}

${result}

${separator}
INTELLECTUAL PROPERTY NOTICE:
All materials in this app are the exclusive intellectual property of Joe Nasr. 
No copying, teaching, distribution, or use in any academic, corporate, 
governmental, or training environment is permitted without prior approval 
or written consent from the owner.
${separator}
`.trim();
  };

  const handleCopy = () => {
    if (!result) return;
    const fullText = generateDocumentContent();

    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const handleExport = () => {
    if (!result) return;

    // Initialize PDF
    const doc = new jsPDF();
    
    // Settings
    const marginLeft = 20;
    const marginTop = 20;
    const lineHeight = 5;
    const pageWidth = doc.internal.pageSize.getWidth(); // 210mm for A4
    const maxLineWidth = pageWidth - (marginLeft * 2);
    
    let cursorY = marginTop;

    // --- HEADER ---
    doc.setFont("courier", "bold");
    doc.setFontSize(16);
    doc.text("TRAINING DAYS", marginLeft, cursorY);
    
    doc.setFontSize(10);
    doc.setFont("courier", "normal");
    doc.text("ARCHITECTURE SYSTEM V3", pageWidth - marginLeft, cursorY, { align: "right" });
    
    cursorY += 6;
    doc.setFontSize(8);
    doc.text("CORPORATE TRAINING AND KNOWLEDGE DEVELOPMENT", marginLeft, cursorY);

    cursorY += 4;
    doc.setLineWidth(0.5);
    doc.line(marginLeft, cursorY, pageWidth - marginLeft, cursorY);
    
    if (isRejected) {
        cursorY += 10;
        doc.setFontSize(14);
        doc.setFont("courier", "bold");
        doc.setTextColor(209, 54, 39); // Red
        doc.text("SYSTEM SECURITY ALERT", pageWidth / 2, cursorY, { align: "center" });
        
        cursorY += 10;
        doc.setFontSize(10);
        doc.setFont("courier", "normal");
        doc.setTextColor(0, 0, 0);
        doc.text(`STATUS: ACCESS DENIED // ${topic.toUpperCase()}`, marginLeft, cursorY);
        
        cursorY += 10;
        doc.setLineWidth(0.2);
        doc.line(marginLeft, cursorY, pageWidth - marginLeft, cursorY);
        cursorY += 10;
        
        const splitText = doc.splitTextToSize(result, maxLineWidth);
        doc.text(splitText, marginLeft, cursorY);
        
        doc.save('SYSTEM_ALERT.pdf');
        return;
    }

    // --- OFFICIAL SYLLABUS ---
    cursorY += 10;
    doc.setFontSize(12);
    doc.setFont("courier", "bold");
    doc.text("OFFICIAL COURSE SYLLABUS DOCUMENT", pageWidth / 2, cursorY, { align: "center" });
    
    cursorY += 10;
    
    // --- METADATA ---
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    doc.setFontSize(10);
    doc.setFont("courier", "normal");
    
    const metadata = [
      `DATE:       ${date}`,
      `COURSE REF: ${topic.toUpperCase()}`,
      `INSTRUCTOR: JOE NASR`,
      `LEVEL:      ${level.toUpperCase()}`,
      `DURATION:   ${days} DAYS (${hours} HOURS/DAY)`,
      `TOTAL LOAD: ${days * hours} CONTACT HOURS`
    ];

    metadata.forEach(line => {
      doc.text(line, marginLeft, cursorY);
      cursorY += 5;
    });

    cursorY += 5;
    doc.line(marginLeft, cursorY, pageWidth - marginLeft, cursorY);
    cursorY += 10;

    // --- CONTENT BODY ---
    doc.setFontSize(10);
    const splitText = doc.splitTextToSize(result, maxLineWidth);
    
    splitText.forEach((line: string) => {
      // Check if we need a new page
      // 280mm is roughly bottom margin for A4 (297mm height)
      if (cursorY > 270) { 
        doc.addPage();
        cursorY = marginTop;
        // Mini Header on subsequent pages
        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text(`TRAINING DAYS - ${topic.toUpperCase()}`, marginLeft, cursorY - 10);
        doc.setTextColor(0);
        doc.setFontSize(10);
      }
      doc.text(line, marginLeft, cursorY);
      cursorY += lineHeight;
    });

    // --- FOOTER (LEGAL) ---
    // Ensure enough space for footer, else add page
    if (cursorY > 250) {
       doc.addPage();
       cursorY = marginTop;
    }
    
    cursorY += 15;
    doc.setLineWidth(0.2);
    doc.line(marginLeft, cursorY, pageWidth - marginLeft, cursorY);
    cursorY += 5;
    
    doc.setFontSize(7);
    doc.setTextColor(100);
    const legalText = "INTELLECTUAL PROPERTY NOTICE: All materials in this app are the exclusive intellectual property of Joe Nasr. No copying, teaching, distribution, or use in any academic, corporate, governmental, or training environment is permitted without prior approval or written consent from the owner. Unauthorized use may result in legal action and financial penalties determined by the owner.";
    const splitLegal = doc.splitTextToSize(legalText, maxLineWidth);
    doc.text(splitLegal, marginLeft, cursorY);

    doc.save(`${topic.replace(/\s+/g, '_').toUpperCase()}_SYLLABUS.pdf`);
  };

  return (
    <div className="w-full bg-white border border-black mb-16 shadow-none">
      <div className="p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 pb-6 border-b-4 border-black">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-5 h-5 text-black" />
              <span className="text-xs font-bold uppercase tracking-widest text-black">Generator Protocol</span>
            </div>
            <h2 className="text-4xl font-extrabold text-black uppercase tracking-tighter">
              The AI Card
            </h2>
          </div>
          <div className="px-3 py-1.5 bg-[#D13627] text-white text-[10px] font-bold uppercase tracking-widest">
            Curated Curriculum Engine
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Inputs Section */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Input Group */}
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-widest font-bold text-black block">Target Course Topic</label>
              <div className="relative group">
                <input 
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="ENTER TOPIC..."
                  className="w-full bg-[#F5F5F7] border border-gray-300 rounded-none py-4 px-4 text-black text-sm font-medium placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-colors uppercase"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#D13627] opacity-0 group-focus-within:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Level Selection */}
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-widest font-bold text-black block">Proficiency Index</label>
              <div className="flex border border-gray-300 bg-[#F5F5F7]">
                {["Introductory", "Advanced", "Professional"].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLevel(l)}
                    className={`flex-1 py-3 text-[8px] font-bold uppercase tracking-widest transition-colors border-r last:border-r-0 border-gray-300
                      ${level === l ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-200 hover:text-black'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Parameters */}
            <div className="grid grid-cols-2 gap-6 items-end">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-black block">
                  Duration (Days)
                </label>
                <div className="flex items-center border border-gray-300 bg-[#F5F5F7]">
                  <button 
                    onClick={() => { playInputClick(0.7); setDays(Math.max(1, days - 1)); }} 
                    className="px-4 py-3 text-black hover:bg-gray-200 font-bold border-r border-gray-300"
                  >-</button>
                  <div className="flex-1 text-center text-xs font-bold text-black">{days}</div>
                  <button 
                    onClick={() => { playInputClick(1); setDays(Math.min(30, days + 1)); }} 
                    className="px-4 py-3 text-black hover:bg-gray-200 font-bold border-l border-gray-300"
                  >+</button>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-black block">
                  Hours (Per Day)
                </label>
                <div className="flex items-center border border-gray-300 bg-[#F5F5F7]">
                  <button 
                    onClick={() => { playInputClick(0.7); setHours(Math.max(1, hours - 1)); }} 
                    className="px-4 py-3 text-black hover:bg-gray-200 font-bold border-r border-gray-300"
                  >-</button>
                  <div className="flex-1 text-center text-xs font-bold text-black">{hours}</div>
                  <button 
                    onClick={() => { playInputClick(1); setHours(Math.min(5, hours + 1)); }} 
                    className="px-4 py-3 text-black hover:bg-gray-200 font-bold border-l border-gray-300"
                  >+</button>
                </div>
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={!topic || isGenerating}
              className={`w-full py-5 text-sm font-bold uppercase tracking-widest transition-all border border-transparent
                ${!topic || isGenerating ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[#D13627] text-white hover:bg-black'}
              `}
            >
              {isGenerating ? "PROCESSING..." : "INITIATE GENERATION"}
            </button>
          </div>

          {/* Output Section */}
          <div className="lg:col-span-7 flex flex-col h-full relative">
            <div className="border border-gray-300 bg-white h-full flex flex-col min-h-[250px] lg:min-h-[400px]">
              <div className="px-4 py-2 border-b border-gray-300 flex justify-between items-center bg-[#F5F5F7]">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${result ? (isRejected ? 'bg-[#D13627]' : 'bg-green-500') : 'bg-gray-300'}`} />
                  <span className={`text-[10px] font-mono font-bold uppercase ${isRejected ? 'text-[#D13627]' : 'text-gray-500'}`}>
                     {isRejected ? 'SECURITY_PROTOCOL_ENGAGED' : 'Output_Stream_01'}
                  </span>
                </div>
              </div>
              
              <div ref={resultRef} className="p-8 pb-24 overflow-y-auto flex-grow custom-scrollbar bg-white relative">
                 {/* Grid background for text area */}
                 <div className="absolute inset-0 pointer-events-none" 
                      style={{ 
                        backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px)', 
                        backgroundSize: '100% 24px' 
                      }} 
                 />

                {!result && !isGenerating && (
                  <div className="h-full flex flex-col items-center justify-center text-gray-300 gap-4 relative z-10">
                    <div className="w-12 h-12 border-2 border-gray-200 flex items-center justify-center">
                      <Sparkles size={20} />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest">Awaiting Input Parameters</p>
                  </div>
                )}
                
                {isGenerating && (
                   <div className="space-y-6 animate-pulse relative z-10 mt-2">
                     <div className="h-3 bg-gray-200 w-3/4"></div>
                     <div className="h-3 bg-gray-200 w-1/2"></div>
                     <div className="h-32 bg-gray-100 w-full border border-gray-100"></div>
                     <div className="h-3 bg-gray-200 w-5/6"></div>
                   </div>
                )}

                {result && !isGenerating && (
                  <div className="relative z-10">
                     {/* Header constructed in React for layout control */}
                     {!isRejected ? (
                        <div className="font-mono text-xs text-black mb-6">
                           <div className="flex justify-between items-start">
                              <div className="flex flex-col gap-1">
                                 <div className="flex">
                                    <span className="w-[12ch] text-gray-500">COURSE REF:</span>
                                    <span className="uppercase">{topic}</span>
                                 </div>
                                 <div className="flex">
                                    <span className="w-[12ch] text-gray-500">TRAINER:</span>
                                    <span>JOE NASR</span>
                                 </div>
                              </div>
                              <div className="flex flex-col gap-1">
                                 <div className="flex">
                                    <span className="w-[14ch] text-gray-500">LEVEL:</span>
                                    <span className="uppercase">{level}</span>
                                 </div>
                                  <div className="flex">
                                    <span className="w-[14ch] text-gray-500">DURATION:</span>
                                    <span>{days} Days</span>
                                 </div>
                                  <div className="flex">
                                    <span className="w-[14ch] text-gray-500">TOTAL HOURS:</span>
                                    <span>{days * hours} Hours</span>
                                 </div>
                              </div>
                           </div>
                           <div className="my-6 border-b border-dashed border-black/20 w-full"></div>
                        </div>
                     ) : (
                        <div className="font-mono text-xs text-[#D13627] mb-6 font-bold">
                           ACCESS DENIED // IRRELEVANT TOPIC DETECTED
                           <div className="my-6 border-b border-dashed border-[#D13627]/50 w-full"></div>
                        </div>
                     )}

                     <pre className={`font-mono text-xs whitespace-pre-wrap leading-[24px] ${isRejected ? 'text-[#D13627]' : 'text-black'}`}>
                        {result}
                     </pre>
                  </div>
                )}

                {/* Buttons - Positioned Absolute Bottom Right */}
                <div className="absolute bottom-6 right-8 flex gap-2 z-20">
                    <button 
                      onClick={handleCopy}
                      className={`text-[10px] font-bold uppercase bg-white border shadow-sm hover:text-white px-4 py-2 transition-colors min-w-[80px] ${isRejected ? 'border-[#D13627] text-[#D13627] hover:bg-[#D13627]' : 'border-black text-black hover:bg-black'}`}
                    >
                      {copied ? "COPIED" : "COPY"}
                    </button>
                    <button 
                      onClick={handleExport}
                      className={`text-[10px] font-bold uppercase bg-white border shadow-sm hover:text-white px-4 py-2 transition-colors min-w-[80px] ${isRejected ? 'border-[#D13627] text-[#D13627] hover:bg-[#D13627]' : 'border-black text-black hover:bg-black'}`}
                    >
                      EXPORT
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
