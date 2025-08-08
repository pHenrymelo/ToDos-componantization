import { Badge } from "../components/badge";
import { Text } from "../components/text";

export function TasksSummary() {
    return (
        <>
            <div className=" flex items-center justify-center gap-2">
                <Text variant="body-sm-bold" className="text-dangerLight">Tarefas criadas</Text>
                <Badge variant="secondary">5</Badge>
            </div>
            <div className=" flex items-center justify-center gap-2">
                <Text variant="body-sm-bold" className="text-successLight">Concluídas</Text>
                <Badge variant="primary">2 de 5</Badge>
            </div>
        </>
    )
}