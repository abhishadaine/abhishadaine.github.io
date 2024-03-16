import React from 'react'

function SectionTitle({title}) {
  return (
    <div className='flex items-center mt-40 mb-10'> 
      <h1 className='text-3xl text-secondary mr-5'>{title}</h1>
      <div className='w-80 h-[1px] bg-tertiary'> </div>
    </div>
  )
}

export default SectionTitle
