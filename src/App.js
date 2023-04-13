import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

import "./App.css";

const App = () => {
    const DUMMY_USERS = [
        { name: "marko", age: 123, id: "a1" },
        { name: "maja", age: 321, id: "a2" },
    ];

    const [usersList, setUsersList] = useState(DUMMY_USERS);

    const addUserHandler = (userName, userAge) => {
        setUsersList((prevUsers) => [
            ...prevUsers,
            { name: userName, age: +userAge, id: Math.random().toString() },
        ]);
    };

    const deleteUserHandler = (id) => {
        setUsersList(usersList.filter((user) => user.id !== id));
    };

    return (
        <>
            <AddUser onAddUser={addUserHandler} />
            {usersList.length > 0 && (
                <UsersList users={usersList} onDeleteUser={deleteUserHandler} />
            )}
        </>
    );
};

export default App;
