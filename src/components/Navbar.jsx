import { useState, useEffect } from "react";

import {
  FiMenu,
  FiX,
  FiArrowRight
} from "react-icons/fi";

import {
  motion,
  AnimatePresence
} from "framer-motion";

import {
  useNavigate,
  useLocation
} from "react-router-dom";

import logo from "../assets/images/logo.webp";


function Navbar() {


  const [open,setOpen] = useState(false);

  const [active,setActive] = useState("home");


  const navigate = useNavigate();

  const location = useLocation();



  const links = [

    {
      name:"Home",
      path:"home"
    },

    {
      name:"About",
      path:"about"
    },

    {
      name:"Services",
      path:"services"
    },

    {
      name:"Why Choose Us",
      path:"whychoose"
    },

    {
      name:"Contact",
      path:"contact"
    }

  ];





  useEffect(()=>{


    if(location.pathname !== "/") return;


    const handleScroll=()=>{


      const sections=[
        "home",
        "about",
        "services",
        "whychoose",
        "contact"
      ];


      const scrollPosition =
      window.scrollY + 250;



      sections.forEach((id)=>{


        const section =
        document.getElementById(id);



        if(section){


          const top =
          section.offsetTop;


          const height =
          section.offsetHeight;



          if(
            scrollPosition >= top &&
            scrollPosition < top + height
          ){

            setActive(id);

          }

        }


      });


    };



    window.addEventListener(
      "scroll",
      handleScroll
    );


    return ()=>{

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  },[location.pathname]);





  const handleNavigation=(id)=>{


    setOpen(false);


    if(location.pathname !== "/"){

      navigate(`/#${id}`);

    }
    else{

      document
      .getElementById(id)
      ?.scrollIntoView({
        behavior:"smooth"
      });

    }


  };






  return (

<header

className="
fixed
top-0
left-0
w-full
z-[100]
bg-[#123524]/95
backdrop-blur-md
shadow-xl
"

>


<motion.nav


className="
max-w-[1400px]
mx-auto
px-6
lg:px-14
py-6
flex
items-center
justify-between
"

>


{/* LOGO */}


<button

onClick={()=>handleNavigation("home")}

className="
flex
items-center
gap-3
"

>


<img

src={logo}

alt="Woodpeckers Tree Service"

className="
h-12
w-12
rounded-full
object-cover
border
border-[#C9A227]
"

/>



<div>


<h1

className="
text-2xl
font-serif
text-white
"

>

Woodpeckers

</h1>



<span

className="
text-[10px]
uppercase
tracking-[4px]
text-[#C9A227]
"

>

Tree Service

</span>


</div>


</button>







{/* DESKTOP MENU */}


<div

className="
hidden
lg:flex
items-center
gap-5
"

>


{

links.map((link)=>(


<button


key={link.path}


onClick={()=>handleNavigation(link.path)}



className={`

px-5
py-2.5
rounded-full
text-xs
uppercase
tracking-[2px]
transition


${
active===link.path

?

"bg-[#C9A227] text-[#123524]"

:

"text-[#F5F1E8] hover:bg-[#C9A227] hover:text-[#123524]"

}

`}


>


{link.name}


</button>


))


}


</div>









{/* BUTTON */}


<button


onClick={()=>handleNavigation("contact")}


className="
hidden
lg:flex
items-center
gap-3
bg-[#C9A227]
text-[#123524]
px-8
py-3
rounded-full
text-xs
uppercase
tracking-[2px]
hover:bg-white
transition
"


>


Request Quote

<FiArrowRight/>


</button>







{/* MOBILE ICON */}


<button


onClick={()=>setOpen(!open)}


className="
lg:hidden
text-2xl
text-white
"


>

{

open

?

<FiX/>

:

<FiMenu/>

}


</button>



</motion.nav>








{/* MOBILE MENU */}


<AnimatePresence>


{

open &&


<motion.div


initial={{
opacity:0,
height:0
}}


animate={{
opacity:1,
height:"auto"
}}


exit={{
opacity:0,
height:0
}}


className="
lg:hidden
bg-[#123524]
px-6
pb-8
"


>


<div

className="
flex
flex-col
gap-4
"

>


{

links.map((link)=>(


<button


key={link.path}


onClick={()=>handleNavigation(link.path)}


className={`

text-left
px-5
py-3
rounded-full
text-sm
uppercase
tracking-[2px]
transition


${
active===link.path

?

"bg-[#C9A227] text-[#123524]"

:

"text-white hover:bg-[#C9A227] hover:text-[#123524]"

}

`}


>


{link.name}


</button>


))


}



</div>


</motion.div>


}


</AnimatePresence>



</header>


  );

}


export default Navbar;