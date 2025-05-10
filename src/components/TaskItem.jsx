const TaskItem = ({task, onToggleComplete, onDelete}) => {
    return (
        <li>
            <span style={{
            textDecoration: task.completed ? "line-through" : "none",
            marginRight: "10px"}}
            onClick={() => onToggleComplete(task.id)}
            >
                {task.text}
            </span>
            <button onClick={() => onDelete(task.id)}>Eliminar</button>
        </li>
    );
};
export default TaskItem;