import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FlowerProvider } from "@flowerforce/flower-react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./style/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <FlowerProvider enableReduxDevtool>
        <App />
      </FlowerProvider>
    </ThemeProvider>
  </StrictMode>,
);
