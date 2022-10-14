import React from 'react'
import './style'

export default function ButtonSubmit(props) {
    return (
        <button
        onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}