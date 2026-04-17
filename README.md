<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Training Days

A course catalog and AI-powered syllabus generator for creative technology, design, and media production workshops managed by Apex Innovate.

The **AI Card** feature generates detailed course syllabi using [OpenRouter](https://openrouter.ai/) with automatic model routing (`openrouter/auto`). The API key is kept server-side and never exposed to the browser.

## Run Locally

**Prerequisites:** Node.js 22+, npm (pnpm also works)

1. Install dependencies:
   ```
   npm ci
   ```
2. Set the `TRAININGDAYS_API` environment variable in `.env.local`:
   ```
   TRAININGDAYS_API=your_openrouter_api_key_here
   ```
3. Run the app:
   ```
   npm run dev
   ```

> **Note:** The AI Card requires the Vercel CLI (`vercel dev`) to run the serverless API function locally.  
> To test the real API end-to-end, run `vercel dev` instead of `npm run dev`.  
> If the API is unavailable, the UI now clearly indicates **Fallback Mode** and generates a local syllabus template.

## Run in Codespaces

This repo includes a `.devcontainer/devcontainer.json` setup.

1. Open the repository in GitHub Codespaces.
2. Wait for `postCreateCommand` to finish (`npm ci` runs automatically).
3. Start the app:
   ```bash
   npm run dev
   ```
4. Use forwarded port **3000** preview.

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

## Troubleshooting

### "Server Not Configured" message in the AI Card
The serverless function cannot find the `TRAININGDAYS_API` environment variable.

**On Vercel:**
1. Open your project in the [Vercel Dashboard](https://vercel.com/).
2. Go to **Settings → Environment Variables**.
3. Add a new variable:
   - **Name:** `TRAININGDAYS_API`
   - **Value:** your OpenRouter API key (starts with `sk-or-…`)
   - **Environments:** select both **Production** and **Preview** (and **Development** if you use `vercel dev`).
4. Click **Save**, then trigger a new deployment — environment variable changes only take effect after a redeploy.

**Locally:**
Create or edit `.env.local` in the repo root:
```
TRAININGDAYS_API=your_openrouter_api_key_here
```
Then start the app with `vercel dev` (not `npm run dev`) so the `api/` serverless function runs with your env vars.

### "OpenRouter Authentication Failed" message in the AI Card
The key is present but OpenRouter rejected it (HTTP 401/403). Check that:
- The value of `TRAININGDAYS_API` is a valid OpenRouter key.
- The key has not expired or been revoked in your [OpenRouter account](https://openrouter.ai/keys).
- The key has access to the `openrouter/auto` model (free tier keys are supported).

After updating the key in Vercel, redeploy the project.

### Testing the API function locally
Because the AI Card calls a Vercel serverless function (`/api/generate-syllabus`), you **must** use the Vercel CLI for local testing:

```bash
npm install -g vercel   # install once
vercel dev              # starts both the frontend and the api/ function
```

Running `npm run dev` alone (Vite only) will not serve the `api/` endpoint, and all generation requests will fail with a network error.
