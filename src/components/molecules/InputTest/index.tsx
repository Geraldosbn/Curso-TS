import React from "react";
import InputAnswer from '../../atoms/InputAnswer/InputAnswer';
import ButtonDelete from '../../atoms/ButtonDelete/ButtonDelete';

interface Props {
    onClick?: any
    type: any
    key?: number
    id?: string
}


export default function InputTest(props:Props) {
    const {onClick, type, key, id} = props

    return (
        <div id={id}>
            <InputAnswer />
            <ButtonDelete onClick={onClick} type={type} />
        </div>
    )
}