import React, { forwardRef } from "react";
import { TButton } from "../ClientPage";

type Props = {
  kemalButtons: TButton[];
  tayyipButtons: TButton[];
  invalidVotes: number;
  setInvalidVotes: React.Dispatch<React.SetStateAction<number>>;
};

const Footer = forwardRef<HTMLDivElement, Props>(function Footer(
  props: Props,
  ref
) {
  return (
    <footer className="py-4 min-w-full h-24" ref={ref}>
      <div className="grid grid-cols-2 text-center gap-3">
        <span>
          Toplam:{" "}
          <span className="text-xl">
            {props.kemalButtons.filter((button) => button.isChecked).length}
          </span>
        </span>
        <span>
          Toplam:{" "}
          <span className="text-xl">
            {props.tayyipButtons.filter((button) => button.isChecked).length}
          </span>
        </span>
      </div>
      <div className="px-6 flex gap-3 items-center justify-center">
        <span>Geçersiz oy: </span>
        <input
          value={props.invalidVotes}
          onChange={(e) => props.setInvalidVotes(Number(e.target.value))}
          type="tel"
          className="w-12 h-8 text-center text-blue-500"
        />
      </div>
    </footer>
  );
});

export default Footer;
