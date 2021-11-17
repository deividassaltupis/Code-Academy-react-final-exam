import React, { useRef, useState, useContext } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import BasicInputValidator from "../Validator/BasicInputValidator";
import { StyledSignUpForm } from "./SignupForm.style";
import { ModalContext } from "../../../App";
import UserDataDisplayTemplate from "../../templates/UserDataDisplayTemplate";

const SignupForm = () => {
  const { displayModal, closeModal } = useContext(ModalContext);

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitClicked, setSubmitClicked] = useState(false);

  const submitFormHandler = (e) => {
    e.preventDefault();
    setSubmitClicked(true);

    if (!name || !email || !password) {
      return;
    }

    closeModal();
    const userData = {
      name: name,
      email: email,
      password: password,
    };
    displayModal(
      "Submited user data",
      <UserDataDisplayTemplate userData={userData} />
    );
  };
  return (
    <StyledSignUpForm className="column gap-20">
      <div className="form__top column gap-10">
        <h2>Get Started</h2>
        <p>Already have an account ?</p>
        <p className="c-red">Log in</p>
        <div className="row justify-sb signup-btns">
          <Button linkTo="http://www.gmail.com/" color="light">
            sign up
          </Button>
          <Button linkTo="http://www.facebook.com/" color="blue">
            sign up
          </Button>
        </div>
      </div>
      <p className="fs-24">Or</p>
      <div className="form__bottom column gap-20">
        <BasicInputValidator
          inputValue={name}
          submitClicked={submitClicked}
          render={(invalid) => (
            <Input
              type="text"
              placeholder="Name Surname"
              label="Name"
              ref={nameInputRef}
              icon="user"
              onChange={(e) => setName(e.target.value)}
              invalid={invalid}
              submitClicked={submitClicked}
            />
          )}
        />
        <BasicInputValidator
          inputValue={email}
          submitClicked={submitClicked}
          render={(invalid) => (
            <Input
              type="text"
              placeholder="youremail@gmail.com"
              label="Email"
              ref={emailInputRef}
              icon="email"
              onChange={(e) => setEmail(e.target.value)}
              invalid={invalid}
              submitClicked={submitClicked}
            />
          )}
        />
        <BasicInputValidator
          inputValue={password}
          submitClicked={submitClicked}
          render={(invalid) => (
            <Input
              type="text"
              placeholder="123456"
              label="Password"
              ref={passwordInputRef}
              icon="lock"
              onChange={(e) => setPassword(e.target.value)}
              invalid={invalid}
              submitClicked={submitClicked}
            />
          )}
        />
        <Button color="primary" func={submitFormHandler}>
          Submit
        </Button>
      </div>
    </StyledSignUpForm>
  );
};

export default SignupForm;
