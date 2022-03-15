import { GridSize } from "@mui/material"
import { TechnologyName } from "./technologies"

export type RoutePath =
  | "/"
  | "/portfolio/mnw-automation"
  | "/portfolio/this-website"
  | "/portfolio/interactiveticketing"
  | "/portfolio/scan-tickets"
  | "/portfolio/tututix"
  | "/portfolio/material-ui-pack"
  | "/portfolio/material-ui-bootstrap"
  | "/resume"
  | "/keyboards"
  | "/portfolio/turnstile"
  | "/portfolio/dev-toolkit"
  | "/portfolio/electoral-live"
  | "/portfolio/expendas"
  | "/portfolio/developer-api"
  | "/portfolio/status-monitor-app"

type GridProp = boolean | GridSize

export interface GridImage {
  file: string
  xs?: GridProp
  sm?: GridProp
  md?: GridProp
  lg?: GridProp
  xl?: GridProp
}

interface Page {
  route: RoutePath
  title: string
  displayOnHome?: boolean
  description: string
  images?: (string | GridImage)[]
  menuImage: string
  stack: TechnologyName[]
  website?: string
  gitHub?: string
}

export const pages: Page[] = [
  {
    route: "/resume",
    displayOnHome: false,
    title: "Resumé",
    description: "My career path.",
    menuImage: "resume/stack.png",
    stack: [],
  },
  {
    route: "/portfolio/status-monitor-app",
    title: "Status Monitor",
    description: `I built a status monitor app to send alert notifications when a successful "ping" isn't received within a specified interval of time.`,
    menuImage: "status-monitor/status-monitor3.png",
    images: [
      "status-monitor/status-monitor1.png",
      "status-monitor/status-monitor2.png",
    ],
    stack: [
      "NextJS",
      "React",
      "Material UI",
      "PostgreSQL",
      "Prisma",
      "NodeJS",
      "DigitalOcean",
      "TypeScript",
    ],
    website: "https://status-monitor.app",
    gitHub: "https://github.com/claytonfbell/status-monitor-app.git",
  },
  {
    route: "/portfolio/developer-api",
    title: "Developer API",
    description: "A Developer API produced and maintained for clients.",
    menuImage: "developer-api/api.png",
    stack: ["PHP", "MySQL", "React"],
    website: "https://secure.interactiveticketing.com/developers/",
  },
  {
    route: "/portfolio/expendas",
    title: "Expendas",
    description: "A website for managing personal finance.",
    menuImage: "expendas/expendas1.png",
    stack: ["NextJS", "Material UI", "React", "TypeScript", "Vercel", "NodeJS"],
    website: "https://expendas.com",
    gitHub: "https://github.com/claytonfbell/expendas.git",
  },
  {
    route: "/portfolio/electoral-live",
    title: "Electoral Vote Visualizer",
    description: "A website that scrapes polling averages daily.",
    menuImage: "electoral-live/preview.png",
    stack: ["Material UI", "React", "TypeScript", "Netlify"],
    website: "https://electoral.live",
    gitHub: "https://github.com/claytonfbell/electoral-chart",
  },
  {
    route: "/portfolio/dev-toolkit",
    title: "Developer Toolkit",
    description:
      "An internal documentation and set of tools to help co-workers.",
    menuImage: "dev-toolkit/dev-toolkit-screen.png",
    stack: ["Electron", "Material UI", "React", "TypeScript", "mdx", "npm"],
    images: ["dev-toolkit/dev-toolkit-screen.png"],
  },
  {
    route: "/portfolio/material-ui-bootstrap",
    title: "NPM material-ui-bootstrap",
    menuImage: "material-ui-bootstrap/screen.jpg",
    description: `A light-weight set of bootstrap style components with material-ui.`,
    stack: ["npm", "Travis CI", "React", "TypeScript", "Material UI"],
    website: "https://material-ui-bootstrap.xyz",
    gitHub: "https://github.com/claytonfbell/material-ui-bootstrap",
  },
  {
    route: "/portfolio/turnstile",
    title: "The Turnstile Project",
    menuImage: "turnstile/turnstiles.jpg",
    images: [
      "turnstile/turnstiles.jpg",
      "turnstile/screen.png",
      "turnstile/diagram2.png",
      "turnstile/hardware.png",
    ],
    description: `An interesting project accomplished on a very short timeline.`,
    stack: ["PHP", "MySQL", ".NET C#", "SQLite3"],
  },
  {
    route: "/portfolio/material-ui-pack",
    title: "NPM material-ui-pack",
    menuImage: "material-ui-pack/npm2.png",
    description: `An opinionated api for form state, dark-mode and more.`,
    stack: ["npm", "Travis CI", "React", "TypeScript", "Material UI"],
    website: "https://material-ui-pack.xyz",
    gitHub: "https://github.com/claytonfbell/material-ui-pack",
  },
  {
    route: "/portfolio/mnw-automation",
    title: "New Electron App",
    menuImage: "mnw-automation/mnw-dock.png",
    images: [
      "mnw-automation/install2.png",
      "mnw-automation/screen1.png",
      "mnw-automation/screen2.png",
    ],
    description: `An Electron side-project application for Montessori Northwest.`,
    stack: ["Electron", "React", "TypeScript", "Material UI"],
    gitHub: "https://github.com/claytonfbell/mnw-automation",
  },
  {
    route: "/portfolio/interactiveticketing",
    title: "Interactive Ticketing",
    menuImage: "it-logo.png",
    images: [
      "interactive-ticketing/tbw.jpg",
      "interactive-ticketing/reports.png",
    ],
    description: `The primary software engineer that developed and maintained the platform from its founding.`,
    stack: [
      "PHP",
      "MySQL",
      "Angular",
      "TypeScript",
      "Bootstrap",
      "DigitalOcean",
    ],
    website: "https://www.interactiveticketing.com",
  },
  {
    route: "/portfolio/scan-tickets",
    title: "Ticket Scanning Apps",
    menuImage: "interactive-ticketing/scan.png",
    images: ["scan-tickets/ticket.jpeg"],
    description: `These products were developeed several years ago for our Interactive Ticketing clients to scan tickets at their venues.`,
    stack: ["PHP", "MySQL", "Objective-C", ".NET C#", "SQLite3"],
  },
  {
    route: "/portfolio/tututix",
    title: "TutuTix Dashboard",
    menuImage: "tutu/iphone.png",
    images: [
      { file: "tutu/iphone.png", xs: 12, sm: 8, md: 6, lg: 4 },
      { file: "tutu/ipad.png", xs: 12, lg: 8 },
      "tutu/desktop-cal.png",
    ],
    description: `Helping build a new dashboard manager for the TutuTix platform.`,
    stack: [
      "Java",
      "Oracle DB",
      "AWS",
      "Jenkins CI",
      "React",
      "TypeScript",
      "Material UI",
    ],
  },
  {
    route: "/portfolio/this-website",
    title: "This Website",
    menuImage: "claybell-net/tablet-dark.png",
    description: `This blog / portfolio site.`,
    stack: [
      "Remix",
      "React",
      "mdx",
      "TypeScript",
      "Material UI",
      "Vercel",
      "DigitalOcean",
      "Docker",
    ],
    gitHub: "https://github.com/claytonfbell/claybell-net3",
  },
  {
    route: "/keyboards",
    title: "Keyboards",
    description: "Keyboards are fun.",
    menuImage: "keyboards/stainless3.jpeg",
    stack: [],
  },
]
