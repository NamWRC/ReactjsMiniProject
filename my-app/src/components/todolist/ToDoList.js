import React, { useState } from "react";
import "./ToDoList.css";

const toDo = [
    {
        id: 0,
        toDoThing: "hoc",
        done: false,
    },
    {
        id: 1,
        toDoThing: "an",
        done: false,
    },
    {
        id: 2,
        toDoThing: "ngu",
        done: false,
    },
];

const ToDoList = () => {
    const [toDoList, setToDoList] = useState(toDo);

    const [toDoNew, setToDoNew] = useState(null);

    const handleChange = (event) => {
        setToDoNew(event.target.value);
    };
    const handleClick = () => {
        // 👇 "message" stores input field value
        // setToDoList(...toDoList, { id: toDoList.length, toDoNew, done: false });
        if (toDoNew !== "" && toDoNew != null) {
            const a = { id: toDoList.length, toDoThing: toDoNew, done: false };
            setToDoList([...toDoList, a]);
        }
        console.log(toDoList);
    };
    const handleDelete = (id) => {
        const toDoListCopy = toDoList;
        toDoListCopy.splice(id, 1);
        setToDoList([...toDoListCopy]);
        console.log("file: ToDoList.js:38  handleDelete  toDoList", toDoList);

        // setToDoList(toDoListCopy.splice(id, 1));
        // console.log("file: ToDoList.js:41  handleDelete  toDoList", toDoList);
    };
    return (
        <div className="to-do-list">
            <div className="todo-input">
                <input
                    type="text"
                    className="to-do-thing"
                    value={toDoNew}
                    onChange={handleChange}
                />
                <button className="note-to-do-thing" onClick={handleClick}>
                    submit
                </button>
            </div>

            {toDoList.map((item, id) => (
                <div className="item" key={id}>
                    <div className="to-do-thing">{`${item.toDoThing}`}</div>
                    <div
                        className="delete-item"
                        onClick={() => handleDelete(id)}
                    >
                        x
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ToDoList;
