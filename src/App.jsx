import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import ButtonGradient from "./assets/svg/ButtonGradient";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";
import Error404 from "./components/Error404";
import ScrollToTop from "./components/ux/ScrollToTop";
/* layouts */
const RootLayout = () => (
  <>
    <Navbar />
    <ScrollToTop />
    <Outlet />
    <ButtonGradient />
    <Footer />
  </>
);

const ErrorPage = () => (
  <>
    <Navbar />
    <Error404 />
    <Footer />
  </>
);

/* router */
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <ContactForm /> },
    ],
  },
]);

/* app */
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
