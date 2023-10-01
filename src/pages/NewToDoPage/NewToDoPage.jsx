import styles from './NewToDoPage.module.css'
// import axios from 'axios'
import * as todoAPI from '../../utilities/todo-api'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewToDoPage(props) {
    const [formData, setFormData] = useState({
        task: '',
        dueDate: '',
        completed: false
    });
    const navigate = useNavigate()


    const handleChange = (event) => {

        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault()

        // axios
        //     .post('http://localhost:5173/api/todo/new', formData)
        //     .then((res) => {
        //         setFormData({
        //             task: '',
        //             dueBy: '',
        //             completed: ''
        //         });

        //         navigate('/todo/new');
        //     })
        //     .catch((err) => {
        //         console.log("Todo creation failed")
        //     })

        try {
            const newToDo = await todoAPI.addNewToDo(formData)
            console.log(newToDo)
            // alert("Task created!")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div className={styles.about}>
                <h1 id="welcome">Welcome to your to-do list! Increase your productivity by logging your tasks! </h1>
                <form onSubmit={handleSubmit}>
                    {/* <label>Task</label> */}

                    Task: <input type="textarea" name="task" onChange={handleChange} /> <br />

                    {/* <label>Due By</label> */}
                    Due By: <input type="date" name="dueDate" onChange={handleChange} /> <br />

                    {/* <label>Completed?</label> */}
                    Completed? <input type="checkbox" name="completed" onChange={handleChange} /> <br />

                    <input type="submit" value="Submit form" />

                </form>
            </div>
        </div>
    );
}

export default NewToDoPage