import React from "react";
import { styles } from "./style";

interface Props {
  onClick?: () => void
  type?: 'button' | "submit" | "reset" | undefined

}

function ButtonDelete({ onClick, type }: Props) {
  return (
    <button onClick={onClick} type={type} >
       Delete
    </button>
  )
}

export default ButtonDelete;

