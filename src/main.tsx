
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import favicon from "./assets/favicon.ico";

const ensureFavicon = () => {
  const existingLink = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
  const link = existingLink ?? document.createElement("link");
  link.rel = "icon";
  link.type = "image/x-icon";
  link.href = favicon;
  if (!existingLink) {
    document.head.appendChild(link);
  }
};

ensureFavicon();

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  