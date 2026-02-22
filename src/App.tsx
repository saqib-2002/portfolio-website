import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";
import Error404 from "./components/Error404";
import ScrollToTop from "./components/ux/ScrollToTop";
import WhatIDo from "./pages/WhatIDo";
/* layouts */
const RootLayout = () => (
  <>
    <Navbar />
    <ScrollToTop />
    <Outlet />
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
      { path: "what-i-do", element: <WhatIDo /> },
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
