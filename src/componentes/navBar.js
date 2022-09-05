import React from "react";

const NavBar = () => {
    return (
        <nav className="bg-red-600 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container  items-center mx-auto">
                    <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white text-white">PÁGINA DE RESERVA DE MOTELES EXTASIS</span>
                <div className=" hidden w-full md:block md:w-auto" id="navbar-default">     
                </div>
            </div>
        </nav>
    )
}
export default NavBar;