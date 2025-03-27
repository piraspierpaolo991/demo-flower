import { Button } from "antd";
import { useCallback } from "react";
import { useFlower } from "@flowerforce/flower-react";
import { useFlowerForm } from "@flowerforce/flower-react-form";

export const ButtonNext = ({
  label = "Next",
  payload,
}: {
  label?: string;
  payload?: Parameters<ReturnType<typeof useFlower>["next"]>[0];
}) => {
  const { next } = useFlower();
  const { setFormSubmitted, isValid } = useFlowerForm();

  const onClick = useCallback(() => {
    setFormSubmitted();
    if (isValid) {
      next(payload);
    }
  }, [setFormSubmitted, isValid, next, payload]);
  return (
    <Button disabled={!isValid} onClick={onClick}>
      {label}
    </Button>
  );
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
  const { reset: resetData } = useFlowerForm();
  const onClick = useCallback(() => {
    reset(payload);
    resetData();
  }, [payload, reset, resetData]);
  return <Button onClick={onClick}>{label}</Button>;
};
