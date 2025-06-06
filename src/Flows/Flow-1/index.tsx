import { Flower, FlowerAction, FlowerNode } from "@flowerforce/flower-react";
import { Node_1 } from "./nodes/Node_1";
import { Node_2 } from "./nodes/Node_2";
import { Node_2_Success } from "./nodes/Node_2_Success";
import { Node_2_Error } from "./nodes/Node_2_Error";
import { Node_3_Success } from "./nodes/Node_3_Success";
import { Node_3_Error } from "./nodes/Node_3_Error";
import { Node_3 } from "./nodes/Node_3";
import { Node_4 } from "./nodes/Node_4";

export const Flow_1 = () => {
  return (
    <Flower name="Flow">
      {/**
       * START
       * Nodo iniziale
       */}
      <FlowerNode
        id="node-1"
        to={{ "node-2": { label: "basic next", rules: () => true } }}
      >
        <Node_1 />
      </FlowerNode>

      {/**
       * NODO INPUT
       * In questo nodo inseriamo un campo di input testuale, in base al valore del campo di input, scegliamo se andare nel nodo success o in quello error
       */}
      <FlowerNode
        id="node-2"
        to={{
          success: {
            label: "Success Input",
            rules: { $and: [{ name: { $eq: "john" } }] },
          },
          error: { label: "Error input", rules: null },
        }}
      >
        <Node_2 />
      </FlowerNode>

      {/**
       * INPUT SUCCESS
       * Il valore dell'input rispetta la regola, possiamo andare avanti con il flusso
       */}
      <FlowerNode id="success" to={{ "node-3": null }}>
        <Node_2_Success />
      </FlowerNode>

      {/**
       * INPUT ERROR
       * se il valore dell'input non rispetta la regola, andiamo qui
       */}
      <FlowerNode id="error">
        <Node_2_Error />
      </FlowerNode>

      {/**
       * NODO AZIONE
       * questo nodo effettua un azione e sceglie tramite delle regole se andare in success o in error senza alcuna azione da parte dell'utente, in questo caso effettuiamo una chiamata api
       */}
      <FlowerAction
        id="node-3"
        to={{
          successApi: { name: "onSuccess", label: "Api success", rules: null },
          errorApi: { name: "onError", label: "Api Error", rules: null },
        }}
      >
        <Node_3 />
      </FlowerAction>

      {/**
       * API SUCCESS NODE
       * Api call goes as expected
       */}
      <FlowerNode
        id="successApi"
        to={{ "node-4": { label: "to final node", rules: null } }}
      >
        <Node_3_Success />
      </FlowerNode>

      {/**
       * API ERROR NODE
       * The api call has a problem, you could go back to the previous non-action node and retry
       */}
      <FlowerNode id="errorApi">
        <Node_3_Error />
      </FlowerNode>

      {/**
       * FINAL NODE
       * Nodo finale con un button reset per ripetere il flusso da capo
       */}
      <FlowerNode id="node-4">
        <Node_4 />
      </FlowerNode>
    </Flower>
  );
};
