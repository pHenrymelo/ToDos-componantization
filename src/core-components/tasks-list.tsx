import { Plus } from "lucide-react";
import { TaskState } from "../models/task";
import { TaskItem } from "./task-item";
import { Button } from "../components/button";
import { useTasks } from "../hooks/use-tasks";
import { useTask } from "../hooks/use-task";

export function TasksList() {
  const { tasks, isLoadingTasks } = useTasks();
  const { prepareTask } = useTask();

  function handlePrepareTask() {
    prepareTask();
  }

  console.log(tasks);

  return (
    <>
      <section>
        <Button
          variant="secondary"
          onClick={handlePrepareTask}
          disabled={
            tasks.some((task) => task.state === TaskState.Creating) ||
            isLoadingTasks
          }
          className="flex justify-center items-center w-full text-md font-bold h-20"
        >
          <Plus />
          Nova tarefa
        </Button>
      </section>
      <section className=" flex flex-col space-y-4">
        {!isLoadingTasks &&
          tasks.map((task) => <TaskItem key={task.id} task={task} />)}
        {isLoadingTasks && (
          <>
            {" "}
            <TaskItem task={{} as Task} loading />{" "}
            <TaskItem task={{} as Task} loading />{" "}
            <TaskItem task={{} as Task} loading />{" "}
          </>
        )}
      </section>
    </>
  );
}
