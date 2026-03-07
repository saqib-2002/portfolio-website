interface BaseProject {
  id: string;
  title: string;
  text: string;
  iconUrl: string;
  imageUrl: string;
  liveUrl: string | null;
  light?: boolean;
  type: "client" | "saas" | "personal";
}

interface PublicProject extends BaseProject {
  githubStatus: "public";
  explore: string;
}

interface PrivateProject extends BaseProject {
  githubStatus: "private";
  explore?: never;
}

export type Projects = PublicProject | PrivateProject;

export const projects: Projects[] = [
  {
    id: "0",
    title: "Lekki AI",
    text: "A Chrome extension that converts voice to text in real time, translates it instantly, and refines the transcript using AI for clearer and more accurate communication.",

    iconUrl: "",
    imageUrl:
      "https://res.cloudinary.com/dddorzxo2/image/upload/v1772848122/Screenshot_380_on065y.png",
    githubStatus: "private",
    liveUrl: "",
    type: "saas",
  },
  {
    id: "1",
    title: "Sasha Decor",
    text: "A modern e-commerce platform for selling curated home decor products using a hybrid inventory and dropshipping model, focused on fast delivery and a smooth shopping experience.",

    iconUrl: "",
    imageUrl:
      "https://res.cloudinary.com/dddorzxo2/image/upload/v1772848125/Screenshot_370_d0m1yo.png",
    githubStatus: "private",
    liveUrl: "https://www.sashadecor.in/",
    type: "personal",
  },
  {
    id: "2",
    title: "GTuff Glass",
    text: "A professional website developed for GTuff Glass to showcase their glass products and services, featuring a modern design, responsive layout, and clear presentation of the company's offerings.",

    iconUrl: "",
    imageUrl:
      "https://res.cloudinary.com/dddorzxo2/image/upload/v1772848122/Screenshot_372_ar0us9.png",
    githubStatus: "private",
    liveUrl: "https://www.gtuffglass.com/",
    type: "client",
  },
  {
    id: "3",
    title: "BlogTree",
    text: "A modern blogging web app that allows users to create, manage, and publish blog posts with a clean interface and seamless content management experience.",

    iconUrl: "",
    imageUrl:
      "https://res.cloudinary.com/dddorzxo2/image/upload/v1772848122/Screenshot_371_ukwqyu.png",
    githubStatus: "private",
    liveUrl: "https://blogtree123.vercel.app/",
    type: "personal",
  },
  {
    id: "4",
    title: "Priya Fashion Store",
    text: "An online store built for Priya Fashion Store to display and sell fashion products, featuring a modern interface and responsive design for seamless shopping across devices.",

    iconUrl: "",
    imageUrl:
      "https://res.cloudinary.com/dddorzxo2/image/upload/v1772848122/Screenshot_379_opnjes.png",
    githubStatus: "private",
    liveUrl: "https://priyafashionstore.shop/",
    type: "client",
  },
  {
    id: "5",
    title: "Travel List App",
    text: "A travel list app designed to organize and manage your travel plans, packing lists, and itineraries seamlessly.",

    iconUrl:
      "https://res.cloudinary.com/dddorzxo2/image/upload/v1772847255/icon-1_yhhgyp.svg",
    imageUrl:
      "https://res.cloudinary.com/dddorzxo2/image/upload/v1772847259/travel-list_tdamce.png",
    explore: "https://github.com/Saqib-2002/Travel-List-App--React",
    githubStatus: "public",
    liveUrl: null,
    type: "personal",
  },
  {
    id: "6",
    title: "College Canteen",
    text: "A college canteen web app designed to streamline food ordering, payment, and menu browsing for students and staff on campus.",

    iconUrl:
      "https://res.cloudinary.com/dddorzxo2/image/upload/v1772847256/icon-5_trtuf7.svg",
    imageUrl:
      "https://res.cloudinary.com/dddorzxo2/image/upload/v1772847257/college-canteen_hrnyo7.png",
    explore: "https://github.com/Saqib-2002/The-College-Canteen-Final",
    githubStatus: "public",
    liveUrl: "https://college-canteen.example.com",
    type: "personal",
  },
  {
    id: "7",
    title: "Retro Number Guessing",
    text: "A retro number guessing game where players try to guess a secret number within a limited number of attempts, reminiscent of classic arcade challenges.",

    iconUrl:
      "https://res.cloudinary.com/dddorzxo2/image/upload/v1772847255/icon-2_sac5r7.svg",
    imageUrl:
      "https://res.cloudinary.com/dddorzxo2/image/upload/v1772847256/retro-game_ubycq6.png",
    light: true,
    explore: "https://github.com/Saqib-2002/Retro---Guess-the-number",
    githubStatus: "public",
    liveUrl: null,
    type: "personal",
  },
  {
    id: "8",
    title: "News Website",
    text: "A dynamic news web app delivering real-time updates and personalized content based on user preferences and trending topics.",

    iconUrl:
      "https://res.cloudinary.com/dddorzxo2/image/upload/v1772847256/icon-3_pyrqsl.svg",
    imageUrl:
      "https://res.cloudinary.com/dddorzxo2/image/upload/v1772847255/news_h3disj.png",
    githubStatus: "private",
    liveUrl: "https://news-website.example.com",
    type: "personal",
  },
  {
    id: "9",
    title: "Geolocation API",
    text: "A geolocation API provides real-time geographical data and location-based services for applications and websites.",

    iconUrl:
      "https://res.cloudinary.com/dddorzxo2/image/upload/v1772847257/icon-4_ukl7ln.svg",
    imageUrl:
      "https://res.cloudinary.com/dddorzxo2/image/upload/v1772847255/geolocation_es3tmp.png",
    light: true,
    explore: "https://github.com/Saqib-2002/Geolocation-API",
    githubStatus: "public",
    liveUrl: "",
    type: "personal",
  },

  {
    id: "10",
    title: "Sliding Login Form",
    text: "A sliding form interface that simplifies user interaction by revealing form fields with smooth sliding animations.",

    iconUrl:
      "https://res.cloudinary.com/dddorzxo2/image/upload/v1772847257/icon-6_m8kfkz.svg",
    imageUrl:
      "https://res.cloudinary.com/dddorzxo2/image/upload/v1772847258/slide-form_rutyl0.png",
    explore: "https://github.com/Saqib-2002/Sliding-Login-Form",
    githubStatus: "public",
    liveUrl: "https://sliding-login-form.example.com",
    type: "personal",
  },
];
