import { useState } from "react"
import { VscAdd } from "react-icons/vsc";
import CreateTaskDialog from "./CreateTaskDialog";

export let CreateTask = ({ newTask }) => {

    const [open, setOpen] = useState(false);

    const toggleModal = () => {
        setOpen(!open);
    };

    return <>

        <button className="btn btn-primary" onClick={e=>(toggleModal(e.currentTarget.blur()))}> <VscAdd /> Agregar Tarea</button>
        <CreateTaskDialog toggleModal={toggleModal} open={open} setOpen={setOpen} newTask={newTask} />
    </>

}
