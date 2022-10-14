import React from "react";
import { styles } from "./style";


interface Props {
  fetching?: boolean;
  id?: string
}

const InputAnswer = (props: Props, e: any) => {
  const { id } = props

  return (
    <div>
      <input
        id={id}
        type="text"
        placeholder="Resposta NUMERO"
        required
      ></input>
    </div>
  );
};

export default InputAnswer;
