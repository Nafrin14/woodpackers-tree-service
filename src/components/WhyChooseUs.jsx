import {
  FiShield,
  FiAward,
  FiClock,
  FiUsers
} from "react-icons/fi";


function WhyChooseUs() {


  const reasons = [

    {
      icon: <FiShield />,
      title: "Licensed & Insured",
      text:
        "Fully licensed and insured professionals providing safe and reliable tree care services."
    },


    {
      icon: <FiAward />,
      title: "Experienced Arborists",
      text:
        "Our skilled team uses expert techniques to maintain healthy and beautiful landscapes."
    },


    {
      icon: <FiClock />,
      title: "24/7 Emergency Service",
      text:
        "Fast response emergency tree services whenever you need immediate assistance."
    },


    {
      icon: <FiUsers />,
      title: "Customer Focused",
      text:
        "We prioritize quality work, clear communication, and complete customer satisfaction."
    }

  ];







  return (


<section

id="whychoose"

className="
py-24
bg-[#B8CBB0]
overflow-hidden
scroll-mt-32
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

Why Choose Us

</span>







<h2

className="
text-4xl
md:text-6xl
font-serif
text-[#123524]
mt-5
"

>

Trusted Tree Care


<span

className="
text-[#526B45]
"

>

{" "}Experts

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

We provide professional tree services with
safety, experience, and dedication.

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

reasons.map((item,index)=>(



<div

key={index}

className="
bg-[#F8F3E8]
rounded-[40px]
p-8
shadow-xl
border
border-[#8FAF7A]
hover:-translate-y-3
transition-all
duration-500
"

>









{/* Icon */}



<div

className="
w-16
h-16
rounded-2xl
bg-[#0F2A1D]
text-[#C9A227]
flex
items-center
justify-center
text-3xl
mb-6
"

>

{item.icon}

</div>








<h3

className="
text-2xl
font-serif
text-[#123524]
mb-4
"

>

{item.title}

</h3>








<p

className="
text-[#364A3A]
leading-relaxed
"

>

{item.text}

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



))

}



</div>







</div>


</section>


  );

}


export default WhyChooseUs;