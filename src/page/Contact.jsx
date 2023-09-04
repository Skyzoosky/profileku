import Footer from "../components/Footer";

export default function Contact(){
    return(
        <div id="contact" className=" bg-white min-h-screen">
            <div className="grid justify-center items-center">
                <div className=" mt-40">
                    <h1 className=" text-5xl text-black">My Contact</h1>
                    <div className="flex justify-center items-center mt-6">
                    <img src="wa.png" className=" mt-2 w-32 h-32" id="wa" />

                    </div>
                   

                </div>

            </div>

            <Footer/>

        </div>
    )
}