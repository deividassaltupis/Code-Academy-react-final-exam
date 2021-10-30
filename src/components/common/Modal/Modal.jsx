import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import {
    CloseButton,
    LightModal,
    ModalWrapper,
    Overlay,
    Separator,
} from "./Modal.style";

const Modal = ({ onClose, heading, children, actions = [] }) => {
    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") onClose();
        });
    }, [onClose]);
    const closeOnOverlayClick = (e) => {
        if (e.target.dataset.id === "modalWrapper") onClose();
        return;
    };
    return ReactDOM.createPortal(
        <>
            <Overlay></Overlay>
            <ModalWrapper
                data-id="modalWrapper"
                onClick={(e) => closeOnOverlayClick(e)}
            >
                <LightModal>
                    {heading && (
                        <>
                            <div className="modal-heading">
                                <h3>{heading}</h3>
                                <CloseButton onClick={onClose}>
                                    <FontAwesomeIcon icon={faTimes} size="lg" />
                                </CloseButton>
                            </div>
                            <Separator />
                        </>
                    )}

                    <div className="modal-body">{children}</div>
                    {actions.length ? (
                        <>
                            <Separator />
                            <div className="modal-footer">
                                {actions.map((btn) => btn)}
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </LightModal>
            </ModalWrapper>
        </>,
        document.getElementById("modal")
    );
};

export default Modal;
