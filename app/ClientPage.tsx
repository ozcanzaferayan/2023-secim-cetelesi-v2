"use client";
import React, { useRef, useState } from "react";
import Button from "./components/Button";

type TButton = {
  id: number;
  isChecked: boolean;
};

const ClientPage = () => {
  const refAudio = useRef<HTMLAudioElement>(null);
  const [invalidVotes, setInvalidVotes] = useState(0);
  const createButtons = () =>
    Array.from({ length: 400 }).map((_, i) => ({
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
  };
  return (
    <>
      <main className="flex min-h-screen flex-col items-center py-6">
        <h2 className="mb-3 text-2xl font-semibold text-center">
          2023 Cumhurbaşkanı seçimi çetelesi
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col items-center gap-6">
            <h2 className="mb-3 text-lg font-semibold text-center">
              Kemal <br />
              Kılıçdaroğlu
            </h2>
            <div className="flex flex-col gap-6 overflow-auto max-h-screen px-6 pb-48">
              {kemalButtons.map((button, i) => (
                <Button
                  key={i}
                  isChecked={button.isChecked}
                  onClick={() => handleClick(button.id, "Kemal")}
                >
                  {button.id + 1}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <h2 className="mb-3 text-lg font-semibold text-center">
              Recep <br /> Tayyip Erdoğan
            </h2>
            <div className="flex flex-col gap-6 overflow-auto max-h-screen px-6 pb-48">
              {tayyipButtons.map((button, i) => (
                <Button
                  key={i}
                  isChecked={button.isChecked}
                  onClick={() => handleClick(button.id, "Tayyip")}
                >
                  {button.id + 1}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <audio ref={refAudio} src="/bubble.wav">
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </main>
      <footer className="border-white absolute bottom-0 bg-black py-4 min-w-full">
        <div className="grid grid-cols-2 text-center gap-3">
          <span>
            Toplam:
            <span className="text-xl">
              {kemalButtons.filter((button) => button.isChecked).length}
            </span>
          </span>
          <span>
            Toplam:
            <span className="text-xl">
              {tayyipButtons.filter((button) => button.isChecked).length}
            </span>
          </span>
        </div>
        <div className="px-6 flex gap-3 items-center">
          <span>Geçersiz oy: </span>
          <input
            value={invalidVotes}
            onChange={(e) => setInvalidVotes(Number(e.target.value))}
            type="text"
            className="w-12 h-8 text-center text-blue-500"
          />
        </div>
      </footer>
    </>
  );
};

export default ClientPage;
