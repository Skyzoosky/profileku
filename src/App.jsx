import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Project from "./page/Project";
import Tech from "./page/Tech";

export default function App(){
  return(
  //div utama
    <div className=" bg-white min-h-screen">
      <div className="home">
      <Home/>
      </div>

<div>
<About/>
</div>

<div>
<Tech/>
</div>

<div>
  <Project/>
</div>

<div>
  <Contact/>
</div>

 

    </div>
  )
} 