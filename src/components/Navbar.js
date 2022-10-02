import {Link} from 'react-router-dom'
import {useLogout} from "../hooks/useLogout";
import {useAuthContext} from "../hooks/useAuthContext";

// styles & images
import './Navbar.css'
import Hive from '../assets/hive.svg'

export default function Navbar() {

    const {user} = useAuthContext();

    const {logout, isPending} = useLogout()

    return (
        <div className="navbar">
            <ul>
                <li className="logo">
                    <img src={Hive} alt="hive logo"/>
                    <span>BeeBee Life</span>
                </li>

                {!user && (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>
                )}

                {user && <li>
                    {!isPending && <button className="btn" onClick={logout}>Logout</button>}
                    {isPending && <button className="btn" disabled>Logging out...</button>}
                </li>}

            </ul>
        </div>
    )
}