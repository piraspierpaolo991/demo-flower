import { FlowerProvider } from "@flowerforce/flower-react";
import { Provider } from "react-redux";
import { store } from "./feature/store";
import { Flow_2 } from "./Flows/Flow-2";

export const SeparatedStoreApp = () => (
  <Provider store={store}>
    <FlowerProvider>
      <Flow_2 />
    </FlowerProvider>
  </Provider>
);
