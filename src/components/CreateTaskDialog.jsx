import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useEffect } from 'react';

export default function FormDialog({toggleModal, open, setOpen, newTask}) {

  const [task, setTask] = useState('')

  const createNewTask=()=>{
    newTask(task) 
    setOpen(!open);
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      createNewTask()
    }
  };

  useEffect(()=>{
    console.log(open)
  },[open])

  return (
    <div>
      <Dialog className='create-task-dialog' open={open} onClose={toggleModal}>
        <DialogTitle>Crear nueva tarea</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            onChange={e=>setTask(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete='off'
            margin="dense"
            id="name"
            label="Nombre de tarea"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleModal}>Cancelar</Button>
          <Button  onClick={createNewTask}>Guardar tarea</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
