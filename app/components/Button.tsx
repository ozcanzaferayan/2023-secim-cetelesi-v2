import React from "react";
type Props = {
  children: React.ReactNode;
  isChecked: boolean;
  onClick?: () => void;
};

const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={`button w-24 h-16 ${
        props.isChecked ? "bg-blue-500" : "bg-blue-100"
      }  
      ${
        props.isChecked
          ? "active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]"
          : "active:[box-shadow:0_0px_0_0_#9cc1ff,0_0px_0_0_#1b70f841] [box-shadow:0_10px_0_0_#9cc1ff,0_15px_0_0_#1b70f841]"
      }  
      rounded-lg cursor-pointer select-none
active:translate-y-2  
active:border-b-[0px]
transition-all duration-150 
border-b-[1px] 
${props.isChecked ? "border-blue-400" : "border-blue-300"}  

`}
    >
      <span
        className={`flex flex-col justify-center items-center h-full ${
          props.isChecked ? "text-white" : "text-blue-500"
        }  font-bold text-lg`}
      >
        {props.children}
      </span>
    </button>
  );
};

export default Button;
