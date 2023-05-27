import React from "react";
import CandidateHeader from "./CandidateHeader";

const Header = () => {
  return (
    <header className="flex flex-col gap-3 py-3">
      <h2 className="text-2xl font-semibold text-center">
        2023 Cumhurbaşkanı seçimi çetelesi
      </h2>
      <div className="flex flex-row justify-around gap-3">
        <CandidateHeader>
          Kemal <br />
          Kılıçdaroğlu
        </CandidateHeader>
        <CandidateHeader>
          Recep <br />
          Tayyip Erdoğan
        </CandidateHeader>
      </div>
    </header>
  );
};

export default Header;
