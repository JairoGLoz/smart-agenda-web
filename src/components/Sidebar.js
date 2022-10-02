import {NavLink} from 'react-router-dom'
import {useAuthContext} from "../hooks/useAuthContext";

// styles & images
import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'
import Avatar from "./Avatar";

export default function Sidebar() {

    const {user} = useAuthContext();

    return(
        <div className={"sidebar"}>
            <div className={"sidebar-content"}>
                <div className={"user"}>
                    <Avatar imgSrc={user.photoURL}/>
                    <p>Hey {user.displayName}</p>
                </div>
                <nav className={"links"}>
                    <ul>
                        <li>
                            <NavLink exact to={"/week"}>
                                <img src={DashboardIcon} alt={"dashboard icon"}/>
                                <span>My Week</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/create"}>
                                <img src={AddIcon} alt={"add project icon"}/>
                                <span>New Task</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}