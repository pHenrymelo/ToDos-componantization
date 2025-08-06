import { Crown } from "lucide-react";
import { Button } from "./components/button";
import { IconButton } from "./components/icon-button";
import { InputText } from "./components/input-text";
import { InputCheckbox } from "./components/input-checkbox";
import { Card } from "./components/card";
import { Badge } from "./components/badge";
import { Container } from "./components/container";

export function App() {

  return (
    <Container className="flex flex-col gap-2 items-center my-auto">
        <div className=" flex gap-2">
          <Badge>25/137</Badge>
          <Badge variant="secondary">25</Badge>
        </div>
        <div className=" flex gap-2">
          <Button variant="primary">
            <Crown size={24} />
              button
          </Button>
          <Button variant="secondary">
            <Crown size={24} />
              button
          </Button>
          <Button variant="ghost">
            <Crown size={24} />
              button
          </Button>
        </div>
        <div className=" flex gap-2">
          <IconButton variant="primary" icon={<Crown size={24} />} />
          <IconButton variant="secondary" icon={<Crown size={24} />} />
          <IconButton variant="ghost" icon={<Crown size={24} />} />
        </div>
        <div className=" flex gap-2">
          <InputText />
        </div>

        <div className=" flex gap-2">
          <InputCheckbox />
          <InputCheckbox />
          <InputCheckbox />
        </div>

        <div className=" flex gap-2 w-full">
          <Card size="md" className=" mx-auto w-10/12">

            KaiserInc.
          </Card>
        </div>
    </Container>
  )
}