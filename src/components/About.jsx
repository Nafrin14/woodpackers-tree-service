import aboutImage from "../assets/images/about.webp";
import { motion } from "framer-motion";


function About() {


  return (

<section

id="about"

className="
py-28
bg-[#B8CBB0]
overflow-hidden
"

>


<div

className="
max-w-[1400px]
mx-auto
px-6
lg:px-14
"

>


<div

className="
grid
lg:grid-cols-2
gap-20
items-center
"

>





{/* IMAGE SECTION */}


<motion.div

initial={{
opacity:0,
x:-80
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:0.8
}}

className="
relative
"

>



{/* Image Background Shape */}


<div

className="
absolute
inset-0
bg-[#7F9D6A]
rounded-[50px_180px_50px_180px]
translate-x-6
translate-y-6
"

/>





{/* Image */}


<div

className="
relative
overflow-hidden
rounded-[50px_180px_50px_180px]
shadow-2xl
"

>


<img

src={aboutImage}

alt="Woodpeckers Tree Service"

loading="lazy"

className="
w-full
h-[620px]
object-cover
"

/>


</div>









{/* Experience Card */}



<motion.div

animate={{
y:[0,-12,0]
}}

transition={{
duration:4,
repeat:Infinity
}}

className="
absolute
bottom-10
-right-10
bg-[#0F2A1D]
px-8
py-7
shadow-xl
text-white
rounded-2xl
"

>


<h3

className="
text-5xl
font-serif
text-[#C9A227]
"

>

15+

</h3>



<p

className="
mt-2
text-xs
uppercase
tracking-[3px]
text-[#D9D0BE]
"

>

Years Experience

</p>


</motion.div>





</motion.div>









{/* CONTENT SECTION */}



<motion.div

initial={{
opacity:0,
x:80
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:0.8
}}

>





<div

className="
flex
items-center
gap-4
mb-8
"

>


<span

className="
w-14
h-[1px]
bg-[#C9A227]
"

/>



<p

className="
text-xs
uppercase
tracking-[5px]
text-[#526B45]
"

>

About Us

</p>



</div>









<h2

className="
text-5xl
lg:text-6xl
font-serif
leading-tight
text-[#123524]
"

>

Caring For Trees,

<br/>

Creating Beautiful

<br/>

Outdoor Spaces.

</h2>









<p

className="
mt-8
text-lg
leading-relaxed
text-[#364A3A]
"

>

Woodpeckers Tree Service provides professional
tree care solutions with experience, precision,
and respect for nature. Our skilled team helps
protect your property while creating safe and
beautiful outdoor environments.

</p>









{/* STATS */}



<div

className="
mt-10
grid
grid-cols-2
gap-8
"

>





<div

className="
border-l-2
border-[#52734D]
pl-5
"

>


<h3

className="
text-4xl
font-serif
text-[#123524]
"

>

500+

</h3>



<p

className="
mt-2
text-sm
text-[#364A3A]
"

>

Projects Completed

</p>


</div>









<div

className="
border-l-2
border-[#52734D]
pl-5
"

>


<h3

className="
text-4xl
font-serif
text-[#123524]
"

>

100%

</h3>



<p

className="
mt-2
text-sm
text-[#364A3A]
"

>

Customer Satisfaction

</p>


</div>



</div>









{/* BUTTON */}



<a

href="#contact"

className="
inline-flex
mt-10
bg-[#0F2A1D]
text-white
px-8
py-4
rounded-full
text-xs
uppercase
tracking-[2px]
hover:bg-[#526B45]
transition
"

>

Learn More

</a>







</motion.div>





</div>


</div>


</section>


  );

}


export default About;