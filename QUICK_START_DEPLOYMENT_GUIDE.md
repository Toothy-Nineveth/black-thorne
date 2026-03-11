# BLACK THORNE ARG - DEPLOYMENT QUICK START GUIDE

## Overview
This guide walks you through deploying the Black Thorne ARG website to GitHub and Vercel (free hosting).

---

## STEP 1: Setup Your Local Project

### 1.1 Create Project Directory
```bash
mkdir black-thorne
cd black-thorne
```

### 1.2 Initialize Node Project
```bash
npm init -y
```

### 1.3 Install Dependencies
```bash
npm install react react-dom vite @vitejs/plugin-react
npm install -D tailwindcss postcss autoprefixer
```

### 1.4 Initialize Tailwind
```bash
npx tailwindcss init -p
```

---

## STEP 2: Project Structure

Create the following folder structure:
```
black-thorne/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── LoginPage.jsx
│   │   ├── DashboardPage.jsx
│   │   └── LogEntry.jsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## STEP 3: Copy Code Files

### File Locations:
1. **App.jsx** → `src/App.jsx`
2. **LoginPage.jsx** → `src/components/LoginPage.jsx`
3. **DashboardPage.jsx** → `src/components/DashboardPage.jsx`
4. **LogEntry.jsx** → `src/components/LogEntry.jsx`
5. **globals.css** → `src/styles/globals.css`

### Create main.jsx:
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### Create public/index.html:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BLACK THORNE</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### Create vite.config.js:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})
```

### Create tailwind.config.js:
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Update package.json scripts:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Create .gitignore:
```
node_modules/
dist/
.env
.env.local
*.log
```

---

## STEP 4: Test Locally

Run the development server:
```bash
npm run build
npm run dev
```

Visit `http://localhost:3000` in your browser.

**Test Login**:
- Name: `Calliope Zerynthar`
- Password: `Charadrius`
- Location Key: `AAVVLL2`

---

## STEP 5: Push to GitHub

### 5.1 Initialize Git
```bash
git init
git add .
git commit -m "Initial Black Thorne ARG deployment"
```

### 5.2 Create GitHub Repository
1. Go to [GitHub.com](https://github.com/new)
2. Create new repository named `black-thorne`
3. Do NOT initialize with README (we already have one)
4. Copy the repository URL

### 5.3 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/black-thorne.git
git branch -M main
git push -u origin main
```

---

## STEP 6: Deploy to Vercel

### 6.1 Install Vercel CLI
```bash
npm i -g vercel
```

### 6.2 Login to Vercel
```bash
vercel login
```

### 6.3 Deploy
```bash
vercel
```

Follow the prompts:
- Link to existing project? **No**
- What's your project's name? **black-thorne**
- In which directory is your code? **./**
- Want to modify these settings? **No**

### 6.4 Set Build Settings (if needed)
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

## STEP 7: Continuous Deployment (Auto-Deploy on Push)

### 7.1 Connect GitHub to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Find your `black-thorne` project
3. Click **Settings** → **Git**
4. Connect your GitHub repository
5. Enable "Automatic Deployments"

Now every push to GitHub automatically deploys to Vercel!

---

## STEP 8: Custom Domain (Optional)

To use a custom domain:
1. Go to your Vercel project **Settings** → **Domains**
2. Add your domain
3. Update DNS records (instructions provided by Vercel)

Otherwise, your site is available at:
- `https://black-thorne.vercel.app` (or similar)

---

## TROUBLESHOOTING

### Build Fails
- Check for syntax errors in React components
- Ensure all imports are correct
- Run `npm install` to ensure all dependencies are installed

### Login Not Working
- Verify credentials in `App.jsx`:
  - Name: `Calliope Zerynthar` (case-sensitive)
  - Password: `Charadrius` (case-sensitive)
  - Location Key: `AAVVLL2` (case-sensitive)

### Styling Issues
- Ensure `globals.css` is imported in `main.jsx`
- Check that Tailwind classes are only used in JSX (custom CSS handles most styling)
- Clear browser cache (Ctrl+Shift+Delete)

### Deploy Issues
- Run `npm run build` locally to check for errors
- Ensure `.gitignore` includes `node_modules/` and `dist/`
- Check Vercel build logs for specific errors

---

## ADDING NEW LOGS

To add new logs to the system:

1. Edit `App.jsx` and find the `LOGS` array
2. Add new object to array:

```javascript
{
  id: 'LOG-XXX',
  date: 'YYYY DR',
  title: 'Log Title',
  classification: 'DECLASSIFIED|SECRET|ROUTINE|EYES ONLY',
  declassifiedDate: 'YYYY DR',
  operationCode: 'OPERATION-NAME',
  keyLog: false, // true for one of the 5 key logs
  content: `Your log content here...`,
}
```

3. Run `npm run build` and push to GitHub:
```bash
git add .
git commit -m "Add new Black Thorne logs"
git push
```

Vercel automatically deploys the changes!

---

## ARG COMMUNITY ENGAGEMENT

### Discord Server (Optional)
Create a Discord community for players to:
- Discuss theories
- Share discoveries
- Collaborate on solving mysteries
- Receive updates on new logs

### Teaser Campaign
Post cryptic hints on social media:
- D&D subreddits
- RPG forums
- Twitter/X
- Discord RPG communities

### Hints & Clues
- Hide Easter eggs in log text
- Create social media "leaks"
- Release companion documents
- Host community events

---

## UPDATING THE SITE

To make changes:

```bash
# Make your edits (e.g., add new logs, fix bugs)

# Build locally
npm run build

# Test with dev server
npm run dev

# Push to GitHub
git add .
git commit -m "Your message here"
git push origin main
```

Vercel automatically deploys within seconds!

---

## MONITORING

Check deployment status:
1. Go to [Vercel Dashboard](https://vercel.com)
2. Click your `black-thorne` project
3. View deployment history and logs

Monitor uptime:
- Vercel includes automatic uptime monitoring
- Set up email alerts for deployments

---

## SECURITY NOTES

⚠️ **Important**:
- This is a **client-side only** application (no backend)
- Login credentials are visible in the source code (intentional for ARG)
- No real data is stored or transmitted
- No user data is collected
- Suitable for ARG/game purposes only

---

## ADVANCED: ENVIRONMENT VARIABLES

To hide credentials in development:

Create `.env` file:
```
VITE_LOGIN_NAME=Calliope Zerynthar
VITE_LOGIN_PASSWORD=Charadrius
VITE_LOGIN_LOCATION=AAVVLL2
```

Update `App.jsx`:
```javascript
const VALID_CREDENTIALS = {
  name: import.meta.env.VITE_LOGIN_NAME,
  password: import.meta.env.VITE_LOGIN_PASSWORD,
  locationKey: import.meta.env.VITE_LOGIN_LOCATION,
};
```

Add to Vercel:
1. **Settings** → **Environment Variables**
2. Add each variable
3. Redeploy

---

## NEXT STEPS

1. ✅ Deploy to Vercel
2. 📢 Share with community
3. 🔍 Collect player feedback
4. 📚 Add more logs over time
5. 🎮 Expand story with ARG mechanics
6. 🏆 Create puzzles for community to solve

---

**Your Black Thorne ARG is now live. The shadow falls across the planes.**

[END TRANSMISSION]
