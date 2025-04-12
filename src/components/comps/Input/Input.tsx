import React, { useState } from "react";
import './Input.css'
import {  TName } from "../../../utils/types";

export const Input = (props: {placeholder: string, maxLength: number, action: (value: TName) => void, inputValue: string}) => {
  const { placeholder, maxLength, action, inputValue} = props;

    return (
      <>
      <input 
        value={inputValue}
        className="input"
        type = {"text"}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={event => {
          const newValue = event.target.value
          action(newValue)
        }       
        }>
      </input>
      </>
    )
}
