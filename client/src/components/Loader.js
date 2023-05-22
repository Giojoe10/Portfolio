import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center inset-0 bg-primary z-[10000]'>
        <div className="flex gap-5 text-7xl font-semibold sm:text-3sl">
            <h1 className="text-secondary g">G</h1>
            <h1 className="text-white m">M</h1>
            <h1 className="text-tertiary b">B</h1>
        </div>
    </div>
  )
}

export default Loader