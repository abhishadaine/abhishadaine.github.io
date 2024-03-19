import React from 'react'

function Intro() {
  return (
    <div className='h-[100vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
      <h1 className='text-white'>Hi, I am</h1>
      <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>Abhisha Daine</h1>
      <h1 className='text-3xl sm:text-xl text-[#c7fff9c1]  font-semibold'>A passionate Software Developer on a journey to explore and innovate in the world of technology.</h1>

      <p className='text-white w-3/4'> 
      Programming is 10% writing code and 90% figuring out why it's not working.</p>

      <button onClick={() => window.open("https://drive.google.com/file/d/1Wr11pihsB8kybh6YNLjYQPRc0FSbNmPW/view?usp=sharing")} className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>
        View Resume
      </button>
    </div>
  )
}

export default Intro
