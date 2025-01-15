import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import PopularContextProvider from "./context/PopularContext.jsx";
import CommunityContextProvider from "./context/CommunityContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <PopularContextProvider>
        <CommunityContextProvider>
          <App />
        </CommunityContextProvider>
      </PopularContextProvider>
    </StrictMode>
  </BrowserRouter>
);
