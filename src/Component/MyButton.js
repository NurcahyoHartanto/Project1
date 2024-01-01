import React from "react";
import { useNavigate} from "react-router-dom";


const MyButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = ()=>{
    navigate("/produk")
  };
  return (
        <button
        className="left-56 top-52 absolute z-10  border-2 border-black border-solid py-2.5 px-5 cursor-pointer transition ease-out duration-300 rounded-lg bg-red-600 text-white 
        sm:left-64 sm:cursor-pointer sm:top-60 sm:bg-red-600 sm:text-white
        md:cursor-pointer md:left-80 md:ml-6 md:top-72 md:bg-red-600 md:text-white
        lg:top-96 lg:bg-transparent lg:left-96 lg:ml-16 lg:hover:bg-red-600 lg:hover:text-white
        xl:left-80 xl:ml-64 xl:hover:bg-red-600 xl:hover:text-white
        2xl:left-80 2xl:ml-96 2xl:top-80 2xl:hover:bg-red-600 2xl:hover:text-white" onClick={handleButtonClick}
        >
          Get Started
        </button>
        );
};

export default MyButton;
