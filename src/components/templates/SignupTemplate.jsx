import React from "react";
import SignupForm from "../common/Form/SignupForm";

import { StyledSignupTemplate } from "./SignupTemplate.style";

const SignupTemplate = () => {
    return (
        <StyledSignupTemplate className="row">
            <div className="header relative column justify-c">
                <img
                    src="https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/logo.svg"
                    alt=""
                    className="absolute logo"
                />
                <img
                    src="https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/illustration.svg"
                    alt=""
                    className="relative header-img"
                />
                <p className="absolute">
                    Start for free & <br />
                    Get Attractive offers Today!
                </p>
            </div>
            <SignupForm />
        </StyledSignupTemplate>
    );
};

export default SignupTemplate;
