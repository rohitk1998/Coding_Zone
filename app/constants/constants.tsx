import AndroidIcon from "../../public/images/androidicon.png";
import IphoneIcon from "../../public/images/iphoneicon.png";
import WebIcon from "../../public/images/webicon.png";
import UxIcon from "../../public/images/ui_uxicon.png";
import sanaya from "../../public/images/snaya.jpg";
import liam from "../../public/images/liam.jpg";
import john from "../../public/images/john.jpg";
import denial from "../../public/images/denial.jpg";
import gola from "../../public/images/gola.jpg";
import pooja from "../../public/images/client1.jpg";
import pinto from "../../public/images/pinto.jpg";
import shilpa from "../../public/images/shilpa.jpg";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const MENU_ITEMS = [
  { menuItem: "Home", path: "/" },
  { menuItem: "About", path: "/about" },
  { menuItem: "Services", path: "/services" },
  { menuItem: "Contact Us", path: "/contactus" },
];

const COMPANY_INFORMATION = [
  {
    totalYr: "1+",
    description: "Years In Buisness",
  },
  {
    totalYr: "20+",
    description: "Solutions Delivered",
  },
  {
    totalYr: "90%",
    description: "Client Retention",
  },
  {
    totalYr: "10+",
    description: "Enthusiest Team Members",
  },
];

const WORK_OVERVIEW = [
  {
    mainHeading: "Android Development",
    description:
      "We create mobile applications using Native Stacks, Android Studio and Flutter.",
    icon: AndroidIcon,
  },
  {
    mainHeading: "Web Development",
    description: "We have build sevral Apps, using Reactjs and Nextjs.",
    icon: WebIcon,
  },
  {
    mainHeading: "iOS Development",
    description: "We create mobile applications using Native Stacks, Xcode.",
    icon: IphoneIcon,
  },
  {
    mainHeading: "UI/UX Design",
    description: "We have provided best pixel prefect designs.",
    icon: UxIcon,
  },
];

const FOOTER_LINKS = [
  {
    title: "Support",
    links: [
      {
        name: "Documentation",
      },
      {
        name: "Guidence",
      },
      {
        name: "Pricing",
      },
      {
        name: "Contact",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        name: "Android Development",
      },
      {
        name: "iOS Development",
      },
      {
        name: "Web Development",
      },
      {
        name: "Marketing",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "Contact",
      },
      {
        name: "About",
      },
      {
        name: "Gallery",
      },
    ],
  },
];

const FOOTER_ICONS = [
  {
    icon: faTwitter,
  },
  {
    icon: faInstagram,
  },
  {
    icon: faLinkedin,
  },
  {
    icon: faFacebook,
  },
];

const TESTIMONIAL_SLIDES = [
  {
    id: 0,
    clientName: "Robert",
    clientImage: denial,
    ratingCount: 5,
    messageTitle:
      "It was an absolute pleasure working with Kashish. He did the job well and was able to communicate issues and roadblocks effectively.",
    clientMessage:
      "It was an absolute pleasure working with Kashish. He did the job well and was able to communicate issues and roadblocks effectively.",
  },
  {
    id: 1,
    clientName: "Chadi",
    clientImage: john,
    ratingCount: 4,
    messageTitle:
      "Highly recommended kashish and his team created for me my first website and app (iOS & Android).",
    clientMessage: `Highly recommended kashish and his team created for me my first website and app (iOS & Android)including booking system and payment method in both websites and app , thank you guys was not easy specially I do
    not have experience with those things as first website, job done successfully ,kashish always available even with the different time gaps and always smiling a comprehensive in the difficult times , well done we still have a lots of work to do together and big thanks your team to make my dream business happen and real.`,
  },
  {
    id: 2,
    clientName: "Jane Smith",
    clientImage: pinto,
    ratingCount: 5,
    messageTitle:
      "Working with Kashish Kumar was an absolute pleasure. They demonstrated exceptional skills and professionalism throughout the entire project.",
    clientMessage:
      "Working with Kashish Kumar was an absolute pleasure. They demonstrated exceptional skills and professionalism throughout the entire project. I was amazed by their ability to understand the requirements and deliver outstanding results in such a short time frame.",
  },
  {
    id: 3,
    clientName: "Bikram sekhon ",
    clientImage: liam,
    ratingCount: 4,
    messageTitle:
      "He did a very good job within timeline. Hired him permanently for all our web development work.",
    clientMessage:
      "He did a very good job within timeline. Hired him permanently for all our web development work.",
  },
];

export {
  MENU_ITEMS,
  COMPANY_INFORMATION,
  WORK_OVERVIEW,
  FOOTER_LINKS,
  FOOTER_ICONS,
  TESTIMONIAL_SLIDES,
};
