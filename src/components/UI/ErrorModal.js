import React from "react";
import { createPortal } from "react-dom";

import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

const BackdropModal = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onDismissError}></div>
    );
};

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onDismissError}>Okay</Button>
            </footer>
        </Card>
    );
};
// "name": "simple-validation-form",

const ErrorModal = (props) => {
    return (
        <>
            {createPortal(
                <>
                    <BackdropModal onDismissError={props.onDismissError} />
                    <ModalOverlay
                        title={props.title}
                        message={props.message}
                        onDismissError={props.onDismissError}
                    />
                </>,
                document.getElementById("error-modal")
            )}
        </>
    );
};

export default ErrorModal;
