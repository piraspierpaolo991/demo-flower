import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./style/theme.ts";
import { Devtool } from "@flowerforce/flower-devtool";
import {
  FlowerProvider,
  HistoryContextProvider,
} from "@flowerforce/flower-react";
import App from "./App.tsx";

Devtool({
  port: 8771,
  host: "localhost",
  // sourceMap,
  sessionId: "Lasjgdaifu93jrn3893rb",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <HistoryContextProvider>
        <FlowerProvider enableReduxDevtool>
          <App />
        </FlowerProvider>
      </HistoryContextProvider>
    </ThemeProvider>
  </StrictMode>,
);
