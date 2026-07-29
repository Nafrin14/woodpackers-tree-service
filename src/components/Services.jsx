import removal from "../assets/images/tree-removal.webp";
import trimming from "../assets/images/tree-trimming.webp";
import stump from "../assets/images/stump-grinding.webp";
import emergency from "../assets/images/emergency-service.webp";


function Services() {


  const services = [

    {
      image: removal,
      title: "Tree Removal",
      text:
        "Safe and professional tree removal services to protect your property and surrounding landscape."
    },


    {
      image: trimming,
      title: "Tree Trimming",
      text:
        "Expert pruning and trimming to improve tree health, appearance and safety."
    },


    {
      image: stump,
      title: "Stump Grinding",
      text:
        "Complete stump removal and grinding services to clear unwanted tree remains."
    },


    {
      image: emergency,
      title: "Emergency Tree Service",
      text:
        "Fast response emergency tree services for storm damage and hazardous trees."
    }

  ];





  return (


<section

id="services"

className="
py-24
bg-[#B8CBB0]
overflow-hidden
"

>


<div

className="
container
mx-auto
px-6
lg:px-12
"

>





{/* Heading */}


<div

className="
text-center
max-w-3xl
mx-auto
mb-16
"

>


<span

className="
text-[#C9A227]
uppercase
tracking-[5px]
font-medium
text-sm
"

>

Our Services

</span>






<h2

className="
text-4xl
md:text-6xl
font-serif
text-[#123524]
mt-5
leading-tight
"

>

Professional Tree Care


<span

className="
text-[#526B45]
"

>

{" "}Solutions

</span>


</h2>







<p

className="
text-[#364A3A]
text-lg
mt-5
leading-relaxed
"

>

Reliable tree services designed to keep your
property safe, beautiful and healthy.

</p>



</div>









{/* Cards */}


<div

className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-8
"

>


{

services.map((service,index)=>(



<div

key={index}

className="
bg-[#F8F3E8]
rounded-[40px]
overflow-hidden
shadow-xl
border
border-[#8FAF7A]
hover:-translate-y-3
transition-all
duration-500
flex
flex-col
"

>







{/* Image */}



<div

className="
h-64
w-full
overflow-hidden
relative
"

>


<img

src={service.image}

alt={service.title}

loading="lazy"

className="
w-full
h-full
object-cover
hover:scale-110
transition-transform
duration-700
"

/>





<div

className="
absolute
inset-0
bg-gradient-to-t
from-[#0F2A1D]/50
via-transparent
to-transparent
"

/>



</div>









{/* Content */}



<div

className="
p-8
flex
flex-col
flex-1
"

>


<h3

className="
text-2xl
font-serif
text-[#123524]
mb-4
"

>

{service.title}

</h3>





<p

className="
text-[#364A3A]
leading-relaxed
flex-1
"

>

{service.text}

</p>






<div

className="
mt-6
w-12
h-[2px]
bg-[#C9A227]
"

/>



</div>







</div>



))

}



</div>





</div>


</section>


  );

}


export default Services;