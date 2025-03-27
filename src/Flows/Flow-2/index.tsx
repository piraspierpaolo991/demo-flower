import { Flower, FlowerNode } from "@flowerforce/flower-react";
import { EndNode } from "./nodes/EndNode";
import { PasswordNode } from "./nodes/PasswordNode";
import { FlowerValue } from "@flowerforce/flower-react-shared";
import { FlowerInput } from "../../FlowerComponents/FlowerInput";

export const Flow_2 = () => {
  return (
    <Flower name="Demo-flow">
      {/**
       * START
       * Nodo iniziale
       */}
      <FlowerNode
        id="start"
        to={{ "node-2": { label: "basic next", rules: null } }}
      >
        <FlowerValue id="^myStore.gino">{({ value }) => value}</FlowerValue>
        <FlowerInput id="^myStore.gino" />
        <PasswordNode />
      </FlowerNode>
      <FlowerNode id="node-2">
        <EndNode />
      </FlowerNode>
    </Flower>
  );
};
