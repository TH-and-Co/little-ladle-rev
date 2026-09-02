import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import * as routerModule from "./router";
import "./styles.css";

// Support either createRouter() factory or pre-instantiated router export
const router =
  typeof routerModule.createRouter === "function"
    ? routerModule.createRouter()
    : routerModule.router || routerModule.default;

const rootElement = document.getElementById("root");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
