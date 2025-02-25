import { useFlower, useFlowerForm } from "@flowerforce/flower-react";
import { Flex, Typography, Spin } from "antd";
import { useEffect } from "react";
import { Card } from "../../../components/Card";

export const Node_3 = () => {
  const { next } = useFlower();
  const { setData } = useFlowerForm();
  useEffect(() => {
    const random = Math.random();

    fetch("https://jsonplaceholder.typicode.com/users")
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
