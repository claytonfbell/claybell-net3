export interface Employment {
  employer: string
  position: string
  range: string
  text: string
  url?: string
}

export const employment: Employment[] = [
  {
    employer: "Electric Arrow",
    position: "Web Developer",
    range: "2000 - 2005",
    text: `I started my career at Electric Arrow, a hip little downtown Seattle web development studio while earning an associates degree in graphic design. I fell in love with PHP while creating a CMS / shopping cart product that eventually served the websites for all of our clients. Some of our web clients needed to sell tickets to their auto shows and fairs, so we developed a ticketing platform. As that venture took off we decided to make it our primary focus and we renamed the company to Interactive Ticketing.`,
  },
  {
    employer: "Interactive Ticketing",
    position: "Software Engineer",
    range: "2005 - Present",
    text: `For the first several years I was the sole engineer and systems administrator until we hired a terrific front-end developer to contribute around 2015. Our platform sells and scans millions of tickets for our clients each year through the web, our point of sales, and our Kiosks.`,
    url: "https://www.interactiveticketing.com",
  },
  {
    employer: "Etix",
    position: "Software Engineer",
    range: "2017 - Present",
    text: `In fall of 2017, Etix acquired Interactive Ticketing. I'm still running and maintaining the Interactive Ticketing platform, but I also contribute heavily to help modernize Etix products with React, Webpack, REST APIs and launching their first ticketing Kiosk and more.`,
    url: "https://www.etix.com",
  },
]
