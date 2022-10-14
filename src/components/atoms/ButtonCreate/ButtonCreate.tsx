import React from "react";
import { styles } from "./style";

interface Props {
  onClick?: () => void
  type?: 'button' | "submit" | "reset" | undefined

}

function ButtonCreate({ onClick, type }: Props) {

  return (
    <button onClick={onClick} type={type}>
       Create
    </button>
  )
}

export default ButtonCreate;

