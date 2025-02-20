import { Flower, FlowerAction, FlowerNode } from "@flowerforce/flower-react";
import { Node_1 } from "./nodes/Node_1";
import { Node_2 } from "./nodes/Node_2";
import { Node_2_Success } from "./nodes/Node_2_Success";
import { Node_2_Error } from "./nodes/Node_2_Error";
import { Node_3_Success } from "./nodes/Node_3_Success";
import { Node_3_Error } from "./nodes/Node_3_Error";
import { Node_3 } from "./nodes/Node_3";

export const Flow_1 = () => {
  return (
    <Flower name="Flow">
      <FlowerNode id="node-1" to={{ "node-2": null }}>
        <Node_1 />
      </FlowerNode>
      <FlowerNode
        id="node-2"
        to={{
          success: {
            rules: { $and: [{ name: { $eq: "john" } }] },
          },
          error: null,
        }}
      >
        <Node_2 />
      </FlowerNode>
      <FlowerNode id="success" to={{ "node-3": null }}>
        <Node_2_Success />
      </FlowerNode>
      <FlowerNode id="error">
        <Node_2_Error />
      </FlowerNode>

      <FlowerAction
        id="node-3"
        to={{ successApi: "onSuccess", errorApi: "onError" }}
      >
        <Node_3 />
      </FlowerAction>
      <FlowerNode id="successApi" to={{ "node-3": null }}>
        <Node_3_Success />
      </FlowerNode>
      <FlowerNode id="errorApi" to={{ "node-3": null }}>
        <Node_3_Error />
      </FlowerNode>
    </Flower>
  );
};
