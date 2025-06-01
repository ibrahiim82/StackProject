import React, { useState } from 'react'

const Auth = () => {
    const [signUp, setSignUp] = useState(true)
  return (
    <div className='w-full h-screen bg-gray-200 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50' >
        <div className='w-1/3 bg-white p-3'>
            <h1 className='text-2xl text-lime-500 font-bold'>{signUp ? "KAYIT OL" : "GİRİŞ YAP"}</h1>
            <div className='flex flex-col space-y-4 my-4' >
                {signUp && <input type="text" placeholder='Username' className='input-style' />}
                <input type="text" placeholder='Email' className='input-style' />
                <input type="text" placeholder='Password' className='input-style' />
            </div>
            <div className='text-red-400 text-xs cursor-pointer mb-3' >
                {
                    signUp ? <span onClick={()=>setSignUp(false)}>Daha önce giriş yaptınız mı?</span> : <span onClick={()=>setSignUp(true)}>Kayıt olmak için tıklayınız</span>
                }
                
            </div>
            <div className='cursor-pointer hover:bg-lime-600 w-full p-3 text-center text-white rounded-md bg-lime-400' >{signUp ? "Kayıt Ol" : "Giriş Yap"}</div>
        </div>
    </div>
  )
}

export default Auth