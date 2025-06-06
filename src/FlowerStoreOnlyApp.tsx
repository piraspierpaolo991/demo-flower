import { FlowerProvider } from "@flowerforce/flower-react";

import { Flow_1 } from "./Flows/Flow-1";

export const FlowerStoreOnlyApp = () => (
  <FlowerProvider>
    <Flow_1 />
  </FlowerProvider>
);
