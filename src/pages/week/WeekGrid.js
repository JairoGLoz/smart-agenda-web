import './WeekGrid.css'
import WeekDay from "./WeekDay";


const days = [
    {
        name: "Sunday",
        date: "16/oct",
        tasks:[
            {id: 1, title:"clean kitchen"},
            {id: 2,title:"eat"},
            {id: 99,title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar non nisl nec lobortis. Suspendisse velit felis, rutrum eu odio eu, venenatis vulputate purus. Ut vulputate sollicitudin nisi, in fermentum nunc congue eu. Pellentesque nisl ex, faucibus nec enim sit amet, blandit condimentum elit. Donec sit amet dolor quis elit varius semper. Nulla porttitor iaculis ornare. Phasellus arcu nibh, euismod ac mauris eget, dapibus aliquam ipsum. Curabitur luctus ligula nec sem sagittis bibendum. Aliquam at elit odio. Morbi finibus eget tortor a suscipit. Morbi justo odio, ornare non nisl at, blandit ullamcorper mauris. Aliquam erat volutpat.\n" +
                    "\n" +
                    "Nullam malesuada dolor mi, ut porttitor lectus hendrerit et. Nulla a pretium magna. Cras ac ullamcorper mi. In viverra dui vel feugiat posuere. Mauris ut nulla at ex malesuada mattis. Quisque eleifend nisi vitae massa dignissim consequat. Quisque rutrum placerat augue, ac varius tortor pretium a.\n" +
                    "\n" +
                    "Quisque dapibus tortor nec rutrum venenatis. Fusce sit amet orci et mi porttitor pharetra. Etiam tristique nisl auctor vulputate dignissim. Integer libero mauris, sodales a urna at, lobortis porta diam. Aliquam erat volutpat. Sed massa nisi, malesuada sed posuere sed, porta at orci. Pellentesque porttitor mauris quis sapien condimentum vestibulum. Donec faucibus, dui non fringilla iaculis, neque augue porta libero, et molestie est eros nec velit. Ut tristique nisl libero, et tincidunt ipsum hendrerit eget. Sed aliquet neque quis elementum accumsan. Ut eleifend lacus eu luctus feugiat. Curabitur gravida porttitor sem in maximus. Nulla at maximus lorem. Aliquam ullamcorper pharetra venenatis."}
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