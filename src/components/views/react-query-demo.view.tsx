import { JSX } from "react";
import { useQuery } from "@tanstack/react-query";

// Mantine
import { Card, Text, Button, Loader, Alert } from "@mantine/core";

import { IF } from "../common/ui/if";

interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

/**
 * @description React Query Demo View Component
 * @returns {JSX.Element}
 */
export const ReactQueryDemoView = (): JSX.Element => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );
      const tasks = (await response.json()) as Task[];
      await new Promise((resolve) => setTimeout(resolve, 2000));

      return tasks.slice(0, 10);
    },
    queryKey: ["todos"],
    enabled: true,
    refetchOnMount: true,
  });

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        margin: "1rem",
        minWidth: "300px",
        maxWidth: "50vw",
      }}
      className="mx-auto p-0"
    >
      <Text size="xl" fw="bold">
        React Query Demo
      </Text>

      <Button
        onClick={() => {
          refetch();
        }}
      >
        Refetch
      </Button>

      <IF condition={!!(!isLoading && !isError && data && Array.isArray(data))}>
        <ul>
          {Array.isArray(data) &&
            data.map((task) => (
              <li key={task.id}>
                {task.title} - {task.completed ? "Completed" : "Not Completed"}
              </li>
            ))}
        </ul>
      </IF>

      <IF condition={!isLoading && !isError && !data}>
        <Alert variant="default" color="gray">
          <Text>No data</Text>
        </Alert>
      </IF>

      <IF condition={isLoading}>
        <Loader />
      </IF>

      <IF condition={isError}>
        <Alert variant="default" color="red">
          <Text>Error fetching data</Text>
        </Alert>
      </IF>
    </Card>
  );
};
