import React from 'react'

function SectionTitle({title}) {
  return (
    <div className='flex gap-10 items-center py-10 sm:flex-col sm:gap-3'>
        <h1 className="text-3xl text-secondary dark:text-dark-secondary">{title}</h1>
        <div className='w-60 h-[1px] bg-tertiary dark:bg-dark-tertiary sm:w-40'>

        </div>
    </div>
  )
}

export default SectionTitle