import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { BackdropContextProvider } from "./components/context/BackdropContext";
import { MenuContextProvider } from "./components/context/menuContext";
import { MapContextProvider } from "./components/context/mapContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuContextProvider>
        <MapContextProvider>
          <BackdropContextProvider>
            <App />
          </BackdropContextProvider>
        </MapContextProvider>
      </MenuContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
