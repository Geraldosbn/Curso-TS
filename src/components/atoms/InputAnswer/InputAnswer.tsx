import React, { useState } from "react";
import { styles } from "./style";


interface Props {
  fetching?: boolean;
  id?: string
}



const InputAnswer = (props: Props, e: any) => {
  const { id } = props

  const [value, setValue] = useState('')

  return (
    <div>
      <input
        id={id}
        type="text"
        placeholder="Resposta NUMERO"
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </div>
  );
};

export default InputAnswer;
