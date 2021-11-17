import React, { useContext } from "react";
import { StyledUserDataDisplay } from "./UserDataDisplayTemplate.style";
import { ModalContext } from "../../App";
import Button from "../common/Button/Button";

const UserDataDisplayTemplate = ({ userData: { name, email, password } }) => {
  const { closeModal } = useContext(ModalContext);
  return (
    <StyledUserDataDisplay>
      <p>
        <span className="text-bold">Name:</span> {name}
      </p>
      <p>
        <span className="text-bold">Email:</span> {email}
      </p>
      <p>
        <span className="text-bold">Password:</span> {password}
      </p>
      <Button func={() => closeModal()} color="primary">
        Close
      </Button>
    </StyledUserDataDisplay>
  );
};

export default UserDataDisplayTemplate;
