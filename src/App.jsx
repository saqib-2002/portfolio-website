import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Card from "./components/Card.jsx";
// import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Collaboration from "./components/Collaboration.jsx";
// import Roadmap from "./components/Roadmap.jsx";
import Footer from "./components/Footer.jsx";

import About from "./pages/About.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Projects from "./components/Projects.jsx";
import Error404 from "./components/Error404.jsx";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ButtonGradient />
      <Footer />
    </>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <Card />
      <Collaboration />
    </>
  );
};

const ErrorPage = () => {
  return (
    <>
      <Header />
      <Error404 />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default App;
