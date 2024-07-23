import React, { useEffect, useState } from 'react';
import { addlist } from './services/AlLapi';
import {  toast } from 'react-toastify';
import { getlist } from './services/AlLapi';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'
import { deletelist } from './services/AlLapi';
import { editlist } from './services/AlLapi';


function Todo() {
  const [ad, setAd] = useState({
    todolist: ""
  });
  const[g,setg]=useState('')
 
  const[gd,setgd]=useState([])

  

  const add = async (e) => {
    e.preventDefault(); 
    const {todolist} = ad
    if(!todolist) 
      {

      toast.info("Error adding to list")
       
    } 
    else  {
      const res = await addlist(ad);
      console.log(res);
      setAd({todolist:""})
      setg(res)
     ll.value=''
      if(res.status === 201)
      toast.success('list added successfully')
    }
  };

    const getData=async()=>{
    
      const get =await getlist()
      setgd(get.data)
    }
     
     useEffect(()=>{getData()},[g])
 
     const dltlist=async(id)=>{


      const res = await deletelist(id)
      console.log(res);
      getData()
      if(res.status == 200)
      {
        toast.success('successfully deleted')
      }
     }
  
      const edit=async(id,data)=>{

        const res = await editlist(id,data)
        console.log(res.data.todolist=6);
      }
  return (
    <div>
      <h1 className='text-info'><b>TODO LIST</b></h1>
      <form >
       <div className='d-flex container w-50 mt-5 '>
         <div className='w-75'>
            <input className='form-control shadow-lg rounded p-3' id='ll' placeholder='Add Anything'
              type="text"
              onChange={(e) => setAd({ ...ad, todolist: e.target.value })}
            />
         </div>
        <div className='w-25'>  <button type="submit" className='form-control btn btn-info rounded ms-2 ' onClick={add}>Add</button></div>
       </div>
      </form>
      <div>
      
      

        <div  className='mt-5'>
{
   gd.map((item)=>(
      
<div className='mt-2 w-75 d-flex container justify-content-between p-3 bg-secondary rounded shadow-lg'> 
  <div className=''><p>{item.todolist}</p></div> 
<div className='d-flex justify-content-between  '>
<div><button className='btn btn-secondary' onClick={()=>{edit(item.id,item)}}><i className="fa-regular fa-pen-to-square" style={{color: "#010813",}} /></button></div>
 <div> <button className='btn btn-secondary ms-3' onClick={()=>{dltlist(item.id)}}><i className="fa-solid fa-trash " style={{color: '#f50f0f'}}></i> </button></div>
 
  </div>
  </div>
   ))
      }
       </div>
      </div>
    </div>
  );
}

export default Todo;