<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Training Days

A course catalog and AI-powered syllabus generator for creative technology, design, and media production workshops managed by Joe Nasr.

The **AI Card** feature generates detailed course syllabi using [OpenRouter](https://openrouter.ai/) with automatic model routing (`openrouter/auto`). The API key is kept server-side and never exposed to the browser.

## Run Locally

**Prerequisites:** Node.js, pnpm (or npm)

1. Install dependencies:
   ```
   pnpm install
   ```
2. Set the `TRAININGDAYS_API` environment variable in `.env.local`:
   ```
   TRAININGDAYS_API=your_openrouter_api_key_here
   ```
3. Run the app:
   ```
   pnpm dev
   ```

> **Note:** The AI Card requires the Vercel CLI (`vercel dev`) to run the serverless API function locally.  
> To test without it, run `vercel dev` instead of `pnpm dev`.

## Deploy to Vercel

1. Push to GitHub and import the repository in [Vercel](https://vercel.com/).
2. Add the environment variable in your Vercel project settings:
   - **Name:** `TRAININGDAYS_API`
   - **Value:** your OpenRouter API key
   - Scope: Production + Preview
3. Deploy — Vercel will automatically detect the `api/` directory and deploy the serverless function.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `TRAININGDAYS_API` | Yes (server-side only) | OpenRouter API key. **Never** use a `VITE_` prefix — keep it server-side. |
