import { Card } from './Card';
import '../App.css';
import {GrCircleInformation} from "react-icons/gr";
export const DoneTasks = ({ tasks, toggleCheckBox, deleteTasks }) => {


    return <>
        { tasks.length > 0 ?
        tasks.filter(item=> item.status === true)
        .map(task =>

            <Card key={task.taskName} tasks={tasks} task={task} toggleCheckBox={toggleCheckBox} deleteTasks={deleteTasks}/>
        ) : <h4 className='no-tasks-text'> <GrCircleInformation/>Parece que no tienes tareas hechas aun, o no has creado ninguna tarea</h4>}
    </>



}
