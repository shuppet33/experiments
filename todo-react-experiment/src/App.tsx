import './App.css'
import {type TaskType, TodoList} from "./components/TodoList.tsx";
import {useState} from "react";

const initTasks: TaskType[] = [
    {id: 1, title: 'CSS', isDone: true},
    {id: 2, title: 'JS', isDone: true},
    {id: 3, title: 'React', isDone: false},
]


function App() {

    const [tasks, setTasks] = useState(initTasks)

    function removeTask(id: number) {
        setTasks(tasks.filter(item => item.id !== id))
    }

    return (
        <div className='App'>
            <TodoList
                title={'What to learn'}
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    )
}

export default App


