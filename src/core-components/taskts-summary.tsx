import { Badge } from "../components/badge";
import { Text } from "../components/text";
import { useTasks } from "../hooks/use-tasks";

export function TasksSummary() {
  const { tasksCount, concludedTasksCount, isLoadingTasks } = useTasks();

  return (
    <>
      <div className=" flex items-center justify-center gap-2">
        <Text variant="body-sm-bold" className="text-dangerLight">
          Tarefas criadas
        </Text>
        <Badge variant="secondary" loading={isLoadingTasks}>
          {tasksCount}
        </Badge>
      </div>
      <div className=" flex items-center justify-center gap-2">
        <Text variant="body-sm-bold" className="text-successLight">
          Concluídas
        </Text>
        <Badge variant="primary" loading={isLoadingTasks}>
          {concludedTasksCount} de {tasksCount}
        </Badge>
      </div>
    </>
  );
}
