import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'
import styles from './NavBar.module.css'
function NavBar(props) {

    const handleLogOut = () => {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
    }

    return (
        <div>
            <nav>
                {/* <h1>Welcome, {props.user.name}</h1>
            <Link to="/orders">Order History</Link>
            &nbsp; | {" "}
            <Link to="/orders/new">New Order</Link>
            <br />
            <Link to="" onClick={handleLogOut}>Log out</Link> */}

                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/todo/new">New List</Link>
                    <li>New Task</li>
                    <li>View Tasks</li>
                    <Link to="" onClick={handleLogOut}>Log out</Link>
                </ul>

                <h1>Welcome, {props.user.name}</h1>
            </nav>
        </div>
    )
}

export default NavBar