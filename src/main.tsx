import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./style/theme.ts";
import { Provider } from "react-redux";

import { storeWithFlower } from "./feature/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={storeWithFlower}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);

// import { FlowerProvider } from "@flowerforce/flower-react";
// import { store } from "./feature/store.ts";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <ThemeProvider theme={theme}>
//       <FlowerProvider>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </FlowerProvider>
//     </ThemeProvider>
//   </StrictMode>,
// );
