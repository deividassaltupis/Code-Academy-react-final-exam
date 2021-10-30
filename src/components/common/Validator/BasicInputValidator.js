import React from "react";

const BasicInputValidator = ({ render, inputValue, submitClicked }) => {
    let invalid = false;
    if (submitClicked && !inputValue.length) invalid = true;
    return render(invalid);
};

export default BasicInputValidator;
