import {
  benefitCard1,
  benefitCard2,
  benefitCard3,
  benefitCard4,
  benefitCard5,
  benefitCard6,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitImage1,
  benefitImage2,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  benefitImage6,
  reactjs,
  tailwind,
  mongo,
  nodejs,
  ml,
  nextjs,
  js,
  cloud,
  github,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  techhub,
  its,
  microsoft,
  google,
  plusSquare,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  telegram,
  twitter,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  },
  {
    id: "2",
    title: "What I do",
    url: "#what-i-do",
  },
  {
    id: "3",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "4",
    title: "Contact",
    url: "#contact",
  },
  {
    id: "5",
    title: "Message Me",
    url: "#messageme",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Git Hub",
    url: "https://github.com/Saqib-2002",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  { title: techhub, text: "TechHub Technology" },
  { title: its, text: "ITS College" },
  { title: google, text: "Google" },
  { title: microsoft, text: "Microsoft" },
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With a deep understanding of ReactJS, I have successfully implemented various projects that require dynamic and responsive front-end development.";
export const collabTextRight =
  "Experienced in MERN stack development, I design and build modern web applications that leverage MongoDB, Express.js, React.js, and Node.js to deliver scalable, efficient, and user-centric solutions for diverse client requirements.";

export const collabContent = [
  {
    id: "0",
    title: "React JS - A JavaScript Library",
    text: collabText,
  },
  {
    id: "1",
    title: "Innovation driver",
  },
  {
    id: "2",
    title: "Front-end magician",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "ReactJS",
    icon: reactjs,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Tailwind",
    icon: tailwind,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "NodeJS",
    icon: nodejs,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Mongo",
    icon: mongo,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "NextJS",
    icon: nextjs,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Machine Learning",
    icon: ml,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "JavaScript",
    icon: js,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Cloud",
    icon: cloud,
    width: 38,
    height: 32,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Travel List App",
    text: "A travel list app designed to organize and manage your travel plans, packing lists, and itineraries seamlessly.",
    backgroundUrl: benefitCard1,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage1,
    explore: "https://github.com/Saqib-2002/Travel-List-App--React",
  },
  {
    id: "1",
    title: "Retro Number Guessing",
    text: "A retro number guessing game where players try to guess a secret number within a limited number of attempts, reminiscent of classic arcade challenges.",
    backgroundUrl: benefitCard2,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    explore: "https://github.com/Saqib-2002/Retro---Guess-the-number",
  },
  {
    id: "2",
    title: "News Website",
    text: "A dynamic news web app delivering real-time updates and personalized content based on user preferences and trending topics.",
    backgroundUrl: benefitCard3,
    iconUrl: benefitIcon3,
    imageUrl: benefitImage3,
    explore: "https://github.com/Saqib-2002/News-Website-internship-",
  },
  {
    id: "3",
    title: "Geolocation API",
    text: "A geolocation API provides real-time geographical data and location-based services for applications and websites.",
    backgroundUrl: benefitCard4,
    iconUrl: benefitIcon4,
    imageUrl: benefitImage4,
    light: true,
    explore: "https://github.com/Saqib-2002/Geolocation-API",
  },
  {
    id: "4",
    title: "College Canteen",
    text: "A college canteen web app designed to streamline food ordering, payment, and menu browsing for students and staff on campus.",
    backgroundUrl: benefitCard5,
    iconUrl: benefitIcon5,
    imageUrl: benefitImage5,
    explore: "https://github.com/Saqib-2002/The-College-Canteen-Final",
  },
  {
    id: "5",
    title: "Sliding Login Form",
    text: "A sliding form interface that simplifies user interaction by revealing form fields with smooth sliding animations.",
    backgroundUrl: benefitCard6,
    iconUrl: benefitIcon6,
    imageUrl: benefitImage6,
    explore: "https://github.com/Saqib-2002/Sliding-Login-Form",
  },
];

export const socials = [
  {
    id: "0",
    title: "Github",
    iconUrl: github,
    url: "https://github.com/Saqib-2002",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/Saqib_2002",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/saqib_2002?igsh=Y2c4bjJ6cnl6d3Np ",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "http://t.me/Saqib_2002",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/saqib.saifi.9212?mibextid=ZbWKwL ",
  },
];
