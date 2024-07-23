import { useState } from 'react'
import './App.css'
import Todo from './Todo'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
 

  return (
    <div>
      <Todo/>
      <ToastContainer />
    </div>
  )
}

export default App
