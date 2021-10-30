import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Global Styles
import { GlobalStyles } from "./styles/GlobalStyles.style";

// Pages
import HomePage from "./pages/HomePage";

// Components
import Modal from "./components/common/Modal/Modal";

// Hooks
import useModal from "./hooks/useModal";

// Contexts
export const ModalContext = React.createContext();

function App() {
    const {
        displayModal,
        closeModal,
        isOpen,
        modalHeading,
        modalBody,
        modalActions,
    } = useModal();
    return (
        <>
            <ModalContext.Provider value={{ displayModal, closeModal, isOpen }}>
                <GlobalStyles />
                <div className="app">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                        </Switch>
                        {isOpen && (
                            <Modal
                                heading={modalHeading.current}
                                actions={modalActions}
                                onClose={closeModal}
                            >
                                {modalBody}
                            </Modal>
                        )}
                    </Router>
                </div>
            </ModalContext.Provider>
        </>
    );
}

export default App;
