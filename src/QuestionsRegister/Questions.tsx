import React from "react";


import HeaderQuestions from "../components/molecules/HeaderQuestions";
import BodyQuestions from "../components/molecules/BodyQuestions/BodyQuestions";

interface Props {
  fetching?: boolean;
  onNavClick?(): void
}

const Questions = () => {

  return (
    <div>
      <HeaderQuestions />
      <BodyQuestions />
      <br />
    </div>
  );
};

export default Questions;
