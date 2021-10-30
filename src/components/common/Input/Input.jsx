import React from "react";

import { StyledInput } from "./Input.style";

const Input = React.forwardRef(
    (
        { type, placeholder, label, icon, onChange, invalid, submitClicked },
        ref
    ) => {
        return (
            <div className="column gap-10">
                {label && <label>{label}</label>}
                <StyledInput
                    type={type}
                    placeholder={placeholder}
                    ref={ref}
                    icon={icon}
                    onChange={onChange}
                    invalid={invalid}
                    submitClicked={submitClicked}
                />
                {invalid ? (
                    <p className="fs-13 c-red">{label} cannot be blank</p>
                ) : (
                    !invalid &&
                    submitClicked && <p className="fs-13 c-green">Good</p>
                )}
            </div>
        );
    }
);

export default Input;
