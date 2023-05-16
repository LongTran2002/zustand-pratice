import { useStore } from "./../store"
import "./Column.sass"
import Task from "./Task1"


export default function Column({ state }) {
    const addTask = useStore(store => store.addTask)
    const tasks = useStore(store => 
        store.tasks.filter(task=>task.state === state))
        console.log(tasks);
    return <div className="column">
        <div className="titleWrapper">
            <p>{state}</p>
            <button onClick={()=>{addTask("dfddsf"+state, state)}}>Add</button>
        </div>
        {tasks.map(task => <Task title={task.title} key={task.title} />)}
    </div>
}