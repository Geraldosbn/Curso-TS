import React, { Children, useState } from "react";
import InputAnswer from "../../atoms/InputAnswer/InputAnswer";
import ButtonCreate from "../../atoms/ButtonCreate/ButtonCreate";
import ButtonDelete from "../../atoms/ButtonDelete/ButtonDelete";


const BodyQuestions = () => {

  const [answerList, setAnswerList] = useState([] as any);

  const keyAnswer = answerList.map((keyAnswer: any, index: number) =>
    <div key={index} >
      <InputAnswer id={index.toString()} />
      <ButtonDelete onClick={() => removeAnswer(index)} type={'button'} />
    </div>
  )

  console.log(keyAnswer)

  function insertAnswer() {
    setAnswerList([...answerList, 1]);
  }

  function removeAnswer(index: number) {
    const newAnswerList = keyAnswer.slice()
    newAnswerList.splice(index, 1)
    setAnswerList([...newAnswerList])

    console.log("O indice clicado foi ->", index)
    console.log(" Array newAnswerList ", newAnswerList)
  }

  return (
    <div>
      <h3>Insira as respostas</h3>
      <div id="answer">
        <InputAnswer />
        <ButtonCreate onClick={insertAnswer} type={'button'} />
      </div>
      {keyAnswer}
    </div>
  );
};

export default BodyQuestions;
