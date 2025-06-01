import React from 'react'

const auth = () => {
  return (
    <div className='w-full h-screen bg-gray-200 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50' >
        <div className='w-1/3 bg-white p-3'>
            <h1>BLOG TIME</h1>
            <div className='fşex fşex-col space-y-4 my-4' >
                <input type="text" placeholder='Username' className='input-style' />
                <input type="text" placeholder='Email' className='input-style' />
                <input type="text" placeholder='Password' className='input-style' />
            </div>
            <div className='cursor-pointer hover:bg-lime-600 w-full p-3 text-center text-white rounded-md bg-lime-400' >Kayıt Ol</div>
        </div>
    </div>
  )
}

export default auth