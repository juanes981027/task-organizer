import { useState } from "react"
import { VscAdd } from "react-icons/vsc";
import CreateTaskDialog from "./CreateTaskDialog";

export let CreateTask = ({ newTask }) => {

    const [open, setOpen] = useState(false);

    const toggleModal = () => {
        setOpen(!open);
      };

    // const handleClickOpen = () => {
    //   setOpen(true);
    // };
    // const handleClose = () => {
    //     setOpen(false);
    //     console.log("me usaron", open)
    // };

    // const CreateNewTask = () => {
    //     handleClickOpen()
    // }


    return <>

        <button className="btn btn-primary" onClick={toggleModal}> <VscAdd /> Agregar Tarea</button>
        <CreateTaskDialog toggleModal={toggleModal} open={open} setOpen={setOpen} newTask={newTask} />

    </>

}
