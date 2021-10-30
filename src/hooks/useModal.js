import { useState, useRef } from "react";

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const modalHeading = useRef("");
    const [modalBody, setModalBody] = useState(<></>);
    const [modalActions, setModalActions] = useState([]);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const displayModal = (heading, body, actions = []) => {
        modalHeading.current = heading;
        setModalBody(body);
        setModalActions(actions);
        openModal();
    };
    return {
        displayModal,
        closeModal,
        isOpen,
        modalHeading,
        modalBody,
        modalActions,
    };
};

export default useModal;
