import { Crown } from "lucide-react";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { IconButton } from "../components/icon-button";
import { InputText } from "../components/input-text";
import { InputCheckbox } from "../components/input-checkbox";
import { Card } from "../components/card";
import { Skeleton } from "../components/skeleton";

export function PageComponents (){
    return (

        <Container className="flex flex-col gap-2 items-center justify-center my-20">
        <div className=" flex gap-2">
          <Badge>25/137</Badge>
          <Badge variant="secondary">25</Badge>
          <Badge variant="primary" loading>25</Badge>
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
          <IconButton loading icon={<Crown size={24} />} />
        </div>
        <div className=" flex gap-2">
          <InputText />
        </div>

        <div className=" flex gap-2">
          <InputCheckbox />
          <InputCheckbox loading/>
        </div>

        <div className=" flex gap-2 w-full">
          <Card size="md" className=" mx-auto w-10/12">

            KaiserInc.
          </Card>
        </div>

        <div className=" flex gap-2 w-full justify-center">
          <Skeleton className="h-6 w-10/12" />
        </div>
    </Container>
    )
}