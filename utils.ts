export const generateSyllabus = (topic: string, level: string, days: number, hoursPerDay: number): string => {
  // Estimate modules (sessions)
  const totalHours = days * hoursPerDay;
  const modulesCount = Math.ceil(totalHours / 2);
  
  // --- 1. Deduce Audience ---
  const t = topic.toLowerCase();
  let audience = "dedicated professionals and subject matter enthusiasts";
  
  if (t.includes('design') || t.includes('art') || t.includes('photoshop') || t.includes('illustrator') || t.includes('figma') || t.includes('adobe')) {
    audience = "visual designers, creative directors, and digital artists";
  } else if (t.includes('business') || t.includes('management') || t.includes('marketing') || t.includes('finance') || t.includes('strategy')) {
    audience = "corporate leaders, business strategists, and entrepreneurs";
  } else if (t.includes('tech') || t.includes('data') || t.includes('code') || t.includes('ai') || t.includes('automation') || t.includes('python')) {
    audience = "technical specialists, developers, and systems architects";
  } else if (t.includes('game') || t.includes('vr') || t.includes('unity') || t.includes('unreal') || t.includes('meta')) {
    audience = "game developers, immersive media creators, and interactive designers";
  } else if (t.includes('video') || t.includes('film') || t.includes('editing') || t.includes('resolve') || t.includes('premiere')) {
    audience = "video editors, filmmakers, and post-production specialists";
  }

  // --- 2. Generate Content (Safe Vocabulary) ---
  // Keywords for generation, strictly avoiding forbidden words
  const levelKeywords: Record<string, string[]> = {
    "Introductory": ["Fundamentals", "Core Concepts", "Principles", "Foundations", "Setup", "Basics"],
    "Advanced": ["Optimization", "Strategies", "Complex Systems", "Workflows", "Analysis", "Techniques"],
    "Professional": ["Executive Execution", "Global Standards", "Governance", "Innovation", "Leadership", "Mastery"]
  };

  const keywords = levelKeywords[level] || levelKeywords["Introductory"];
  
  let modules: string[] = [];
  let syllabusTitles: string[] = [];
  
  for (let i = 1; i <= modulesCount; i++) {
    const keyword = keywords[i % keywords.length];
    const title = `${keyword} of ${topic}: Session ${i}`;
    syllabusTitles.push(title);
    modules.push(`<li><strong>Module ${String(i).padStart(2, '0')}:</strong> ${title.toUpperCase()}<br/><em>Focus:</em> Practical application of ${keyword.toLowerCase()} within ${topic}. Students will examine case studies and perform exercises to solidify understanding.</li>`);
  }

  // --- 3. Construct Academic HTML Format ---
  return `
<h2>Course Overview</h2>
<p>This curriculum provides a ${level.toLowerCase()} examination of ${topic}. Designed specifically for ${audience}, the program prioritizes practical competence and theoretical soundness. Participants will acquire essential skills through structured instruction, ensuring they can apply these concepts directly to professional scenarios.</p>
<hr/>
<h3>Syllabus</h3>
<ul>
${syllabusTitles.map((title) => `<li>${title}</li>`).join('\n')}
</ul>
<h3>Modules</h3>
<ol>
${modules.join('\n')}
</ol>
<h3>Outcomes</h3>
<ol>
<li>Participants will demonstrate competence in ${topic} at a ${level.toLowerCase()} standard.</li>
<li>The cohort will be able to apply technical and theoretical knowledge to solve real-world problems.</li>
<li>Graduates will possess the necessary skills to integrate these methodologies into their professional workflows.</li>
</ol>
`;
};
