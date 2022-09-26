import React from "react";
import DropDown from "./dropDown";
import Calendary from "./calendary";
const NavBar = () => {
    const reiniciar =() =>{
        window.location.reload();
    }
    return (
        <nav style={{ "width": "100rem" ,"position" : "fixed" , "top" : "0" }} className="bg-red-400  border-gray-200 px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <button href="#" className="flex items-center" onClick={reiniciar}>
                    <img src="http://larutadelplacer.ec/wp-content/uploads/2019/09/logo-small.png" className="mr-3 h-12 " alt="Extasis Logo" />
                </button>
                <p className="text-white text-2xl">HOTEL</p>
                <div>
                    <DropDown />
                </div>
                <p className="text-white text-2xl">CALENDARIO</p>
                <div className="w-56 ">
                    <Calendary />
                </div>
                <div >
                    <span className=" text-3xl font-semibold whitespace-nowrap dark:text-white text-black">PÁGINA DE RESERVA DE MOTELES EXTASIS</span>
                </div>

            </div>
        </nav>
    )
}
export default NavBar;