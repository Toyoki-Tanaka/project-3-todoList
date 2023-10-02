import { useState, useEffect } from 'react'
import * as todoAPI from '../../utilities/todo-api'
import { Link } from 'react-router-dom'
import styles from './ToDoList.module.css'

function ToDoList() {

    const [toDoList, setToDoList] = useState([])

    const [toDoDeleted, setToDoDeleted] = useState(false)
    // useEffect(async () => {
    //     try {
    //         const result = await todoAPI.showToDo()
    //         setToDoList(result)
    //         console.log(result)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }, [])

    useEffect(() => {
        async function fetchToDoList() {
            try {
                const result = await todoAPI.showToDo()
                setToDoList(result)
            } catch (err) {
                console.log(err)
            }
        }
        fetchToDoList()
    }, [toDoDeleted])

    const handleDelete = async (id) => {

        try {
            const deleteButton = await todoAPI.deleteToDo(id)
            setToDoDeleted(!toDoDeleted)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        toDoList.map((todo, i) => {
            return (
                <div key={i} id="tasks">
                    <p>Task: {todo.task}</p>
                    <p>Completed: {todo.completed.toString().charAt(0).toUpperCase() + todo.completed.toString().slice(1)}</p>
                    <p>Due Date: {todo.dueDate.split('T00:00:00.000Z')}</p>
                    <Link to={`${todo._id}/edit`}><button>Edit Task</button></Link>
                    <button onClick={() => {
                        handleDelete(todo._id)
                    }}>Delete Task</button>
                </div >
            )
        })

    )

}

export default ToDoList