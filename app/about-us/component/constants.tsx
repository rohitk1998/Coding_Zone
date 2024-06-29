import AndroidIcon from '../../public/images/androidicon.png';
import IphoneIcon from '../../public/images/iphoneicon.png';
import WebIcon from '../../public/images/webicon.png';
import UxIcon from '../../public/images/ui_uxicon.png';
import WeHandleYourPets from '../../public/images/wehandleyourpets.jpeg';
import DiscoverAddisAbaba from '../../public/images/discoveraddisababa.png';
import SiraApp from '../../public/images/siraapp.png';

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const MENU_ITEMS = [
  { id: 0, menuItem: 'Home', path: '/' },
  { id: 1, menuItem: 'About', path: '/about-us' },
  { id: 2, menuItem: 'Services', path: '/services' },
  { id: 3, menuItem: 'Contact Us', path: '/contactus' },
  { id: 3, menuItem: 'Industrial Training', path: '/industrial-training' },
];

const COMPANY_INFORMATION = [
  {
    totalYr: 1,
    valueIn: '+',
    description: 'Months In Buisness',
  },
  {
    totalYr: 30,
    valueIn: '+',
    description: 'Solutions Delivered',
  },
  {
    totalYr: 90,
    valueIn: '%',
    description: 'Client Retention',
  },
  {
    totalYr: 15,
    valueIn: '+',
    description: 'Enthusiest Team Members',
  },
];

const WORK_OVERVIEW = [
  {
    id: 0,
    mainHeading: 'Android Development',
    description: 'We create mobile app using Android Studio and Flutter.',
    icon: AndroidIcon,
  },
  {
    id: 1,
    mainHeading: 'Web Development',
    description: 'We have build sevral Apps, using Reactjs and Nextjs.',
    icon: WebIcon,
  },
  {
    id: 2,
    mainHeading: 'iOS Development',
    description: 'We create mobile applications using Native Stacks, Xcode.',
    icon: IphoneIcon,
  },
  {
    id: 3,
    mainHeading: 'Flutter Development',
    description: 'We create mobile applications using Hybrid Stacks, Xcode , Android Studio, Visual Studio Code.',
    icon: IphoneIcon,
  },
  {
    id: 4,
    mainHeading: 'React Native Development',
    description: 'We create mobile applications using Hybrid Stacks, Xcode , Android Studio, Visual Studio Code.',
    icon: IphoneIcon,
  },
  {
    id: 5,
    mainHeading: 'UI/UX Design',
    description: 'We have provided best pixel prefect designs.',
    icon: UxIcon,
  },
];

const FOOTER_LINKS = [
  {
    id: 0,
    title: 'Support',
    links: [
      {
        id: 0,
        name: 'Documentation',
        link: '',
      },
      {
        id: 1,
        name: 'Guidence',
        link: '',
      },
    ],
  },
  {
    id: 1,
    title: 'Company',
    links: [
      {
        id: 0,
        name: 'Contact',
        link: '/contactus',
      },
      {
        id: 1,
        name: 'About',
        link: '/about',
      },
    ],
  },
  {
    id: 2,
    title: 'Services',
    links: [
      {
        id: 0,
        name: 'Android Development',
        link: '',
      },
      {
        id: 1,
        name: 'iOS Development',
        link: '',
      },
      {
        id: 2,
        name: 'Web Development',
        link: '',
      }
    ],
  },
];

const FOOTER_ICONS = [
  {
    id: 0,
    icon: faTwitter,
    link: '',
  },
  {
    id: 1,
    icon: faInstagram,
    link: 'https://www.instagram.com/codingzone_solutions/',
  },
  {
    id: 2,
    icon: faLinkedin,
    link: 'https://www.linkedin.com/company/codingzone-solutions/',
  },
  {
    id: 3,
    icon: faFacebook,
    link: 'https://www.facebook.com/profile.php?id=100095136272840&mibextid=D4KYlr',
  },
];

const TESTIMONIAL_SLIDES = [
  {
    id: 0,
    clientName: 'Robert',
    clientImage: null,
    ratingCount: 5,
    messageTitle:
      'It was an absolute pleasure working with Kashish. He did the job well and was able to communicate issues and roadblocks effectively.',
    clientMessage:
      'It was an absolute pleasure working with Kashish. He did the job well and was able to communicate issues and roadblocks effectively.',
  },
  {
    id: 1,
    clientName: 'Chadi Msakni',
    clientImage: null,
    ratingCount: 5,
    messageTitle:
      'Highly recommended kashish and his team created for me my first website and app (iOS & Android).',
    clientMessage: `Highly recommended kashish and his team created for me my first website and app (iOS & Android)including booking system and payment method in both websites and app , thank you guys was not easy specially I do
    not have experience with those things as first website, job done successfully ,kashish always available even with the different time gaps and always smiling a comprehensive in the difficult times , well done we still have a lots of work to do together and big thanks your team to make my dream business happen and real.`,
  },
  // {
  //   id: 2,
  //   clientName: "Jane Smith",
  //   clientImage: pinto,
  //   ratingCount: 5,
  //   messageTitle:
  //     "Working with Kashish Kumar was an absolute pleasure. They demonstrated exceptional skills and professionalism throughout the entire project.",
  //   clientMessage:
  //     "Working with Kashish Kumar was an absolute pleasure. They demonstrated exceptional skills and professionalism throughout the entire project. I was amazed by their ability to understand the requirements and deliver outstanding results in such a short time frame.",
  // },
  {
    id: 3,
    clientName: 'Bikram sekhon ',
    clientImage: null,
    ratingCount: 5,
    messageTitle:
      'He did a very good job within timeline. Hired him permanently for all our web development work.',
    clientMessage:
      'He did a very good job within timeline. Hired him permanently for all our web development work.',
  },
];

const PRODUCED_APPS = [
  {
    id: 0,
    name: 'Discover addis ababa',
    image: DiscoverAddisAbaba,
    description:
      'A tourism app that helps tourists to addis ababa to discover destinations.',
    link: 'https://apps.apple.com/in/app/discover-addis-ababa/id6449370651',
  },
  {
    id: 1,
    name: 'We Handle Your Pets',
    image: WeHandleYourPets,
    description:
      "We love pets!, That's why 'we handle your pets' are offering different ranges of services to suit your pets needs.",
    link: 'https://apps.apple.com/in/app/we-handle-your-pets/id6451211817',
  },
  {
    id: 2,
    name: 'Sira',
    image: SiraApp,
    description:
      'Sira is a professionals market place in Addis Ababa. The platform lists professionals in their respective fields.',
    link: 'https://apps.apple.com/app/id6450408801',
  },
  {
    id: 3,
    name: 'Tap Tap',
    image: SiraApp,
    description:
      'Sira is a professionals market place in Addis Ababa. The platform lists professionals in their respective fields.',
    link: 'https://apps.apple.com/app/id6450408801',
  },
  {
    id: 4,
    name: 'SkydiveX',
    image: SiraApp,
    description:
      'Get ready to elevate your skydiving experience with SkydiveX, the ultimate app for all things Skydive Utah! Whether you are a seasoned pro or taking your first leap, SkydiveX is your go-to guide for making the most of every thrilling moment in the sky.',
    link: 'https://apps.apple.com/us/app/skydivex/id6457417281',
  },
  {
    id: 5,
    name: 'YooKoo',
    image: SiraApp,
    description:
      'Work_m is an app for Himachal Pradesh where you can post the latest updates to keep people informed. Through this app, we aim to spread awareness about ongoing activities in Himachal Pradesh.',
    link: 'https://play.google.com/store/apps/details?id=com.yookoo.discoveraddis&hl=en_IN&gl=US',
  },
  {
    id: 6,
    name: 'Educube',
    image: SiraApp,
    description:
      'The aim of life is to live, and to live means to be aware, joyously, serenely, divinely aware” – Helen KellerThe above quote is truly meaningful; specially for Parents. Hence Educube App for Parents lets you ‘be aware’ of all the important things in your child’s life at School.Educube Mobile App lets you stay connected with your child’s school anytime anywhere.',
    link: 'https://play.google.com/store/apps/details?id=com.globals.educube.parent&hl=en_IN',
  }

];

const REGEX_PATTERN = {
  stringWithSpecifiedLength: /^[A-Za-z]{3,30}$/,
  numberRegex: /^[0-9]*$/,
  minPhoneLength: 10,
  maxPhoneLength: 10,
  email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
  emailOptional:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const VALIDATION_MESSAGE = {
  contactForm: {
    nameRequired: 'Please enter your name',
    emailRequired: 'Please enter an email',
    messageRequired: 'Please enter a message',
    phoneNumberRequired: 'Please enter your phone number',
    isEmailValid: 'Please enter a valid email',
    isNameValidLength: 'Please enter letters between 3 and 30',
    isPhoneNumberValid: 'Phone number length should be 10.',
  },
};

const GOOGLE_MAP_URL =
  'https://www.google.com/maps/dir/29.2904069,76.0389249/codingzone+solutions+mohali/@29.9994972,75.7282011,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390fefbecb8683b3:0xbd1cb376301ee83b!2m2!1d76.6932842!2d30.7116723?entry=ttu';

export {
  MENU_ITEMS,
  COMPANY_INFORMATION,
  WORK_OVERVIEW,
  FOOTER_LINKS,
  FOOTER_ICONS,
  TESTIMONIAL_SLIDES,
  PRODUCED_APPS,
  REGEX_PATTERN,
  VALIDATION_MESSAGE,
  GOOGLE_MAP_URL,
};
