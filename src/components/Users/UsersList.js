import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";
import button from "../UI/Button.module.css";

const UsersList = (props) => {
    const deleteHandler = (event) => {
        props.onDeleteUser(event.target.id);
    };

    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} year old)
                        <button
                            className={button.button}
                            id={user.id}
                            onClick={deleteHandler}
                        >
                            delete
                        </button>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;
