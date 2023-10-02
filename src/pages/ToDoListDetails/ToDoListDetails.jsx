import * as todoAPI from '../../utilities/todo-api'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ToDoListDetails(props) {
    const [listDetails, setListDetails] = useState({
        task: '',
        dueDate: '',
        completed: false
    });



    const handleChange = (event) => {

        setListDetails({ ...listDetails, [event.target.name]: event.target.value });
    };

    const { id } = useParams();

    const [prevData, setPrevData] = useState(null)



    useEffect(() => {
        async function fetchSingleToDo(toDoID) {
            try {
                const singleToDo = await todoAPI.showIndividualToDo(toDoID)
                setPrevData(singleToDo)
            } catch (err) {
                console.log(err)
            }
        }
        fetchSingleToDo(id)
    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const toDoDetails = await todoAPI.editToDo(id, listDetails)
            console.log(toDoDetails)
            alert("Task updated")
        } catch (err) {
            console.log(err)
            console.log(listDetails)
            console.log(id)
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    {/* <label>Task</label> */}
                    Task:<input type="textarea" name="task" onChange={handleChange} /> <br />

                    {/* <label>Due Date</label> */}
                    Due Date:<input type="date" name="dueDate" onChange={handleChange} /> <br />

                    {/* <label>Completed?</label> */}
                    Completed?<input type="checkbox" name="completed" onClick={() => {
                        setListDetails({ ...listDetails, completed: !listDetails.completed })
                    }} /> <br />

                    <input type="submit" value="Update todo" />

                </form>
            </div>
        </div >
    );
}

export default ToDoListDetails  