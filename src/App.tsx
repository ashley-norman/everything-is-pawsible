import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/pages/About";

// import "fontsource-roboto";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { red, grey } from "@mui/material/colors";
import Services from "./components/pages/Services";
import Boarding from "./components/pages/Boarding";
import Daycare from "./components/pages/Daycare";
import Faq from "./components/pages/Faq";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";

let theme = createTheme({
  palette: {
    primary: {
      main: red[900],
    },
    secondary: {
      main: grey[400],
    },
  },
});
theme = responsiveFontSizes(theme);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Stack height="100vh" overflow="hidden">
        <Header />
        <Stack height="100%" overflow="auto">
          <Outlet />
          <Footer />
        </Stack>
      </Stack>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      // {
      //   path: "/gallery",
      //   element: <About />,
      // },
      {
        path: "/boarding",
        element: <Boarding />,
      },
      {
        path: "/daycare",
        element: <Daycare />,
      },
      {
        path: "/FAQ",
        element: <Faq />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);
