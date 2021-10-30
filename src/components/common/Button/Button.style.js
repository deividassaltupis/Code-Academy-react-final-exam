import styled, { css } from "styled-components";

export const BasicButtonStyle = css`
    display: inline-block;
    border: none;
    cursor: pointer;

    padding: 7px 10px;
    border-radius: 4px;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    transition: 0.8s;
`;

export const PrimaryButton = styled.button`
    ${BasicButtonStyle}
    color: var(--c-white);
    background-color: var(--c-red);
    border: 1px solid var(--c-red);
`;

export const BlueButton = styled.button`
    ${BasicButtonStyle}
    color: var(--c-white);
    background-color: var(--c-blue);
    border: 1px solid var(--c-blue);
`;

export const LightButton = styled.button`
    ${BasicButtonStyle}
    color: var(--c-dark);
    background-color: var(--c-white);
    border: 1px solid var(--c-grey);
`;
