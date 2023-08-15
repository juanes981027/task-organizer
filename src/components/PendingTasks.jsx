import { GiCheckeredFlag } from 'react-icons/gi';
import '../App.css';
import { Card } from './Card';
export const PendingTasks = ({ tasks, toggleCheckBox, deleteTasks }) => {



    return <>
        {tasks.find(item=>item.status === false) ?
        tasks.filter(item=> item.status === false)
        .map(task =>
            
            <Card key={task.taskName} tasks={tasks} task={task} toggleCheckBox={toggleCheckBox} deleteTasks={deleteTasks}/>

        ) : <h4 className='no-tasks-text'> <GiCheckeredFlag className='svg-success'/> ¡Excelente! No tienes tareas pendientes</h4>}
    </>



}
