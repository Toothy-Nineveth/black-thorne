# BLACK THORNE ARG - Implementation Plan
## A Shadowy Intelligence Organization Web Experience

---

## PROJECT OVERVIEW

**Type**: Alternate Reality Game (ARG) / Interactive Fiction  
**Deployment**: GitHub + Vercel  
**Aesthetic**: CIA-style declassified intelligence, dark academia, occult bureaucracy  
**Target Audience**: D&D lore enthusiasts, ARG players, dark fantasy fans  
**Core Narrative**: An infernal intelligence unit seeking to resurrect a dead deity and recover artifacts of world-altering power

---

## PHASE 1: TECH STACK & SETUP

### Technology Selections
- **Frontend Framework**: React (Vite for fast builds)
- **Styling**: Tailwind CSS + Custom CSS for atmospheric effects
- **Deployment**: Vercel (connected to GitHub repository)
- **Version Control**: GitHub (public repository with intentional "leaks")
- **State Management**: React Context API (simple, no external dependencies)
- **Authentication**: Client-side simulation (for ARG authenticity—"your credentials are cached")

### Repository Structure
```
black-thorne/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── LoginPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── LogEntry.jsx
│   │   └── AccessDenied.jsx
│   ├── data/
│   │   ├── logs.js
│   │   ├── credentials.js
│   │   └── locations.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── animations.css
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── App.jsx
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── vite.config.js
└── README.md
```

### Initial Setup Commands
```bash
npm create vite@latest black-thorne -- --template react
cd black-thorne
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev
```

---

## PHASE 2: LOGIN PAGE DESIGN & UX

### Aesthetic Direction: **Classified Military Intelligence**
- **Color Palette**: Deep navy (#0a0e27), Blood red accents (#8b0000), Gold/brass highlights (#d4af37), Desaturated greens
- **Typography**: 
  - Headers: "Courier Prime" (monospace, official documents feel)
  - Body: "IBM Plex Mono" (technical, authentic)
- **Visual Elements**:
  - Subtle film grain overlay
  - Glitch effects on hover (data corruption aesthetic)
  - Blinking cursor in input fields
  - Red "RESTRICTED" watermarks (semi-transparent, behind text)
  - Faint grid background
  - Declassified stamp effect on logos

### Login Page Components

#### 1. **Header Section**
```
┌─────────────────────────────────────────────────┐
│        ████████████████████████████████         │
│        █ BLACK THORNE SECURE PORTAL █           │
│        ████████████████████████████████         │
│                                                 │
│        [CLASSIFIED] [EYES ONLY] [CLASSIFIED]   │
│                                                 │
│        Access restricted to cleared personnel  │
│        Unauthorized access will be logged      │
│                                                 │
└─────────────────────────────────────────────────┘
```

#### 2. **Credential Input Fields**

**Field 1: Agent Name**
- Label: "AGENT DESIGNATION"
- Placeholder: "Last Name, First Name [CLEARANCE_LEVEL]"
- Input type: text
- Styling: Monospace, red border on focus, glitch animation on invalid entry

**Field 2: Authorization Code**
- Label: "AUTHENTICATION VECTOR"
- Placeholder: "●●●●●●●●●●"
- Input type: password
- Character count display (optional, CIA-style paranoia)

**Field 3: Location Key**
- Label: "OPERATIONAL THEATER"
- Placeholder: "Theater Code (PRIMARY or SECONDARY)"
- Tooltip on hover: "Examples: Testing facility in Avernus, The Drowning Court, Disposal Facility (Forest of Suicides)"
- Info icon with hover reveal
- Red error text if incorrect

#### 3. **Interactive Elements**
- "VERIFY CREDENTIALS" button (not "Login")
- "TRANSMISSION ERROR?" link (opens help text)
- "REQUEST NEW CLEARANCE" link (joke—links to nothing, 404)
- Blinking "ACTIVE TRANSMISSION" indicator

#### 4. **Security Warnings**
- "Session timeout: 45 minutes"
- "Multiple failed attempts will trigger automatic lockdown"
- "All activity monitored and logged"
- Small print legal disclaimer in ultra-small font (unreadable by design)

### Login Page Interaction Flow

```
User Enter Credentials
         ↓
[Client-side validation]
         ↓
    ┌────────────────────────────────────┐
    │ Match: Calliope / Charadrius / AAVVLL2?
    ├────────────────────────────────────┤
    │ YES → Grant access to dashboard   │
    │ NO  → Show "ACCESS DENIED" screen │
    │       with redacted reasons       │
    └────────────────────────────────────┘
         ↓
   [Session stored locally]
         ↓
   [Redirect to Dashboard]
```

### Visual Effects
- **Page Load**: Fade in with scanlines effect, typewriter intro text
- **Input Focus**: Border animates to red, subtle glow
- **Submission**: Screen flickers, brief "PROCESSING..." message
- **Success**: Page dissolves to black, then fades to dashboard
- **Error**: Red flash, "INVALID CREDENTIALS" text pulses, input shakes

---

## PHASE 3: DASHBOARD & LOG SYSTEM

### Dashboard Layout

#### Top Section: Command Header
```
┌─────────────────────────────────────────────────────────┐
│ BLACK THORNE INTELLIGENCE ARCHIVE                       │
│ OPERATION STATUS: [████████░░] 87% COMPLETE            │
│ CURRENT SECURITY LEVEL: THETA-7 (TS/SCI)              │
│ LAST BRIEFING: [timestamp]                             │
└─────────────────────────────────────────────────────────┘
```

#### Middle Section: Log Display
- **Filter Options**:
  - By Date Range (slider from -339 DR to 1490 DR)
  - By Classification Level (ROUTINE, SIGNIFICANT, CRITICAL)
  - By Operation Code (auto-populate from logs)
  
- **Log Entry Format** (CIA-style redacted documents):
  ```
  ═══════════════════════════════════════════════════════
  [CLASSIFICATION: ███████] [DATE: -339 DR]
  [OPERATION CODE: RESURRECTION-PROTOCOL]
  ═══════════════════════════════════════════════════════
  
  SUBJECT: Fall of Netheril Contingency
  
  Intelligence summary details here...
  [Some text intentionally redacted with █ blocks]
  
  STATUS: ONGOING
  CLEARANCE REQUIRED: OMEGA-12
  ```

#### Bottom Section: Navigation
- Timeline visualization (interactive bar showing eras)
- Quick filters
- Logout button (labeled "TERMINATE SESSION")

### Log Entry Design Features

1. **Visual Hierarchy**:
   - Classification headers (RESTRICTED, DECLASSIFIED, EYES ONLY)
   - Dates formatted: "YYYY DR" (Dalereckoning, D&D calendar)
   - Redacted sections: Solid black bars with "REDACTED" stamp
   - Footnotes with declassification dates

2. **Data Structure** (JavaScript):
   ```javascript
   {
     id: 'LOG-001',
     date: '-339 DR',
     title: 'Fall of Netheril & Resurrection Protocol',
     classification: 'DECLASSIFIED',
     declassifiedDate: '1501 DR',
     operationCode: 'RESURRECTION-PROTOCOL',
     content: '...',
     keyDetails: true, // Marks as one of 5 key logs
     redactedSections: [2, 5, 8], // Paragraph indices
   }
   ```

3. **Interaction**:
   - Click to expand full log (fade in detail)
   - Hover over dates for era context
   - Hover over redacted sections to reveal/hide (optional gamification)
   - Print-to-PDF style view

---

## PHASE 4: LOG CONTENT & NARRATIVE

### 5 Key Story Logs

#### LOG 1: **-339 DR | RESURRECTION-PROTOCOL**
**Title**: "Fall of Netheril Contingency & Illium Zerynthar Reincarnation Initiative"

**Content Summary**:
- Records Black Thorne's discovery of the cataclysmic fall of Netheril
- Documents Illium Zerynthar's final moments and their reincarnation contingency plan
- Black Thorne forms with explicit mission: Locate and recruit/resurrect Illium Zerynthar
- References "Thorne Binding Ritual" as failsafe mechanism
- Multiple redacted sections hint at names of other deities/entities involved

**CIA-Style Elements**:
- Declassified stamp with date "DECLASSIFIED: 1501 DR"
- References to "assets in the Underdark"
- Code names for individuals (Agent [REDACTED], Subject Zaryn, etc.)
- Footnotes citing "Cross-reference: NETHERIL_COLLAPSE_001, ABYSS_INTELLIGENCE_REPORT"

---

#### LOG 2: **1360 DR | ABYSS-INCURSION-ALERT**
**Title**: "Identification of Aasimar Subject & Potential Abyssal Proxy"

**Content Summary**:
- Post-Times of Troubles: Black Thorne detects unusual divine signature in material plane
- Identifies Aasimar with "corrupted celestial bloodline" and "false divinity marker"
- Intelligence: "Father of the Abyss" may be attempting planar intrusion
- Speculation that Asmodeus is making moves for expanded influence
- Recommends monitoring and potential recruitment/elimination
- Multiple agents flagged for possible infiltration

**CIA-Style Elements**:
- Classification: TOP SECRET / CRITICAL INTELLIGENCE
- Heavily redacted identities and locations
- References to surveillance protocols
- "FLASH PRIORITY" markings
- Footnotes: "See biological profile [REDACTED] for genetic markers"

---

#### LOG 3: **1395 DR | SLEEPER-AGENT-ACTIVATION**
**Title**: "Asset K Activation & Grand Plan Initiation"

**Content Summary**:
- Black Thorne initiates contact with long-dormant sleeper agent ("Asset K")
- Grand Plan details [HEAVILY REDACTED - This is the ARG mystery]
- Asset K refuses to utilize "the Sea Child" component for unknown reasons
- Conflict: Illium Zerynthar (now reincarnated) forms bitter rivalry with Asset K
- Internal memo suggests personal vendetta complicating mission objectives
- References "Calliope's soul-core research" as critical path
- Recommendation: Proceed with caution, monitor IL/Asset K tensions

**CIA-Style Elements**:
- Interdepartmental memo format
- Multiple classification levels (parts are DECLASSIFIED, parts are REDACTED)
- Psychological profiles [REDACTED]
- Asset handler notes: "K displays unusual resistance to standard conditioning"
- Footnote threat assessment: "Subject K rated ALPHA-THREAT if compromised"

---

#### LOG 4: **1478 DR | REITHWIN-INCIDENT**
**Title**: "Calliope Zerynthar Soul-Core Completion & Operational Casualty"

**Content Summary**:
- Calliope Zerynthar completes "Soul Core Project" (classified magical weapon/artifact)
- Leak detected: Lords Alliance and Harpers gaining intelligence on project
- Black Thorne decision: Scorched earth protocol activated
- Reithwin Village destroyed to eliminate leak (civilian casualties [REDACTED])
- Calliope Zerynthar: "Unfortunately terminated during containment operations"
- Post-action analysis: Successful containment, but high cost
- New protocol: Project archived, components scattered across planes
- Recommendation: Find successor to Calliope for future iterations

**CIA-Style Elements**:
- Heavy redaction of civilian casualty numbers
- Euphemistic language: "terminated," "contained," "regrettable incident"
- Damage assessment reports [PARTIALLY DECLASSIFIED]
- References to "incineration teams" and "site sterilization"
- Official cover story for public investigation [REDACTED]
- Footnote: "See REITHWIN_COVER_STORY_001 for approved media narrative"

---

#### LOG 5: **1490 DR | CROWN-OF-KARSUS-RECOVERY**
**Title**: "Artifact Recovery: Crown of Karsus Location Pinpointed & Barrier Key Acquisition"

**Content Summary**:
- Black Thorne intelligence successfully locates Crown of Karsus (legendary artifact)
- Crown protected by ancient barrier; key required for access
- Asset K: Confirmed key acquisition through [REDACTED] operation
- Key currently stored: "Disposal Facility, Forest of Suicides, Avernus Layer"
- Location Key: AAVVLL2 (Avernus, Level 2—Testing Facility designation)
- Operational readiness: Crown retrieval phase estimated 6 months
- Security concern: Other factions (Harpers, Lords Alliance) may be pursuing parallel intel
- Final note: "All pieces converging. The Reincarnation Protocol approaches fruition."

**CIA-Style Elements**:
- Multiple redacted agency names (likely referring to other D&D factions)
- Encryption references for artifact protection
- Security clearance requirements for full read
- Footnotes: "Cross-reference ARTIFACT_LOCATION_DATABASE, ABYSS_LOGISTICS_001"
- Timestamped update: "STATUS: ACTIVE - Monitor closely"

---

### Filler Logs (20-30 routine entries)

These provide authentic texture and hide the key narrative:

**Examples**:
- "1252 DR | Quarterly Asset Review" - Standard personnel evaluations, nothing juicy
- "1267 DR | Facility Maintenance Report" - Bureaucratic droning about Avernus facility upkeep
- "1284 DR | Supply Requisition Approved" - Requests for obsidian, sulfur, rare herbs
- "1301 DR | Training Exercise After-Action Report" - Combat simulation results
- "1310 DR | Recruitment Drive Update" - Notes on acquiring new operatives
- "1330 DR | Internal Conflict Resolution" - Someone filed a grievance (redacted)
- "1340 DR | Experimental Magic Review" - Classified research summary
- "1365 DR | Asset Status Updates" - Routine check-ins with field agents
- "1375 DR | Diplomatic Incident (Waterdeep)" - Awkward encounter, covered up
- "1388 DR | Information Breach Contained" - A spy got caught, executed
- "1405 DR | Facility Expansion Planning" - Building new rooms in the Abyss
- "1425 DR | Artifact Procurement Methods" - Stealing things, basically
- "1445 DR | Theological Research Grant" - Studying Abyssal gods (academic paper included)
- "1460 DR | Partnership Proposal (Rejected)" - Some faction tried to join, nope
- "1475 DR | Equipment Upgrade Cycle" - New weapons approved for field teams
- "1485 DR | Weather Phenomenon in Avernus" - Climate observation notes (pointless)
- "1495 DR | Annual Compliance Audit" - Everything checks out, proceed as planned

---

## PHASE 5: TECHNICAL IMPLEMENTATION

### Component 1: `LoginPage.jsx`

Features:
- Form with three input fields (Name, Password, Location Key)
- Tooltip system for Location Key hover info
- Form validation (case-sensitive, exact match required)
- Visual feedback (glitch effects, color changes)
- Error messages rendered as CIA-style "ACCESS DENIED" alerts
- Session storage after successful login
- Animated page load with typewriter effect intro

### Component 2: `DashboardPage.jsx`

Features:
- Command header with operation status bar
- Log list with filtering/sorting
- Timeline slider for date navigation
- Search functionality (search log titles, content)
- Sort options (by date, by classification)
- Full-log viewer (modal or expanded view)
- Logout button (clears session)
- Responsive grid layout

### Component 3: `LogEntry.jsx`

Features:
- Render individual log entry cards
- Redaction block rendering (█ characters)
- Classification header styling
- Date formatting
- Click-to-expand behavior
- Print-friendly CSS

### Component 4: `AccessDenied.jsx`

Features:
- Displayed when login fails
- Dramatic styling (red screen, alarm sounds optional)
- "INVALID CREDENTIALS" message
- "Attempt counter: X/3 remaining before lockdown"
- Retry button
- "Cannot Verify Clearance" footer

### Global Styles: `globals.css`

Key effects:
- Scanlines overlay (semi-transparent horizontal lines)
- Film grain texture (noise pattern)
- Font imports (Courier Prime, IBM Plex Mono)
- CSS variables for colors (dark navy, blood red, gold)
- Animations: `glitch`, `flicker`, `typewriter`, `pulse-glow`
- Hover effects: Red borders, shadow expansion, slight scale increase
- Print styles: Hide UI, show full logs

### Authentication Context: `AuthContext.jsx`

Simple context for:
- Login state management
- Session persistence (localStorage)
- Auto-logout on window close (optional)
- Credential validation function

---

## PHASE 6: DATA STRUCTURES

### `credentials.js`
```javascript
export const VALID_CREDENTIALS = {
  name: 'Calliope Zerynthar',
  password: 'Charadrius',
  locationKey: 'AAVVLL2',
};

export const LOCATION_KEYS_INFO = {
  'AAVVLL2': 'Testing facility in Avernus (Level 2)',
  'Other hints': 'Deciphered through ARG community...',
};
```

### `logs.js`
```javascript
export const LOGS = [
  {
    id: 'LOG-001',
    date: '-339 DR',
    title: 'Fall of Netheril Contingency...',
    classification: 'DECLASSIFIED',
    declassifiedDate: '1501 DR',
    operationCode: 'RESURRECTION-PROTOCOL',
    keyLog: true,
    content: '...',
  },
  // ... 29 more entries
];
```

### `locations.js`
```javascript
export const LOCATIONS = [
  { code: 'AAVVLL2', name: 'Avernus Level 2 - Testing Facility', region: 'Avernus' },
  // Hidden location references scattered throughout logs
];
```

---

## PHASE 7: DEPLOYMENT & GITHUB SETUP

### GitHub Repository Structure
```
black-thorne/
├── .github/workflows/deploy.yml (auto-deploy on push)
├── public/
├── src/
├── package.json
├── vite.config.js
├── README.md (intentionally vague teaser)
└── .gitignore
```

### README.md (Teaser)
```markdown
# BLACK THORNE

A classified intelligence archive. Access restricted.

**If you have clearance**, you know what to do.

Otherwise, move along. Nothing to see here.

---

*Unauthorized access will be logged and monitored.*
```

### Vercel Deployment
1. Connect GitHub repository to Vercel project
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push to main branch
5. Custom domain optional (can use vercel.app domain)

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## PHASE 8: ARG MECHANICS & MYSTERY LAYERS

### Layer 1: The Login (Easy)
- Players discover the correct credentials through:
  - Naming the main character (Calliope Zerynthar)
  - Finding the password hidden in the logs/lore
  - Inferring the location key from context clues

### Layer 2: The Narrative (Medium)
- Reading between redacted lines
- Connecting 5 key logs to form coherent story
- Identifying real D&D lore references
- Realizing Black Thorne is a tool of Asmodeus

### Layer 3: The Mystery (Hard)
- What is Asset K's true identity?
- What was the "Grand Plan" (so heavily redacted)?
- Why did Calliope refuse to use "the Sea Child"?
- Where is the Crown of Karsus actually being used?
- What happens next after 1490 DR?

### Optional ARG Progression
- Phase 2: Discord server with "leaked" classified documents
- Phase 3: Community ARG solves real-world puzzles to unlock new logs
- Phase 4: New logs added periodically, advancing narrative
- Phase 5: Community predictions affect game canon

---

## PHASE 9: SECURITY & EDGE CASES

### Security Considerations
- **No real authentication**: This is client-side only (intentional for ARG transparency)
- **No backend**: All data served from frontend (GitHub Pages/Vercel static)
- **Session storage**: Uses localStorage (survives page refresh, cleared on browser close)
- **Credential hiding**: Credentials not in client code; instead hashed or obfuscated
  - Option: Store as simple string comparison (this is ARG, not real security)
  - Better: Hash credentials with simple algorithm, compare hashes

### Edge Cases
- **User clears cache**: Logs them out (expected behavior)
- **Multiple tabs**: Share session state via localStorage events
- **Mobile/tablet**: Responsive design, stacked layout
- **Print view**: Hide UI, show full logs in print-friendly format
- **Accessibility**: Proper heading hierarchy, alt text, focus states

---

## PHASE 10: VISUAL & AUDIO DESIGN (Optional Enhancements)

### Sound Effects (Optional)
- Login page: Subtle electronic hum, data processing beeps
- Successful login: Satisfying confirmation tone (not jarring)
- Button clicks: Soft keypress sounds (retro computer feel)
- Access denied: Alarm klaxon (brief, startling)

### Visual Polish
- **Cursor**: Custom crosshair or targeting reticle cursor
- **Scrollbars**: Styled as metal/industrial elements
- **Loading states**: Progress bars with military aesthetic
- **Transitions**: Cross-fades, dissolves (cinematic)
- **Modals**: Appear with slide-in or scale animations

### Color Palette Reference
- **Primary Navy**: #0a0e27
- **Accent Red**: #8b0000
- **Gold/Brass**: #d4af37
- **Dark Green**: #1a3a2a
- **Text Primary**: #e8e8e8
- **Text Secondary**: #a0a0a0
- **Border/Line**: #404040

---

## DELIVERABLES CHECKLIST

### Code Files
- [ ] `src/components/LoginPage.jsx` - Full login UI with validation
- [ ] `src/components/DashboardPage.jsx` - Main dashboard with log list
- [ ] `src/components/LogEntry.jsx` - Individual log entry renderer
- [ ] `src/components/AccessDenied.jsx` - Error state UI
- [ ] `src/context/AuthContext.jsx` - Authentication state management
- [ ] `src/data/logs.js` - All 35 log entries (5 key + 30 filler)
- [ ] `src/data/credentials.js` - Login credentials & location info
- [ ] `src/styles/globals.css` - Global styling, animations, effects
- [ ] `src/styles/animations.css` - Keyframe animations
- [ ] `src/App.jsx` - Main component with routing logic
- [ ] `vite.config.js` - Vite configuration
- [ ] `package.json` - Dependencies (React, Tailwind, Vite)
- [ ] `.github/workflows/deploy.yml` - Vercel deployment automation
- [ ] `README.md` - Teaser copy

### Content Files
- [ ] 5 key story logs (fully detailed narrative)
- [ ] 30 filler logs (realistic bureaucratic entries)
- [ ] Location reference guide
- [ ] Redaction patterns and classified markings

---

## ESTIMATED TIMELINE

| Phase | Task | Duration |
|-------|------|----------|
| 1 | Setup & Tech Stack | 1-2 hours |
| 2 | Login Page Design & Implementation | 4-6 hours |
| 3 | Dashboard Layout & Components | 3-4 hours |
| 4 | Log Content Writing & Narrative Design | 6-8 hours |
| 5 | Log Data Structure & Integration | 2-3 hours |
| 6 | Styling, Animations, Polish | 4-5 hours |
| 7 | Testing & Debugging | 2-3 hours |
| 8 | GitHub Setup & Vercel Deployment | 1-2 hours |
| **Total** | | **23-33 hours** |

---

## NOTES FOR IMPLEMENTATION

1. **Start with Login Page**: This is the entry point and most visible component. Get the aesthetic right here.

2. **Build Logs First**: Write all 35 log entries before integrating them into the UI. This ensures narrative consistency.

3. **Use CSS Animations**: Heavy reliance on CSS for performance (no external animation libraries needed).

4. **Accessibility**: Ensure all interactive elements are keyboard-accessible. Glitch effects should not cause seizures (avoid rapid flashing).

5. **Mobile-First**: Design responsive from the ground up.

6. **Version Control**: Commit frequently, push to GitHub to auto-trigger Vercel deployments.

7. **Community Ready**: The code should be readable so the ARG community can inspect it and hunt for clues.

8. **Longevity**: The narrative should support future expansion (more logs added over time, new mysteries revealed).

---

## POST-LAUNCH CONSIDERATIONS

### Marketing the ARG
- Seed links in D&D forums, Reddit communities
- Hint at existence through cryptic social media posts
- Create a companion Discord for community collaboration
- Release physical "leaked documents" at conventions

### Narrative Expansion
- Add new logs monthly, advancing the story
- Host community puzzles to unlock additional content
- Create companion media (audio logs, video "intercepted transmissions")
- Tie into actual D&D campaign events

### Community Engagement
- Monitor GitHub issues/discussions for player theories
- Respond to questions with in-character "classified denials"
- Curate best community theories on a wiki
- Host live events (e.g., "emergency briefings" via Discord)

---

## CONCLUSION

This implementation creates an immersive, narratively-rich ARG experience that blends D&D lore with intelligence thriller aesthetics. The careful balance of mystery, redaction, and revelation keeps players engaged while the technical implementation remains clean and maintainable.

**The Shadow of Black Thorne is ready to fall across the planes.**

---

*[END CLASSIFIED DOCUMENT]*
*[DECLASSIFICATION AUTHORIZED: 1501 DR]*
