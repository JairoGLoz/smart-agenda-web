import './Task.css'

// Todo: when checked it should change the style to be kind of disabled
// Todo: dragging them to a different day should change the task date
// Todo: task background should have the color of the role
// Todo: some tasks will include a time that must be shown

export default function Task({task}) {
    return (
        <div className={"task"}>
            <span>{task.title}</span>
            <input className={"done"}
                type={"checkbox"}
            />
        </div>
    )
}