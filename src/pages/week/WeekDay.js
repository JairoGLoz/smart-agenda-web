import './WeekDay.css'
import Task from "../../components/Task";

// Todo: current day should appear highlighted
// Todo: past days should appear somehow disabled
// Todo: future days should appear "normal"
// Todo: add a "+" button to add a new task

export default function WeekDay({day}) {
    return (
        <div className={"week-day"} >
            <div className={"date"}>{day.date}</div>
            <h3>{day.name}</h3>
            {day.tasks && day.tasks.map(task => (
                <Task key={task.id} task={task}/>
            ))}
        </div>
    )
}