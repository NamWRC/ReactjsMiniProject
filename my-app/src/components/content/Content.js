import React from "react";
import ToDoList from "../todolist/ToDoList";
import "./Content.css";
import TicTacToe from "../tictactoe/TicTacToe";

const Content = ({ project }) => {
    const caseProject = (project) => {
        switch (project.projectName) {
            case "To Do List":
                return <ToDoList></ToDoList>;
            case "Tic Tac Toe":
                return <TicTacToe></TicTacToe>;

            default:
                console.log("something went wrong");
        }
    };
    return <div className="main-content">{caseProject(project)}</div>;
};

export default Content;
