import React from "react"
import AngularIcon from "./icons/AngularIcon"
import AWSIcon from "./icons/AWSIcon"
import BootstrapIcon from "./icons/BootstrapIcon"
import CSharpIcon from "./icons/CSharpIcon"
import { DigitalOcean } from "./icons/DigitalOcean"
import ElectronIcon from "./icons/ElectronIcon"
import GatsbyIcon from "./icons/GatsbyIcon"
import JavaIcon from "./icons/JavaIcon"
import JenkinsIcon from "./icons/JenkinsIcon"
import MaterialUIIcon from "./icons/MaterialUIIcon"
import MDXIcon from "./icons/MDXIcon"
import MySQLIcon from "./icons/MySQLIcon"
import NetlifyIcon from "./icons/NetlifyIcon"
import NextJsIcon from "./icons/NextJsIcon"
import { NodeJS } from "./icons/NodeJS"
import NPMIcon from "./icons/NPMIcon"
import ObjectiveCIcon from "./icons/ObjectiveCIcon"
import OracleIcon from "./icons/OracleIcon"
import PHPIcon from "./icons/PHPIcon"
import { PostgreSQL } from "./icons/PostgreSQL"
import { Prisma } from "./icons/Prisma"
import ReactIcon from "./icons/ReactIcon"
import { Remix } from "./icons/Remix"
import SQLite3Icon from "./icons/SQLite3Icon"
import TravisIcon from "./icons/TravisIcon"
import TypeScriptIcon from "./icons/TypeScriptIcon"
import VercelIcon from "./icons/VercelIcon"

export type TechnologyName =
  | "TypeScript"
  | "Electron"
  | "Material UI"
  | "React"
  | "mdx"
  | "Gatsby"
  | "Remix"
  | "Netlify"
  | "Angular"
  | "PHP"
  | "MySQL"
  | "Objective-C"
  | ".NET C#"
  | "SQLite3"
  | "Java"
  | "Oracle DB"
  | "AWS"
  | "npm"
  | "Travis CI"
  | "Jenkins CI"
  | "Bootstrap"
  | "Vercel"
  | "NextJS"
  | "PostgreSQL"
  | "Prisma"
  | "DigitalOcean"
  | "NodeJS"

export type TechnologyGroup = "Front-End" | "Backend" | "DevOps"

export interface Technology {
  name: TechnologyName
  icon: React.ReactNode
  url: string
  group: TechnologyGroup
  description?: string
}

export const technologies: Technology[] = [
  {
    name: "React",
    icon: <ReactIcon />,
    url: "https://www.reactjs.org",
    group: "Front-End",
    description: `I began learning and using React in early 2017. It is currently my favorite tool I reach for, whether I'm working on web, desktop, or mobile!

I attended [Reactathon 2019](https://www.reactjsvideos.com/conference/reactathon-2019) and [React Summit Amsterdam 2020](https://reactsummit.com) online, I hope to attend its rescheduling this fall if it is safe to travel. 
    `,
  },
  {
    name: "TypeScript",
    icon: <TypeScriptIcon />,
    url: "https://www.typescriptlang.org/",
    group: "Front-End",
    description: `In 2016 we started using TypeScript after attending [NG-CONF 2016](https://2016.ng-conf.org) which was a big part of the Angular 2 release. It certainly makes maintaining and refactoring many different projects easier and with confidence.`,
  },
  {
    name: "Electron",
    icon: <ElectronIcon />,
    url: "https://www.electronjs.org",
    group: "Front-End",
    description: `I've recently explored and learned how to build Electron applications. I really love it. I did not realize how may apps I use daily that use this framework.`,
  },
  {
    name: "Material UI",
    icon: <MaterialUIIcon />,
    url: "https://material-ui.com",
    group: "Front-End",
    description: `I'm a fan of this component library. It has further increased my productivity and improve accessiblity in my current projects.`,
  },
  {
    name: "Bootstrap",
    icon: <BootstrapIcon />,
    url: "https://getbootstrap.com",
    group: "Front-End",
    description: `I'm not sure I would reach for this on a brand new project, but I still work on and maintain dozens of applications daily that use amazing component / css library. `,
  },
  {
    name: "Gatsby",
    icon: <GatsbyIcon />,
    url: "https://www.gatsbyjs.org",
    group: "Front-End",
    description: `I took the opportunity to finally use the much touted Gatsby framework while producing this website. I think it deserves the attention is has received lately and I will probably use it again if a project's requirements line up with it.`,
  },

  {
    name: "mdx",
    icon: <MDXIcon />,
    url: "https://mdxjs.com",
    group: "Front-End",
    description: `I like to incorporate \`.mdx\` components and pages in React. This website and an internal Electron application I created for documentation are using this terrific solution.`,
  },

  {
    name: "Angular",
    icon: <AngularIcon />,
    url: "https://angular.io",
    group: "Front-End",
    description: `The first single-page-application I ever built was with jQuery and Backbone.js, but every front-end single page application I worked on from about 2013 to 2017 was created with Angular JS, and the majority of Interactive Ticketing is running on it.`,
  },
  {
    name: "PHP",
    icon: <PHPIcon />,
    url: "https://php.net",
    group: "Backend",
    description:
      "I learned PHP starting in 2000 while developing our first in-house shopping cart and CMS solution. In recent years I shifted to using PHP for REST APIs instead of for full stack.",
  },
  {
    name: "MySQL",
    icon: <MySQLIcon />,
    url: "https://www.mysql.com",
    group: "Backend",
    description:
      "I have nearly 20 years of experience with MySQL as the designer and maintainer of our platform. Our system relied on replication between multiple servers.",
  },
  {
    name: "Objective-C",
    icon: <ObjectiveCIcon />,
    url: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
    group: "Front-End",
    description:
      "I have an Enterprise Apple Membership. I wrote an iOS application in 2010 for scanning tickets. It gets regular updates with new features several times a year.",
  },
  {
    name: ".NET C#",
    icon: <CSharpIcon />,
    url: "https://dotnet.microsoft.com/learn/dotnet/what-is-dotnet-framework",
    group: "Front-End",
    description:
      "I began learning C# around 2003 while working on a project we did for AAA Travel. I maintain a half dozen desktop applications in C# today.",
  },
  {
    name: "SQLite3",
    icon: <SQLite3Icon />,
    url: "https://www.sqlite.org",
    group: "Front-End",
    description:
      "This is a great lightweight database I use to synchronize data locally in our native ticket scanning and POS applications.",
  },
  {
    name: "Java",
    icon: <JavaIcon />,
    url: "https://www.java.com",
    group: "Backend",
    description:
      "After Etix purchased Interactive Ticketing in 2017 I started using Java to contribute on their side. I specialize in writing API endpoints for a new dashboard manager.",
  },
  {
    name: "Oracle DB",
    icon: <OracleIcon />,
    url: "https://www.oracle.com/database",
    group: "Backend",
    description:
      "I have two years experience with Oracle. I have designed almost a dozen new tables added to the Etix platform since joining their team.",
  },
  {
    name: "AWS",
    icon: <AWSIcon />,
    url: "https://aws.amazon.com",
    group: "DevOps",
    description:
      "Around 2011 I moved all files in our platform to AWS S3 with references in our database. I recently added a similar system to the Etix platform. I also developed a multi docker container host in Elastic Beanstalk for hosting backend Java REST APIs.",
  },
  {
    name: "npm",
    icon: <NPMIcon />,
    url: "https://www.npmjs.com",
    group: "Front-End",
    description: "Several years experience with npm and yarn.",
  },
  {
    name: "Travis CI",
    icon: <TravisIcon />,
    url: "https://travis-ci.org",
    group: "DevOps",
    description: "Useful for open source side or side projects.",
  },
  {
    name: "Jenkins CI",
    icon: <JenkinsIcon />,
    url: "https://www.jenkins.io",
    group: "DevOps",
    description:
      "I developed several pipelines for building, deploying, and testing both front-end and backend applications.",
  },
  {
    name: "Netlify",
    icon: <NetlifyIcon />,
    url: "https://www.netlify.com",
    group: "DevOps",
    description: "This site is all that I currently use it for.",
  },
  {
    name: "NextJS",
    icon: <NextJsIcon />,
    url: "https://www.nextjs.com",
    group: "Front-End",
    description:
      "This is a terrific React framework, I hope to work with it more 😎.",
  },
  {
    name: "Vercel",
    icon: <VercelIcon />,
    url: "https://www.vercel.com",
    group: "DevOps",
    description: "Great option for hosting fast websites and apps.",
  },
  {
    name: "PostgreSQL",
    icon: <PostgreSQL />,
    url: "https://www.postgresql.org",
    group: "Backend",
    description: "A powerful, open source object-relational database",
  },
  {
    name: "Prisma",
    icon: <Prisma />,
    url: "https://www.prisma.io",
    group: "Backend",
    description: "Node.js and TypeScript ORM",
  },
  {
    name: "DigitalOcean",
    icon: <DigitalOcean />,
    url: "https://www.digitalocean.com",
    group: "DevOps",
    description: "Cloud infrastructure provider",
  },
  {
    name: "NodeJS",
    icon: <NodeJS />,
    url: "https://nodejs.org",
    group: "Backend",
    description: "JavaScript runtime",
  },
  {
    name: "Remix",
    icon: <Remix />,
    url: "https://remix.run",
    group: "Backend",
    description: "A terrific framework built upon react-router.",
  },
]
// docker
// python
// webpack
// Linux
// Cypress
// zeit
