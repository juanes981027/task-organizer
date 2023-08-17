import { useState } from 'react';
import './App.css';
import { CreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';
import { useEffect } from 'react';
import Header from './components/Header';
import AsideOptions from './components/AsideOptions';
import Swal from 'sweetalert2'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { PendingTasks } from './components/PendingTasks';
import { DoneTasks } from './components/DoneTasks';
import { NotFoundPage } from './components/NotFound';

function App() {

  const [tasks, setTasks] = useState([])
  const newTask = (data) => {

    if (!tasks.find((item) => item.taskName === data)) {
      setTasks([...tasks, { taskName: data, status: false }])
      Swal.fire({
        icon: 'success',
        title: 'Tarea creada!',
        // showConfirmButton: false,
        // timer: 1000
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
            <Route path='/' element={<Navigate replace to='/all-tasks'/>}/>
            <Route path='/all-tasks' element={<TaskList toggleCheckBox={toggleCheckBox} tasks={tasks} deleteTasks={deleteTasks} />} />
            <Route path='/pending-tasks' element={<PendingTasks toggleCheckBox={toggleCheckBox} tasks={tasks} deleteTasks={deleteTasks} />} />
            <Route path='/done-tasks' element={<DoneTasks toggleCheckBox={toggleCheckBox} tasks={tasks} deleteTasks={deleteTasks} />} />
            <Route path='*' element={<NotFoundPage/>} />
          </Routes>
          <CreateTask newTask={newTask} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
