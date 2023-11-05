import "./SideBar.css";
// import ToDoList from "../todolist/ToDoList";

const SideBar = ({ projectList, handleClickProject }) => {
    // const [myProject, setMyProject] = useState(projectList);

    // const [project, setProject] = useState(projectList[0]);
    return (
        <div className="side-bar">
            <div className="project-list">
                {projectList.map((item) => (
                    <div
                        className="project"
                        key={item.projectId}
                        onClick={() => handleClickProject(item.projectId)}
                    >
                        <h2>{`${item.projectName}`}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideBar;
