import { Crown } from "lucide-react";
import { Button } from "./components/button";
import { IconButton } from "./components/icon-button";
import { InputText } from "./components/input-text";
import { InputCheckbox } from "./components/input-checkbox";

export function App() {

  return (
    <div className=" w-full min-h-dvh flex flex-col bg-gray-800 justify-center items-center gap-2 ">
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
    </div>
  )
}