import { Check, Pencil, Trash, X } from "lucide-react";
import { Card } from "../components/card";
import { IconButton } from "../components/icon-button";
import { InputCheckbox } from "../components/input-checkbox";
import { Text } from "../components/text";
import { useState } from "react";
import { InputText } from "../components/input-text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import { useTask } from "../hooks/use-task";

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const { updateTask, updateTaskStatus, deleteTask } = useTask();

  const [isEditing, setIsEditing] = useState(
    task?.state === TaskState.Creating,
  );

  const [taskTitle, setTaskTitle] = useState(task.title || "");

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleCancelEditTask() {
    if (task.state === TaskState.Creating) {
      deleteTask(task.id);
    }

    setIsEditing(false);
  }

  function handleChangeTaskTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value || "");
  }

  function handleSaveTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(taskTitle);
    updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  }

  function handleChangeTaskStatus(event: React.ChangeEvent<HTMLInputElement>) {
    const checked = event.target.checked;
    updateTaskStatus(task.id, checked);
  }

  function handleDeleteTask() {
    deleteTask(task.id);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={task?.isComplete}
            onChange={handleChangeTaskStatus}
          />
          <Text
            className={cx("flex-1", {
              "line-through opacity-50 transition duration-300":
                task?.isComplete,
            })}
          >
            {task?.title}
          </Text>
          <div className="flex items-center justify-center gap-1">
            <IconButton
              variant="ghost"
              icon={<Trash size={16} onClick={handleDeleteTask} />}
            />
            <IconButton
              variant="ghost"
              icon={<Pencil size={16} onClick={handleEditTask} />}
            />
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={handleSaveTask} className="flex items-center gap-4">
            <InputText
              className="flex-1"
              value={taskTitle}
              onChange={handleChangeTaskTitle}
              required
              autoFocus
            />
            <div className="flex items-center justify-center gap-1">
              <IconButton
                variant="secondary"
                type="button"
                icon={<X size={16} onClick={handleCancelEditTask} />}
              />
              <IconButton
                variant="primary"
                type="submit"
                icon={<Check size={16} />}
              />
            </div>
          </form>
        </>
      )}
    </Card>
  );
}
