import { CopyCheck } from "lucide-react";
import { Container } from "../components/container";
import { Text } from "../components/text";

export function Header() {
    return (
        <Container as="header" className="mt-3 md:mt-20 flex gap-8">
            <CopyCheck size={48} stroke="#6226D9" />
            <Text variant="heading" className="font">
                Kaiser ToDos
            </Text>
        </Container>

    )
}