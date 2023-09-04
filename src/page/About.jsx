export default function About() {
    return (
      <div id="about" className="text-black bg-white min-h-screen">
        <div className=" grid justify-center items-center">
        <div className=" bg-white w-[500px] h-64 border border-black mt-32 rounded-lg">
          <p className=" flex justify-center items-center">About me</p>
          <div className="flex justify-center items-center">
            <img src="pp.png" className=" w-24 h-24 rounded-full mt-2" />
          </div>
          <div className="grid justify-center items-center mt-3">
            <h1>Ananda Lukman Ramadhan</h1>
            <p className=" ml-5">Fullstack Developer</p>
            <p className=" flex justify-center items-center">Indonesia🇮🇩</p>

{/*Tombol Follow*/}
<div className="flex justify-center items-center mt-1">
            <button className="btn w-28 bg-white text-black hover:bg-blue-500">
  <a href="https://www.instagram.com/" className=" text-sm">Follow</a>
</button>
</div>
</div>

          </div>
        </div>
        
      </div>
    );
  }
  