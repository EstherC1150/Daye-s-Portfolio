import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/fonts.css";
import App from "./App";
// import TestPage from "./pages/TestPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/* <TestPage /> */}
  </StrictMode>
);
