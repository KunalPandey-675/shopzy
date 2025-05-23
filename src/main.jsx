import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ProductsContainer from "./components/ProductsContainer.jsx";
import Cart from "./components/Cart.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ContactUs from "./components/ContactUs.jsx";
import { Provider } from "react-redux";
import trendzyStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/products",
        element: <ProductsContainer />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={trendzyStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
