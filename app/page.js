"use client"
import React, { useState } from 'react'
const page = () => {
  const [title, settitle] = useState("")
  const [descs, setdescs] = useState("")
  const [mainTask, setmainTask] = useState([])
  const SubmitHandler = (e)=>{
  e.preventDefault()//this is used to stop the form from submission, it is an inbuilt tag used
  setmainTask([...mainTask, {title, descs}]);
  settitle("")
  setdescs("")
  console.log(mainTask)

  };
  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)

  }
// renderTask is used to showcase the task which
  let renderTask = <h2>
    No Task Available
  </h2>
if (mainTask.length>0) {
   renderTask = mainTask.map((t,i)=>{

return <li key={i} className='flex items-center justify-between'>
  <div className='flex justify-between mb-5 w-2/3'>
  <h5 className='text-2xl font-semibold text-black
  '>
    {t.title}
  </h5>
  <h6 className='text-lg font-semibold text-black
  '>
    {t.descs}
  </h6>
</div>
<button onClick = {()=>{
  deleteHandler(i)
}}className='bg-red-600 text-white px-2 py-1 border-r-2 text-base font-bold rounded-xl m-3'>
  Delete
</button>
  </li>
  })
}
 
  // har baar jo object aa raha hai wo t hai use target kiya hai aur uske saath jo index aa raha hai wo i hai

  return (
   <>
          <h1 className=" bg-black text-4xl font-bold text-center text-white">
            Aashi's Todo List
          </h1>
          <form onSubmit={SubmitHandler}>
          <input
              type="text"
              placeholder="Enter Title Here"
              className='text-2xl border-zinc-800 border-3 m-5 px-4 py-2'
              value={title}
              onChange={(e)=>{
              settitle(e.target.value)
              }}
            />

            <input
              type="text"
              placeholder="Enter Description here..."
              className='text-2xl border-zinc-800 border-3 m-5 px-4 py-2'
              value={descs}
              onChange={(e)=>{
              setdescs(e.target.value)
              }}
            />

            <button className='bg-black text-white px-2 py-1 border-r-2 text-base font-bold rounded-xl m-3'>
             Add Task
            </button>
            </form>
            <hr />
            <div className='p-4 bg-amber-200'>
              <ul className='text-bold font-black text-2xl'>{renderTask}</ul>
            </div>

            </>
  )
}

export default page