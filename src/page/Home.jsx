import Navigasi from "../components/Navigasi";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div id="home" className="">
            <Navigasi/>
            <div className=" grid justify-center items-center">
                <div className=" font-bold text-6xl mt-16 text-black">
                <h1 className=" mt-16">Wellcome to</h1>
                <h1>my Portofolio</h1>
                </div>
                <p className=" text-sm text-black mt-2 text-lg">Trimakasih sudah mau berkunjung ke portofolio saya</p>
                <div className=" justify-center items-center flex">
                <button className=" border border-black w-28 rounded-xl text-black mt-6 hover:bg-blue-500 duration-200"><a href="#about">Lets Started</a></button>
                </div>
            </div>
            <div className=" w-full h-16 mt-40 border border-black">
                <div className=" flex justify-center items-center mt-4 text-black">
                <h1>Check all my project in <a href="https://github.com/Skyzoosky"><span>Github</span></a> </h1> 
                
                

  </div>
  </div>
        </div>
    )
}