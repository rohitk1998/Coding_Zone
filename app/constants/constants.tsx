import AndroidIcon from "../../public/images/androidicon.png";
import IphoneIcon from "../../public/images/iphoneicon.png";
import WebIcon from "../../public/images/webicon.png";
import UxIcon from "../../public/images/ui_uxicon.png";
import Instagram from "../../public/images/instagram.png"
import LinkedIn from "../../public/images/facebook.png"
import FaceBook from "../../public/images/linkedin.png"




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
    mainHeading: "ANDROID Development",
    description:
      "We create mobile applications using Native Stacks, Android Studio and Flutter.",
      icon : AndroidIcon
  },
  {
    mainHeading: "WEB Development",
    description: "We have build sevral Apps, using Reactjs and Nextjs.",
    icon : WebIcon
  },
  {
    mainHeading: "IOS Development",
    description: "We create mobile applications using Native Stacks, Xcode.",
    icon : IphoneIcon
  },
  {
    mainHeading: "UI/UX",
    description: "We have provided best pixel prefect designs.",
    icon : UxIcon
  }
];

const   FOOTER_LINKS  = [
  {
    title : "Support",
    links : [
      {
        name : "Documentation" 
      },
      {
        name : "Guidence" 
      },
      {
        name : "Pricing" 
      },
      {
        name : "Contact" 
      }
    ]
  },
  {
    title : "Services",
    links : [
      {
        name : "Android Development" 
      },
      {
        name : "Ios Development" 
      },
      {
        name : "Web Development" 
      },
      {
        name : "Marketing" 
      }
    ]
  },
  {
    title : "Company",
    links : [
      {
        name : "Contact" 
      },
      {
        name : "About" 
      },
      {
        name : "Gallery" 
      }
    ]
  }
]

const FOOTER_ICONS = [
  {
    icon : FaceBook 
  },
  {
    icon : Instagram 
  },
  {
    icon : LinkedIn 
  },
  {
    icon : Instagram 
  }
]

export { MENU_ITEMS, COMPANY_INFORMATION,WORK_OVERVIEW,FOOTER_LINKS,FOOTER_ICONS };
