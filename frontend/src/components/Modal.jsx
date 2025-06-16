import React from 'react'

const Modal = () => {
  return (
    <div className='w-full h-screen bg-opacity-50 bg-black fixed inset-0 z-50 flex items-center justify-center'>
        <div className='bg-white w-1/3 p-2 rounded-md'>
        <h1>YORUM YAZ</h1>
            <div>
                <input type="text" placeholder='User' />
                <input type="text" placeholder='Title' />
                <input type="text" placeholder='Description' />
            </div>
            <div>Paylaş</div>
        </div>
    </div>
  )
}

export default Modal