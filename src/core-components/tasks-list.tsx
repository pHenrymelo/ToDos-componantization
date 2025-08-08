import { Plus } from "lucide-react";
import { Button } from "../components/button";
import { TaskItem } from "./task-item";
import { useTasks } from "../hooks/use-tasks";
import { useTask } from "../hooks/use-task";

export function TasksList() {

    const { tasks } = useTasks()
    const { prepareTask } = useTask()

    function handlePrepareTask(){
        prepareTask()
    }

    console.log(tasks)

    return (
        <>
            <section>
                <Button 
                variant="secondary"
                onClick={handlePrepareTask}
                className="flex justify-center items-center w-full text-md font-bold h-20">
                   <Plus /> 
                        Nova tarefa
                </Button>
            </section>
            <section className=" flex flex-col space-y-4">
                {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
            </section>
        </>
    )
}