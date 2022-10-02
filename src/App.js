import './App.css'
import {useAuthContext} from "./hooks/useAuthContext";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Week from "./pages/week/Week";

function App() {

    const {user, authIsReady} = useAuthContext();

    return (
        <div className="App">
            {authIsReady && (
                <BrowserRouter>
                    {user && <Sidebar/>}
                    <div className="container">
                        <Navbar/>
                        <Switch>
                            <Route path="/week">
                                {!user && <Redirect to={"/login"}/>}
                                {user && <Week/>}
                            </Route>
                            {/*<Route path="/create">
                  {!user && <Redirect to={"/login"}/>}
                  {user && <Create/>}
                </Route>*/}
                            <Route path="/login">
                                {user && <Redirect to={"/"}/>}
                                {!user && <Login/>}
                            </Route>
                            <Route path="/signup">
                                {user && <Redirect to={"/"}/>}
                                {!user && <Signup/>}
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            )}
        </div>
    );
}

export default App
