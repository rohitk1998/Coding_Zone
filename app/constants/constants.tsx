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
    clientName: "Daniel Martinez",
    clientImage: denial,
    ratingCount: 5,
    clientMessage: "Top-notch service! Highly satisfied.",
  },
  {
    id: 1,
    clientName: "John Doe",
    clientImage: john,
    ratingCount: 5,
    clientMessage: "Great service! Highly recommended.",
  },
  {
    id: 2,
    clientName: "Jane Smith",
    clientImage: pinto,
    ratingCount: 4,
    clientMessage: "Had a good experience overall.",
  },
  {
    id: 3,
    clientName: "Alice Johnson",
    clientImage: liam,
    ratingCount: 3,
    clientMessage: "Decent service, but room for improvement.",
  },
  {
    id: 4,
    clientName: "Bob Williams",
    clientImage: john,
    ratingCount: 5,
    clientMessage: "Outstanding service! Will come back again.",
  },
  {
    id: 5,
    clientName: "Eve Davis",
    clientImage: gola,
    ratingCount: 5,
    clientMessage: "Extraordinary Work done by Team.",
  },
  {
    id: 6,
    clientName: "Alex Turner",
    clientImage: pooja,
    ratingCount: 4,
    clientMessage: "Good service, friendly staff.",
  },
  {
    id: 7,
    clientName: "Olivia Brown",
    clientImage: shilpa,
    ratingCount: 5,
    clientMessage: "Exceptional experience overall!",
  },
  {
    id: 8,
    clientName: "William Harris",
    clientImage: denial,
    ratingCount: 4,
    clientMessage: "Excellent Service,Happy with team work.",
  },
  {
    id: 9,
    clientName: "Sophia Wilson",
    clientImage: pooja,
    ratingCount: 4,
    clientMessage: "Had a pleasant time at the establishment.",
  },
];

export {
  MENU_ITEMS,
  COMPANY_INFORMATION,
  WORK_OVERVIEW,
  FOOTER_LINKS,
  FOOTER_ICONS,
  TESTIMONIAL_SLIDES
};
