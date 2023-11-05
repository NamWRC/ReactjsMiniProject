import { useState } from "react";
import "./App.css";
import Content from "./components/content/Content";
import SideBar from "./components/sidebar/SideBar";

const projectList = [
    {
        projectId: 0,
        projectName: "To Do List",
    },
    {
        projectId: 1,
        projectName: "Tic Tac Toe",
    },
];

function App() {
    // const [myProject, setMyProject] = useState(projectList);
    const [project, setProject] = useState(projectList[0]);

    const handleClickProject = (id) => {
        setProject(projectList[id]);
        console.log(project);
    };
    return (
        <div className="App">
            <div className="main-page">
                <SideBar
                    projectList={projectList}
                    handleClickProject={handleClickProject}
                ></SideBar>
                <Content project={project}></Content>
            </div>
        </div>
    );
}

export default App;
