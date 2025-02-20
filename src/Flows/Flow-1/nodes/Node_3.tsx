import { useFlower } from "@flowerforce/flower-react";
import { useFlowerForm } from "@flowerforce/flower-react-form";
import { Flex, Card, Typography, Spin } from "antd";
import { useEffect } from "react";

export const Node_3 = () => {
  const { next } = useFlower();
  const { setData } = useFlowerForm();
  useEffect(() => {
    const random = Math.random();

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        if (random > 0.3) throw new Error("Api call error");
        setData(data, "apiCall");
        next("onSuccess");
      })
      .catch(() => next("onError"));
  }, [next, setData]);
  return (
    <Flex vertical gap="middle">
      <Card title="Action">
        <Flex vertical gap="small" align="center">
          <Typography.Text>Calling api...</Typography.Text>
          <Spin />
        </Flex>
      </Card>
    </Flex>
  );
};
