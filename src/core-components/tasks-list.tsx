import { Plus } from "lucide-react";
import { Button } from "../components/button";
import { TaskItem } from "./task-item";

export function TasksList() {
    return (
        <>
            <section>
                <Button variant="secondary" className="flex justify-center items-center w-full text-md font-bold h-20">
                   <Plus /> 
                        Nova tarefa
                </Button>
            </section>
            <section className=" flex flex-col space-y-4">
                <TaskItem />
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </section>
        </>
    )
}