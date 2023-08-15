import { GrCircleInformation } from 'react-icons/gr';
import '../App.css';
import { Card } from './Card';

export const TaskList = ({ tasks, toggleCheckBox, deleteTasks }) => {



    return <>
    { tasks.length > 0  ?
    tasks.map(task => 
    
        <Card key={task.taskName} tasks={tasks}  task={task} toggleCheckBox={toggleCheckBox} deleteTasks={deleteTasks}/>
        
    ) : <h4 className='no-tasks-text'> <GrCircleInformation/> No tienes ninguna tarea creada. Haz click en el boton "Crear tarea" para agregar unas cuantas</h4> }
    </>



}
