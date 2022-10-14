import React from "react";

interface Props {
  fetching?: boolean;
}

const HeaderQuestions = () => {

  return (
    <div>
      <h1>Cadastro Quiz</h1>
      <h3>Insira a pergunta</h3>
      <input
          type="text"
          placeholder="Insira a pergunta aqui."
          required
        ></input>
    </div>
  );
};

export default HeaderQuestions;
