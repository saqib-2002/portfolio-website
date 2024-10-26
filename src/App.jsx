import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Benefits from "./components/Benefits.jsx";
// import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Collaboration from "./components/Collaboration.jsx";
// import Roadmap from "./components/Roadmap.jsx";
import Footer from "./components/Footer.jsx";

import About from "./components/About.jsx";
import ContactForm from "./components/ContactForm.jsx";

// import { navigation } from "../constants";

// const App = () => {
//   return (
//     <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
//       {/* <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<ContactForm />} />
//       </Routes> */}
//     </div>
//   );
// };

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Collaboration />
      <ButtonGradient />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>404 Error</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactForm />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
