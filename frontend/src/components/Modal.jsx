import { useState } from "react"


const Modal = () => {
    const [postData, setPostData] = useState({
        user:"",
        title:"",
        description:""
    })
    const onChangeFunc = (e) => {
        setPostData({...postData, [e.target.name] : e.target.value})
    }
  return (
    <div className='w-full h-screen bg-opacity-50 bg-black fixed inset-0 z-50 flex items-center justify-center'>
        <div className='bg-white w-1/3 p-2 rounded-md'>
        <h1 className='font-bold text-2xl'>YORUM YAZ</h1>
            <div className='my-4 flex-col space-y-3'>
                <input value={postData.user} name="user" onChange={onChangeFunc} className='input-style' type="text" placeholder='User' />
                <input value={postData.title} name="title" onChange={onChangeFunc} className='input-style' type="text" placeholder='Title' />
                <input value={postData.description} name="description" onChange={onChangeFunc} className='input-style' type="text" placeholder='Description' />
            </div>
            <div className='w-full p-2 text-center bg-lime-500 text-white cursor-pointer hover:bg-lime-600'>Paylaş</div>
        </div>
    </div>
  )
}

export default Modal