import { Check, Pencil, Trash, X } from "lucide-react";
import { Card } from "../components/card";
import { IconButton } from "../components/icon-button";
import { InputCheckbox } from "../components/input-checkbox";
import { Text } from "../components/text";
import { useState } from "react";
import { InputText } from "../components/input-text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";

interface TaskItemProps {
    task: Task
}

export function TaskItem({task}:TaskItemProps){

    const [isEditing, setIsEditing] = useState(task?.state === TaskState.Creating)

    function handleEditTask() {
        setIsEditing(true)
    }

    function handleCancelEditTask() {
        setIsEditing(false)
    }

    return(
        <Card size="md" className="flex items-center gap-4">
            {!isEditing ? <>
            
            <InputCheckbox value={task?.isComplete?.toString()} checked={task?.isComplete} />
            <Text className={cx("flex-1", {"line-through opacity-85": task?.isComplete})}>{task?.title}</Text>
            <div className="flex items-center justify-center gap-1">
                <IconButton variant="ghost" icon={<Trash size={16} />}/>
                <IconButton variant="ghost" icon={<Pencil size={16} onClick={handleEditTask} />}/>
            </div>
            </> 
            :
            <>
                <InputText className="flex-1" />
                <div className="flex items-center justify-center gap-1">
                <IconButton variant="secondary" icon={<X size={16} onClick={handleCancelEditTask} />}/>
                <IconButton variant="primary" icon={<Check size={16} />}/>
            </div>
            </>
            
            }

        </Card>
    )
}