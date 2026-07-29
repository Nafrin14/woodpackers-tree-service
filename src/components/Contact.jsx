import { useEffect, useRef, useState } from "react";

import {
  FiPhone,
  FiMapPin,
  FiShield,
  FiClock,
  FiAward
} from "react-icons/fi";


function Contact() {


  const formRef = useRef(null);

  const [loadForm, setLoadForm] = useState(false);



  useEffect(() => {


    const observer = new IntersectionObserver(

      ([entry]) => {

        if(entry.isIntersecting){

          setLoadForm(true);

          observer.disconnect();

        }

      },

      {
        threshold:0.2
      }

    );



    if(formRef.current){

      observer.observe(formRef.current);

    }



    return () => observer.disconnect();


  }, []);




  return (

    <section

      id="contact"

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
            inline-block
            bg-[#123524]
            text-[#C9A227]
            px-5
            py-2
            rounded-full
            text-sm
            uppercase
            tracking-[4px]
            "

          >

            Contact Us

          </span>




          <h2

            className="
            text-4xl
            md:text-6xl
            font-serif
            text-[#123524]
            mt-6
            "

          >

            Get Your Free

            <span className="text-[#52734D]">

              {" "}Estimate

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

            Contact Woodpeckers Tree Service for professional
            tree removal, trimming and complete tree care.

          </p>


        </div>









        <div

          className="
          grid
          lg:grid-cols-2
          gap-10
          "

        >






        {/* LEFT CONTENT */}


        <div

          className="
          space-y-6
          "

        >





        <div

          className="
          bg-[#EEF3E8]
          rounded-3xl
          p-8
          shadow-xl
          border
          border-[#8FAF7A]
          "

        >



          <h3

            className="
            text-3xl
            font-serif
            text-[#123524]
            mb-5
            "

          >

            Professional Tree Care You Can Trust

          </h3>




          <p

            className="
            text-[#364A3A]
            leading-relaxed
            mb-6
            "

          >

            Woodpeckers Tree Service provides safe and
            reliable tree removal, trimming, pruning and
            emergency tree care solutions.

          </p>





          <div className="space-y-4">


          {[

            {
              icon:<FiShield/>,
              text:"Licensed & Insured Professionals"
            },

            {
              icon:<FiAward/>,
              text:"Experienced Tree Specialists"
            },

            {
              icon:<FiClock/>,
              text:"24/7 Emergency Service"
            }


          ].map((item,index)=>(


            <div

              key={index}

              className="
              flex
              items-center
              gap-3
              "

            >


              <div

                className="
                w-10
                h-10
                rounded-xl
                bg-[#D5E2C8]
                flex
                items-center
                justify-center
                text-[#52734D]
                text-xl
                "

              >

                {item.icon}

              </div>



              <span className="text-[#364A3A]">

                {item.text}

              </span>


            </div>


          ))}


          </div>


        </div>








        {/* PHONE */}


        <div

          className="
          flex
          items-center
          gap-5
          bg-[#EEF3E8]
          p-8
          rounded-3xl
          shadow-xl
          border
          border-[#8FAF7A]
          "

        >


          <div

            className="
            w-14
            h-14
            rounded-2xl
            bg-[#D5E2C8]
            flex
            items-center
            justify-center
            text-[#52734D]
            text-2xl
            "

          >

            <FiPhone/>

          </div>



          <div>

            <p className="text-[#364A3A] text-sm uppercase tracking-wider">

              Call Us

            </p>


            <a

              href="tel:716-355-0028"

              className="
              text-xl
              font-serif
              text-[#123524]
              "

            >

              716-355-0028

            </a>


          </div>


        </div>









        {/* LOCATION */}



        <div

          className="
          flex
          items-center
          gap-5
          bg-[#EEF3E8]
          p-8
          rounded-3xl
          shadow-xl
          border
          border-[#8FAF7A]
          "

        >


          <div

            className="
            w-14
            h-14
            rounded-2xl
            bg-[#D5E2C8]
            flex
            items-center
            justify-center
            text-[#52734D]
            text-2xl
            "

          >

            <FiMapPin/>

          </div>




          <div>


            <p className="text-[#364A3A] text-sm uppercase tracking-wider">

              Service Area

            </p>



            <h3

              className="
              text-xl
              font-serif
              text-[#123524]
              "

            >

              9950 County Rd, New York, USA

            </h3>



          </div>


        </div>



        </div>












        {/* FORM */}



        <div

          ref={formRef}

          className="
          bg-[#EEF3E8]
          rounded-3xl
          p-8
          shadow-xl
          border
          border-[#8FAF7A]
          "

        >



          <h3

            className="
            text-3xl
            font-serif
            text-[#123524]
            mb-4
            "

          >

            Request Service

          </h3>




          <p

            className="
            text-[#364A3A]
            mb-8
            "

          >

            Fill out the form and our team will contact you.

          </p>





          {

          loadForm ? (


          <iframe

            src="https://link.kdlead.com/widget/form/L1ieiJYfZlzK58416ocj"

            title="Woodpeckers Tree Services Form"

            loading="lazy"

            scrolling="no"

            className="
            w-full
            h-[900px]
            border-0
            rounded-2xl
            bg-white
            "

          />



          ) : (


          <div

            className="
            h-[900px]
            flex
            items-center
            justify-center
            text-[#52734D]
            "

          >

            Loading form...

          </div>


          )


          }



        </div>







        </div>



      </div>


    </section>

  );

}


export default Contact;