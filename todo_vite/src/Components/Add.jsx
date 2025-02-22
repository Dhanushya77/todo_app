import { useState } from "react";
import axios from 'axios'

function Add() {
    const [Task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/todo/',{Task,description}).then((res)=>{
            setTask('')
            setDescription('')
        }).catch(error=>console.log(error.message))
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="Task" id="task" value={Task} onChange={(e)=>setTask(e.target.value)} />
            <input type="text" name="description" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
            <input type="submit" value="Add" />
        </form>
    )
}
export default Add