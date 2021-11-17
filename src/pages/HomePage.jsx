import React, { useContext } from "react";
import Button from "../components/common/Button/Button";

import SignupTemplate from "../components/templates/SignupTemplate";

import { ModalContext } from "../App";

const HomePage = () => {
  const { displayModal } = useContext(ModalContext);
  return (
    <div className="container mt-20">
      <Button
        func={() => {
          displayModal("", <SignupTemplate />);
        }}
      >
        Sign up
      </Button>
    </div>
  );
};

export default HomePage;
