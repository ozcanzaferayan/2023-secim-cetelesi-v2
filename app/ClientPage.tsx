"use client";
import React, { useRef, useState } from "react";
import Button from "./components/Button";
import ButtonColumn from "./components/ButtonColumn";
import CandidateHeader from "./components/CandidateHeader";
import MainHeader from "./components/Header";
import Footer from "./components/Footer";
import Header from "./components/Header";

export type TButton = {
  id: number;
  isChecked: boolean;
};

const ClientPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const refAudio = useRef<HTMLAudioElement>(null);
  const [invalidVotes, setInvalidVotes] = useState(0);
  const createButtons = () =>
    Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      isChecked: false,
    }));

  const [kemalButtons, setKemalButtons] = useState<TButton[]>(
    localStorage.getItem("kemalButtons") === null
      ? createButtons()
      : JSON.parse(localStorage.getItem("kemalButtons")!)
  );
  const [tayyipButtons, setTayyipButtons] = useState<TButton[]>(
    localStorage.getItem("tayyipButtons") === null
      ? createButtons()
      : JSON.parse(localStorage.getItem("tayyipButtons")!)
  );

  const handleButtonToggle = (buttons: TButton[], id: number) => {
    return buttons.map((button) =>
      button.id === id ? { ...button, isChecked: !button.isChecked } : button
    );
  };

  const handleClick = (id: number, candidate: "Kemal" | "Tayyip") => {
    if (refAudio.current) {
      refAudio.current.currentTime = 0;
      refAudio.current.play();
    }
    if (candidate === "Kemal") {
      setKemalButtons((buttons) => handleButtonToggle(buttons, id));
      localStorage.setItem(
        "kemalButtons",
        JSON.stringify(handleButtonToggle(kemalButtons, id))
      );
    } else {
      setTayyipButtons((buttons) => handleButtonToggle(buttons, id));
      localStorage.setItem(
        "tayyipButtons",
        JSON.stringify(handleButtonToggle(tayyipButtons, id))
      );
    }

    const element = document.getElementById(candidate + "-button-" + (id + 1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <>
      <Header />
      <main className="flex flex-1 justify-around items-center overflow-hidden gap-3">
        <ButtonColumn
          type="Kemal"
          buttons={kemalButtons}
          handleClick={handleClick}
        />
        <ButtonColumn
          type="Tayyip"
          buttons={tayyipButtons}
          handleClick={handleClick}
        />
      </main>
      <Footer
        invalidVotes={invalidVotes}
        setInvalidVotes={setInvalidVotes}
        kemalButtons={kemalButtons}
        tayyipButtons={tayyipButtons}
      />
    </>
  );
};

export default ClientPage;
