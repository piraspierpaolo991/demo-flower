import { Button } from "antd";
import { useCallback } from "react";
import { useFlower } from "@flowerforce/flower-react";

export const ButtonNext = ({
  label = "Next",
  payload,
}: {
  label?: string;
  payload?: Parameters<ReturnType<typeof useFlower>["next"]>[0];
}) => {
  const { next } = useFlower();
  const onClick = useCallback(() => next(payload), [payload, next]);
  return <Button onClick={onClick}>{label}</Button>;
};

export const ButtonPrev = ({
  label = "Back",
  payload,
}: {
  label?: string;
  payload?: Parameters<ReturnType<typeof useFlower>["back"]>[0];
}) => {
  const { back } = useFlower();
  const onClick = useCallback(() => back(payload), [payload, back]);
  return <Button onClick={onClick}>{label}</Button>;
};

export const ButtonJump = ({
  label = "Jump",
  payload,
}: {
  label?: string;
  payload: Parameters<ReturnType<typeof useFlower>["jump"]>[0];
}) => {
  const { jump } = useFlower();
  const onClick = useCallback(() => jump(payload), [payload, jump]);

  return <Button onClick={onClick}>{label}</Button>;
};

export const ButtonRestart = ({
  label = "Restart",
  payload,
}: {
  label?: string;
  payload?: Parameters<ReturnType<typeof useFlower>["restart"]>[0];
}) => {
  const { restart } = useFlower();
  const onClick = useCallback(() => restart(payload), [payload, restart]);
  return <Button onClick={onClick}>{label}</Button>;
};

export const ButtonReset = ({
  label = "Reset",
  payload,
}: {
  label?: string;
  payload?: Parameters<ReturnType<typeof useFlower>["reset"]>[0];
}) => {
  const { reset } = useFlower();
  const onClick = useCallback(() => reset(payload), [payload, reset]);
  return <Button onClick={onClick}>{label}</Button>;
};
