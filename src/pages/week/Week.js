import './Week.css'
import RolesTasks from "./RolesTasks";
import WeekGrid from "./WeekGrid";

export default function Week() {

    return (
        <div className={"week"}>
            <RolesTasks/>
            <WeekGrid/>
        </div>
    )
}