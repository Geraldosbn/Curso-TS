import React, { useMemo, useState } from "react";
import InputAnswer from "../../atoms/InputAnswer/InputAnswer";
import ButtonCreate from "../../atoms/ButtonCreate/ButtonCreate";

import InputTest from "../InputTest";


const BodyQuestions = () => {

  const [answerList, setAnswerList] = useState([] as any);

  const keyAnswer = useMemo(() => {
    return answerList.map((keyAnswer: any, index: number) =>
    <InputTest key={keyAnswer} type='text' onClick={() => removeAnswer(index)}/>
)}, [answerList])

  console.log(answerList)

  function insertAnswer() {
    setAnswerList([...answerList, Math.random()]);
  }

  console.log(answerList)

  function removeAnswer(index: number) {

    const newAnswerList = answerList.slice()
    newAnswerList.splice(index, 1)
    setAnswerList(newAnswerList)

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
  )
}

export default BodyQuestions;
