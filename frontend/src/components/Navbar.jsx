import { CiLogout } from "react-icons/ci";


const Navbar = () => {
    const logoutFunc = () => {
        localStorage.clear()
        window.location = "/auth"
    }
  return (
    <div className="h-20 bg-lime-500 flex items-center justify-between px-5">
        <div className="text-white font-bold text-2xl cursor-pointer">POST PAYLAŞ</div>
        <div className="flex items-center space-x-5">
            <input type="text" placeholder="Ara" className="p-2 outline-none rounded-md" />
            <div className="w-36 border p-2 rounded-md text-center text-white cursor-pointer hover:bg-lime-600" >Post Oluştur</div>
            <CiLogout onClick={logoutFunc} size={25} className="text-white cursor-pointer" />
        </div>
    </div>
  )
}

export default Navbar