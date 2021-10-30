import React from "react";

import { PrimaryButton, BlueButton, LightButton } from "./Button.style";

const Button = ({ children, func, linkTo, disabled, color }) => {
    let action;
    if (linkTo) {
        action = () => {
            window.location.href = linkTo;
        };
    } else action = func;

    switch (color) {
        case "primary":
            return (
                <PrimaryButton onClick={(e) => action(e)} disabled={disabled}>
                    {children}
                </PrimaryButton>
            );
        case "blue":
            return (
                <BlueButton onClick={(e) => action(e)} disabled={disabled}>
                    {children}
                </BlueButton>
            );
        case "light":
            return (
                <LightButton onClick={(e) => action(e)} disabled={disabled}>
                    {children}
                </LightButton>
            );
        default:
            return (
                <LightButton onClick={(e) => action(e)} disabled={disabled}>
                    {children}
                </LightButton>
            );
    }
};

export default Button;
