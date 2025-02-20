import { useFlower } from "@flowerforce/flower-react";
import { Flex, Card, Typography } from "antd";
import { useEffect, useRef } from "react";
import { ButtonPrev } from "../../FlowerComponents/NavigationButtons";

export const Node_3_Error = () => {
  const { next } = useFlower();
  const data = useRef<object | undefined>(undefined);
  useEffect(() => {
    const random = Math.random();
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => (data.current = res.json()))
        .then(() => {
          if (random < 0.7) throw new Error("Api call error");
          next("onSuccess");
        });
    } catch (e: unknown) {
      console.log(e);
      next("onError");
    }
  }, [next]);
  return (
    <Flex vertical gap="middle">
      <Card title="Action">
        <Flex vertical gap="small" align="center">
          <Typography.Text>Something went wrong...</Typography.Text>
          <ButtonPrev />
        </Flex>
      </Card>
    </Flex>
  );
};
