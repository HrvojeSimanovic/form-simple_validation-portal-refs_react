import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState("");
    // const [enteredAge, setEnteredAge] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const userName = nameInputRef.current.value;
        const userAge = ageInputRef.current.value;

        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message:
                    "Please enter a valid name and age (non-empty values).",
            });
            setIsValid(!isValid);
            return;
        }

        if (+userAge < 1) {
            setError({
                title: "Invalid input",
                message: "Please enter valid age (>0).",
            });
            setIsValid(!isValid);
            return;
        }

        props.onAddUser(userName, userAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
        // setEnteredUsername("");
        // setEnteredAge("");
    };

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // };

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // };

    const dismissErrorHandler = () => {
        setIsValid(true);
    };

    return (
        <>
            {!isValid && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onDismissError={dismissErrorHandler}
                />
            )}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        // value={enteredUsername}
                        type="text"
                        // onChange={usernameChangeHandler}
                        ref={nameInputRef}
                    />

                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        // value={enteredAge}
                        type="number"
                        // onChange={ageChangeHandler}
                        ref={ageInputRef}
                    />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;
