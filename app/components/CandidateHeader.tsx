import React from "react";

type Props = {
  children: React.ReactNode;
};

const CandidateHeader = ({ children }: Props) => {
  return <h2 className="text-lg font-semibold text-center">{children}</h2>;
};

export default CandidateHeader;
