const TaskItem = ({task, onToggleComplete, onDelete}) => {
    return (
        <li>
            <span style={{
            textDecoration: task.completed ? "line-through" : "none",
            marginRight: "10px"}}            
            >
                {task.text}
            </span>
            <button onClick={() => onToggleComplete(task.id)}>
                {task.completed ? "Deshacer" : "Realizado"}
            </button>
            <button onClick={() => onDelete(task.id)}>Eliminar</button>
        </li>
    );
};
export default TaskItem;