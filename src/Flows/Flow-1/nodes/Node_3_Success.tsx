import { useFlower } from "@flowerforce/flower-react";
import { Flex, Card, Typography } from "antd";
import { useEffect, useRef } from "react";
import {
  ButtonNext,
  ButtonPrev,
} from "../../FlowerComponents/NavigationButtons";
import { FlowerValue } from "@flowerforce/flower-react-shared";

export const Node_3_Success = () => {
  const { next } = useFlower();
  const data = useRef<object | undefined>(undefined);
  useEffect(() => {
    const random = Math.random();
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => (data.current = res.json()))
        .then(() => {
          if (random < 0.7) {
            throw new Error("Api call error");
          }
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
          <Typography.Text>Great! Lets look at datas</Typography.Text>
          <FlowerValue id="apiCall">
            {({ value }) =>
              value.map((val: unknown) => (
                <pre>{JSON.stringify(val, null, 4)}</pre>
              ))
            }
          </FlowerValue>
          <ButtonNext />
          <ButtonPrev />
        </Flex>
      </Card>
    </Flex>
  );
};
