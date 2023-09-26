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
                    <li>Home</li>
                    <li>New Task</li>
                    <li>View Tasks</li>
                    <Link to="" onClick={handleLogOut}>Log out</Link>
                </ul>
            </nav>
            <h1>Welcome, {props.user.name}</h1>
            <div className={styles.about}>
                <h1>Welcome to your to-do list! Increase your productivity by logging your tasks! </h1>
            </div>
        </div>
    )
}

export default NavBar