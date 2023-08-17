import Swal from 'sweetalert2';
import '../App.css';
import { VscTrash } from "react-icons/vsc";

export const Card = ({ task, toggleCheckBox, deleteTasks, tasks }) => {

    const deleteTask = (taskName) => {
        Swal.fire({
            title: 'Seguro que desea eliminar esta tarea?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Eliminar',
          }).then((result) => {
            if (result.isConfirmed) {
                let filteredTasks = tasks.filter(task => task.taskName !== taskName)
                deleteTasks(filteredTasks)
                Swal.fire('Tarea eliminada!', '', 'success')
            }
          })
        
        

    }   

    const { taskName, status} = task

    return <>

        <div className="card" key={taskName}>
            <input type="checkbox" className='card-radio' onChange={() => toggleCheckBox(task)} defaultChecked={status} />
            <div className={status ? 'card-body card-body-done' : "card-body"}>
                {taskName}
            </div>
            <p className='task-status'>{status ? "Hecho" : "Pendiente"}</p>
            <VscTrash className='trash-can-icon' onClick={() =>  deleteTask(taskName) } />
        </div>

    </>



}
