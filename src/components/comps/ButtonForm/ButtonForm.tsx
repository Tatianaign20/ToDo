import React, { useEffect } from "react";
import './ButtonForm.css' 

export const ButtonForm = (props: {buttonFormName: string, buttonFormBackground: string, onClick: () => void}) => {
    const {buttonFormName, buttonFormBackground, onClick} = props;

    return (
        <button className="button-form" style={{ backgroundColor: buttonFormBackground }} onClick={onClick}>{buttonFormName}</button>
    )
}