# CGPA Calculator

A web application to help students quickly calculate their CGPA. Select your department, enter the grades and credits for each subject, and get your result instantly.

Built with **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **MongoDB** (via Mongoose).

## Features

- **Landing page** with a quick "How It Works" walkthrough.
- **Department browser** — pick your department from a list stored in MongoDB.
- **Add your own department** — contribute departments that aren't listed yet.
- **CGPA calculator** — enter grades and credits per subject and compute CGPA using the standard formula.
- **Confetti celebration** 🎉 when you finish calculating.

## How It Works

1. **Select your department** from the available list (or add a new one).
2. **Fill out your scores** — enter the grade and credits for each course.
3. **Get your CGPA** — hit calculate to see your result instantly.

## Tech Stack

| Area        | Tooling                              |
| ----------- | ------------------------------------ |
| Framework   | Next.js 14 (App Router)              |
| Language    | TypeScript                           |
| Styling     | Tailwind CSS + shadcn/ui             |
| Database    | MongoDB (Mongoose)                   |
| Utilities   | React Confetti, lucide-react, CVA    |

## Project Structure

```text
cgpaCalculator/
├── public/                 # Static assets
├── src/
│   ├── Components/         # Reusable React UI components
│   │   ├── CopyComponent.tsx    # Copy department ID to clipboard
│   │   ├── Fallback.tsx         # Loading / error fallback UI
│   │   ├── GradeDropdown.tsx    # Grade selection dropdown
│   │   ├── GradeSelector.tsx    # Renders grade input controls
│   │   ├── LandingPage.tsx      # Home / hero landing page
│   │   └── SubjectList.tsx      # Lists subjects with grades & credits
│   ├── Constants/
│   │   └── index.js             # Shared constants (default departments, grade points)
│   ├── app/                # Next.js App Router (routes & pages)
│   │   ├── actions/
│   │   │   └── adddepartment.ts # Server actions for department CRUD
│   │   ├── department/
│   │   │   ├── [name]/page.tsx  # CGPA page for a specific department
│   │   │   ├── newdepartment/page.tsx # Create a new department
│   │   │   └── page.tsx         # List / browse departments
│   │   ├── util/
│   │   │   └── database.ts      # Mongoose (MongoDB) connection helper
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx             # Home route (renders LandingPage)
│   └── lib/
│       └── utils.ts             # Shared utility helpers (e.g. cn())
├── components.json         # shadcn/ui configuration
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the project root and add your MongoDB connection string:

```env
NEXT_PUBLIC_MONGODB=mongodb+srv://<user>:<password>@<cluster-url>/<database>
```

> The app connects to a MongoDB database named `AidConnect` and uses two collections: `departments` and `counters`.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to use the app.

## Available Scripts

| Script           | Description                          |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Start the development server         |
| `npm run build`  | Build the production bundle          |
| `npm run start`  | Run the production server            |
| `npm run lint`   | Lint the codebase with ESLint        |

## Deployment

The easiest way to deploy is with the [Vercel Platform](https://vercel.com/new). Make sure to set the `NEXT_PUBLIC_MONGODB` environment variable in your deployment settings.
