# CGPA Calculator

A web app to calculate and track CGPA across departments and subjects.

## Project Structure

```text
cgpaCalculator/
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Files and folders ignored by Git
├── components.json         # shadcn/ui component configuration
├── next.config.js          # Next.js framework configuration
├── postcss.config.mjs      # PostCSS setup (Tailwind CSS)
├── tailwind.config.ts      # Tailwind CSS theme and directives
├── tsconfig.json           # TypeScript compiler configuration
├── package.json            # Project scripts and dependencies
├── package-lock.json       # Locked dependency versions
├── public/                 # Static assets served as-is
│   ├── next.svg            # Next.js branding
│   └── vercel.svg          # Vercel branding
└── src/
    ├── Components/         # Reusable React UI components
    │   ├── CopyComponent.tsx    # Copy-to-clipboard helper
    │   ├── Fallback.tsx         # Loading / error fallback UI
    │   ├── GradeDropdown.tsx    # Grade selection dropdown
    │   ├── GradeSelector.tsx    # Renders grade input controls
    │   ├── LandingPage.tsx      # Home / hero landing page
    │   └── SubjectList.tsx      # Lists subjects with grades & credits
    ├── Constants/
    │   └── index.js             # Shared constants (e.g. grade points)
    ├── app/                # Next.js App Router (routes & pages)
    │   ├── actions/
    │   │   └── adddepartment.ts # Server action to add a department
    │   ├── department/
    │   │   ├── [name]/
    │   │   │   └── page.tsx     # CGPA page for a specific department
    │   │   ├── newdepartment/
    │   │   │   └── page.tsx     # Create a new department
    │   │   └── page.tsx         # List / browse departments
    │   ├── util/
    │   │   └── database.ts      # Mongoose (MongoDB) connection helper
    │   ├── favicon.ico
    │   ├── globals.css          # Global stylesheet
    │   ├── layout.tsx           # Root layout wrapper
    │   └── page.tsx             # Home route (renders LandingPage)
    └── lib/
        └── utils.ts             # Shared utility helpers (e.g. cn())
```

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.
