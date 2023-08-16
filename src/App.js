import { useState } from 'react';
import './App.css';
import { CreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';
import { useEffect } from 'react';
import Header from './components/Header';
import AsideOptions from './components/AsideOptions';
import Swal from 'sweetalert2'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { PendingTasks } from './components/PendingTasks';
import { DoneTasks } from './components/DoneTasks';

function App() {
  
  const [tasks, setTasks] = useState([])
  const newTask = (data) => {

    if(data){
      if (!tasks.find((item) => item.taskName === data)) {
        setTasks([...tasks, { taskName: data, status: false }])
        Swal.fire({
          icon: 'success',
          title: 'Tarea creada!',
        })
      }
      else {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'La tarea ya existe',
        })
      }

    }
    else{
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Debes ingresar el nombre de la tarea',
      })
    }
    
  }

  const toggleCheckBox = (task) => {
    setTasks(
      tasks.map(t => t.taskName === task.taskName ? { ...t, status: !task.status } : t)
    )
  }
  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTasks(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const deleteTasks = (filteredData) => {
    setTasks(filteredData)
  }

  return (
    <BrowserRouter>
      <div className="contenedor">
        <aside className='col-3 aside'>
          <AsideOptions tasks={tasks} />
        </aside>
        <main className='col-9 main'>
          <Header className="mb-5" />
          <Routes>
            <Route path='/all-tasks' element={<TaskList toggleCheckBox={toggleCheckBox} tasks={tasks} deleteTasks={deleteTasks} />} />
            <Route path='/pending-tasks' element={<PendingTasks toggleCheckBox={toggleCheckBox} tasks={tasks} deleteTasks={deleteTasks} />} />
            <Route path='/done-tasks' element={<DoneTasks toggleCheckBox={toggleCheckBox} tasks={tasks} deleteTasks={deleteTasks} />} />
          </Routes>
          <CreateTask newTask={newTask} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
