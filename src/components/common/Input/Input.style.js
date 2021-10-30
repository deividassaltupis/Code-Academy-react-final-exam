import styled from "styled-components";

export const StyledInput = styled.input`
    height: 40px;
    padding-left: 40px;

    background: url("/icons/${(props) => props.icon}.png") no-repeat;
    background-position: left;
    background-size: 15px 15px;
    background-position-x: 10px;
    background-color: var(--c-white);

    font-family: "Poppins", sans-serif;
    border: 1px solid
        ${(props) => {
            return props.invalid
                ? "var(--c-red)"
                : props.submitClicked && !props.invalid
                ? "var(--c-green)"
                : "#bdbdbd";
        }};
    border-radius: 6px;
    outline: none;
    ::placeholder {
        color: #bdbdbd;
        transition: 1s;
    }
    :focus {
        border: 1px solid #868686;
    }
    :hover {
        ::placeholder {
            font-size: 14px;
        }
    }
`;
