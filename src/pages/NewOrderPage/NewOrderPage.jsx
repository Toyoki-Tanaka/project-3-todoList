import styles from './NewOrderPage.module.css'
import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

function NewToDoPage(props) {
    // <div>
    //     <div className={styles.about}>
    //         <h1>Welcome to your to-do list! Increase your productivity by logging your tasks! </h1>
    //         <form>
    //             Task: <input type="textarea" name="task" /> <br />
    //             Due By: <input type="date" name="dueby" /> <br />
    //             Completed?: <input type="checkbox" name="completed" /> <br />
    //             <input type="submit" value="Submit form" />
    //         </form>
    //     </div>
    // </div>
    const [formData, setFormData] = useState({
        task: '',
        dueBy: '',
        completed: false
    });

    const handleChange = (event) => {

        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        const toDo = { task, dueBy, completed }
    };

    return (
        <div>
            <div className={styles.about}>
                <h1>Welcome to your to-do list! Increase your productivity by logging your tasks! </h1>
                <form>
                    Task: <input type="textarea" name="task" /> <br />
                    Due By: <input type="date" name="dueby" /> <br />
                    Completed?: <input type="checkbox" name="completed" /> <br />
                    <input type="submit" value="Submit form" />
                </form>
            </div>
        </div>
    );
}

export default NewToDoPage