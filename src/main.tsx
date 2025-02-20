import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { FlowerProvider } from "@flowerforce/flower-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FlowerProvider enableReduxDevtool>
      <App />
    </FlowerProvider>
  </StrictMode>,
);
