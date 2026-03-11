# BLACK THORNE

```
████████████████████████████████████████████████████████████
█ BLACK THORNE SECURE PORTAL                              █
████████████████████████████████████████████████████████████

[CLASSIFIED] [EYES ONLY] [CLASSIFIED]

Access restricted to cleared personnel.
Unauthorized access will be logged and monitored.
```

## What is Black Thorne?

Black Thorne is an **Alternate Reality Game (ARG)** based on Dungeons & Dragons lore. It presents itself as a classified intelligence agency portal containing documents related to an infernal organization working under Asmodeus.

The site features:
- **Secure login portal** (with real credentials hidden in-game)
- **Classified intelligence archives** spanning 1800+ years
- **5 key story logs** that reveal a narrative of divine resurrection, artifact hunting, and planar intrigue
- **30+ filler logs** that provide authentic bureaucratic texture
- **Dark academia aesthetic** with military intelligence styling

### The Narrative

Black Thorne is an intelligence unit operating under the Father of the Abyss (Asmodeus). Their mission:
1. **Locate and resurrect Illium Zerynthar** - a powerful being from the fallen civilization of Netheril
2. **Track down the Crown of Karsus** - a world-altering artifact from ages past
3. **Recruit sleeper agents** and execute a "Grand Plan" (heavily redacted)
4. **Eliminate threats** to their operations (like the Reithwin Village incident)

The game reveals fragments of this story through classified documents, leaving gaps for players to theorize.

---

## Login Credentials

**Name:** Calliope Zerynthar  
**Password:** Charadrius  
**Location Key:** AAVVLL2

These are intentionally discoverable through gameplay and lore.

---

## The 5 Key Logs

### 1. **-339 DR | Fall of Netheril & Reincarnation Protocol**
- Introduces Black Thorne's founding mission
- Details Illium Zerynthar's reincarnation contingency
- Establishes the "Thorne Binding" that ensures operative loyalty

### 2. **1360 DR | Aasimar Subject & Abyssal Proxy**
- Post-Times of Troubles intelligence
- Identifies a half-Aasimar with corrupted divine bloodline
- Suggests Asmodeus is making moves in the material plane

### 3. **1395 DR | Asset K Activation & Grand Plan**
- Reactivates a long-dormant sleeper agent
- Introduces the mysterious "Sea Child" component (Asset K refuses to use it)
- Notes bitter rivalry between Illium Zerynthar and Asset K
- References Calliope's Soul Core project

### 4. **1478 DR | Calliope Zerynthar Soul-Core Completion**
- Calliope completes her magical research project
- Intelligence leak discovered (Harpers and Lords Alliance aware)
- **Scorched earth protocol executed: Reithwin Village destroyed**
- **Calliope is killed during containment**
- Components of her project scattered across planar locations

### 5. **1490 DR | Crown of Karsus Location & Barrier Key**
- Black Thorne successfully locates the Crown of Karsus
- Asset K procures the magical key to remove the artifact's barrier
- Key stored at "Disposal Facility, Forest of Suicides, Avernus Layer 2"
- Location Code: AAVVLL2
- Crown retrieval estimated within 6 months
- Final note: "All pieces converging. The Reincarnation Protocol approaches fruition."

---

## 30+ Filler Logs

The remaining entries are bureaucratic routine that provides texture:
- Personnel reviews
- Equipment maintenance reports
- Supply requisitions
- Combat training exercises
- Recruitment initiatives
- Internal conflicts
- Research grants
- Weather observations
- Compliance audits
- Espionage counter-operations

These logs make the archive feel authentic and hide the key story beneath realistic intelligence agency noise.

---

## Aesthetic Design

### Color Palette
- **Primary Navy:** #0a0e27
- **Accent Red:** #8b0000 (blood red)
- **Gold Accent:** #d4af37 (brass/military)
- **Text:** #e8e8e8 (pale cream on dark background)

### Visual Effects
- Film grain overlay (authentic declassified document feel)
- Scanlines (CRT monitor aesthetic)
- Glitch animations (data corruption effect)
- Red glow effects on interactive elements
- Classified stamps on corners of login page
- Redacted sections (black bars) in log content

### Typography
- **Headers:** IBM Plex Mono (technical, official)
- **Body:** Courier Prime (monospace, typewriter feel)

### Components
- Military-style warning alerts
- Classified document formatting
- Operational status bars
- Redacted text blocks
- Declassification stamps with dates

---

## Technology Stack

- **Framework:** React 18
- **Build Tool:** Vite (fast builds, excellent dev experience)
- **Styling:** CSS (custom, no utility frameworks)
- **Deployment:** Vercel (GitHub-connected, auto-deploys on push)
- **Hosting:** Free tier (perfect for ARG projects)

---

## How to Deploy

### Quick Start (5 minutes)

1. **Clone/Create Project:**
   ```bash
   git clone <repository-url>
   cd black-thorne
   npm install
   ```

2. **Test Locally:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` and try logging in with credentials above.

3. **Build & Push to GitHub:**
   ```bash
   npm run build
   git add .
   git commit -m "Deploy Black Thorne ARG"
   git push origin main
   ```

4. **Deploy to Vercel:**
   - Create account at [Vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click **Deploy** (Vercel auto-detects Vite project)
   - Live URL provided immediately

5. **Auto-Deploy Future Updates:**
   - Every push to GitHub automatically triggers Vercel deployment
   - Live within seconds

### Detailed Guide

See **QUICK_START_DEPLOYMENT_GUIDE.md** for comprehensive step-by-step instructions.

---

## Adding New Logs

To add new logs to the archive:

1. Open `src/App.jsx`
2. Find the `LOGS` array
3. Add new object:

```javascript
{
  id: 'LOG-XXX',
  date: 'YYYY DR',
  title: 'Log Title Here',
  classification: 'DECLASSIFIED', // or SECRET, ROUTINE, EYES ONLY
  declassifiedDate: 'YYYY DR',
  operationCode: 'OPERATION-CODE',
  keyLog: false, // set true for key story logs
  content: `Full log content...
  Can span multiple lines...
  [REDACTED] for hidden text`
}
```

4. Commit and push:
   ```bash
   git add src/App.jsx
   git commit -m "Add new intelligence logs"
   git push
   ```

Vercel deploys automatically!

---

## Features

### Dashboard
- 📋 Searchable log database (35+ entries)
- 🔍 Filter by classification level
- 📅 Date range slider (-339 DR to 1490 DR)
- 📊 Operational status tracking
- 🎖️ Key intelligence highlighting

### Logs
- 📝 Expandable/collapsible entries
- 🔴 Classification-based color coding
- ⚠️ Declassification stamps
- 🚫 Redacted sections
- 📌 Operation codes

### Security
- 🔐 Client-side login (intentional for ARG)
- 🎭 Session management
- ⏱️ Login attempt tracking
- 📍 Location key system

---

## ARG Community Potential

This project is designed for expansion:

### Immediate
- Share link with D&D/RPG communities
- Post cryptic hints on social media
- Create Discord server for player collaboration

### Phase 2
- Release new logs over time (monthly updates)
- Host community puzzles to unlock hidden logs
- Create "leaked documents" on social media
- Link to actual D&D lore events

### Phase 3
- Create audio logs (synthetic voice CIA briefings)
- Design physical collectibles (printed classified documents)
- Host live Discord events (emergency briefings)
- Tie into real D&D campaign timelines

---

## Troubleshooting

**Login not working?**
- Ensure exact spelling and capitalization:
  - Name: `Calliope Zerynthar` (capital C, capital Z)
  - Password: `Charadrius` (capital C)
  - Location Key: `AAVVLL2` (all caps)

**Styles not loading?**
- Clear browser cache (Ctrl+Shift+Delete)
- Refresh page (Ctrl+F5)
- Check browser console for errors

**Build fails on Vercel?**
- Run `npm run build` locally to check for errors
- Verify all dependencies are installed
- Check Vercel build logs for specific errors

**Changes not deploying?**
- Ensure you pushed to GitHub (`git push`)
- Check Vercel dashboard for deployment status
- Vercel typically deploys within 30 seconds

---

## File Structure

```
black-thorne/
├── public/
│   └── index.html              # Entry point
├── src/
│   ├── components/
│   │   ├── LoginPage.jsx       # Login UI
│   │   ├── DashboardPage.jsx   # Main dashboard
│   │   └── LogEntry.jsx        # Individual log display
│   ├── styles/
│   │   └── globals.css         # All styling
│   ├── App.jsx                 # Main component (contains logs)
│   ├── main.jsx                # React render point
│   └── index.css               # Global CSS imports
├── .github/
│   └── workflows/
│       └── deploy.yml          # Vercel auto-deploy
├── .gitignore
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind config
├── package.json                # Dependencies
└── README.md                   # This file
```

---

## Security & Privacy

⚠️ **Important Notes:**

- This is a **client-side only** application (no backend server)
- Login credentials are visible in source code (intentional—this is a game)
- No user data is stored or transmitted
- No external API calls made (fully self-contained)
- Suitable for entertainment/ARG purposes only
- Not suitable for real authentication

---

## License

This project is created for entertainment and community engagement purposes.

---

## Contributing

Ideas for expanding Black Thorne:

- Additional narrative logs
- New mystery elements
- Community puzzle integration
- Audio/visual content
- Cross-platform promotion
- Social media campaigns
- Physical collectibles

---

## Contact & Community

- **GitHub Issues:** Bug reports and suggestions
- **Discussions:** Community theories and ideas
- **Discord:** (Create community server to coordinate)
- **Reddit:** Share in D&D/RPG communities

---

## Credits

Created with dark inspiration from:
- D&D lore (Forgotten Realms, Dalereckoning calendar)
- CIA declassified document aesthetics
- Military intelligence thriller fiction
- ARG storytelling traditions

---

```
═══════════════════════════════════════════════════════════════
[CLASSIFICATION: DECLASSIFIED]
[DECLASSIFICATION AUTHORIZED: 1501 DR]

The Shadow of Black Thorne stretches across the planes.
The mission continues.
Access this archive if you have clearance.

═══════════════════════════════════════════════════════════════

All activity monitored and logged.
Unauthorized access will be detected.
Welcome to Black Thorne.
```

---

**Last Updated:** 1501 DR  
**Status:** ACTIVE - Monitor closely  
**Clearance Required:** THETA-7 (TS/SCI)
