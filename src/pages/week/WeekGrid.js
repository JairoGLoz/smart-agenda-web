import './WeekGrid.css'
import WeekDay from "./WeekDay";


const days = [
    {
        name: "Sunday",
        date: "16/oct",
        tasks:[
            {id: 1, title:"clean kitchen"},
            {id: 2,title:"walk dog"}
        ]
    },
    {
        name: "Monday",
        date: "17/oct",
        tasks:[
            {id: 3,title:"buy groceries"}
        ]
    },
    {
        name: "Tuesday",
        date: "18/oct"
    },
    {
        name: "Wednesday",
        date: "19/oct",
        tasks:[
            {id: 9, title:"task with a really long title... I mean, really long title"}
        ]
    },
    {
        name: "Thursday",
        date: "20/oct"
    },
    {
        name: "Friday",
        date: "21/oct"
    },
    {
        name: "Saturday",
        date: "22/oct",
        tasks:[
            {id: 11, title:"go to movies"},
            {id: 12,title:"clean back yard"}
        ]
    },
]

export default function WeekGrid() {

    return (
        <div className={"week-grid"}>
            {
                days.map(day => (
                    <WeekDay key={day.date} day={day}/>
                ))
            }
        </div>
    )
}