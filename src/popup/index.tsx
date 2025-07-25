import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../index.css";
import { OpenAIProvider } from "../context/OpenAIContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OpenAIProvider>
      <App />
    </OpenAIProvider>
  </React.StrictMode>
);
