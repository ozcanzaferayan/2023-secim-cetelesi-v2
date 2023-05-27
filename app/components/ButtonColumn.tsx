import React from "react";
import Button from "./Button";
import { TButton } from "../ClientPage";

type Props = {
  buttons: TButton[];
  type: "Kemal" | "Tayyip";
  className?: string;
  mainHeight: number;
  handleClick: (id: number, candidate: "Kemal" | "Tayyip") => void;
};

const ButtonColumn = (props: Props) => {
  return (
    <div
      className={`flex flex-col gap-6 overflow-auto 
     
      px-3`}
      style={{ height: props.mainHeight + "px" }}
    >
      {props.buttons.map((button, i) => (
        <Button
          id={props.type + "-button-" + i}
          key={i}
          isChecked={button.isChecked}
          onClick={() => props.handleClick(button.id, props.type)}
        >
          {button.id + 1}
        </Button>
      ))}
    </div>
  );
};

export default ButtonColumn;
