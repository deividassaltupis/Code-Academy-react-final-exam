import React, { useContext } from "react";
import Button from "../components/common/Button/Button";

import SignupTemplate from "../components/templates/SignupTemplate";

import { ModalContext } from "../App";

const HomePage = () => {
    const { displayModal, closeModal } = useContext(ModalContext);
    return (
        <div className="container mt-20">
            <Button
                func={() => {
                    displayModal("", <SignupTemplate />);
                }}
            >
                Sign up
            </Button>
            {/* <SignupTemplate /> */}
        </div>
    );
};

export default HomePage;
