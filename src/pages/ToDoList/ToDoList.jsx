import { useState, useEffect } from 'react'
import * as todoAPI from '../../utilities/todo-api'
// import NewToDoPage from '../NewToDoPage/NewToDoPage'

function ToDoList() {

    const [toDoList, setToDoList] = useState([])

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
    }, [])

    return (
        toDoList.map((todo, i) => {
            return (
                <div key={i}>
                    <p>Task: {todo.task}</p>
                    <p>Completed: {todo.completed.toString()}</p>
                    <p>Due Date: {todo.dueDate}</p>
                    <a href={`/${todo._id}`}><button>Edit button</button></a>
                </div >
            )
        })

    )

}

export default ToDoList