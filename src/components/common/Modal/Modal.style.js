import styled, { css } from "styled-components";

const FixedScreenWrapper = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const Overlay = styled.div`
    ${FixedScreenWrapper}
    background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalWrapper = styled.div`
    ${FixedScreenWrapper}
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LightModal = styled.div`
    min-width: 500px;
    padding: 20px;
    border-radius: 8px;
    .modal-heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .modal-body {
        display: flex;
        flex-direction: column;
    }
    .modal-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const CloseButton = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 5px;
`;

export const Separator = styled.div`
    height: 1px;
    background-color: #c1c1c1;
`;
