import {
  FiStar
} from "react-icons/fi";


function Testimonials() {


  const testimonials = [

    {
      name: "Michael Johnson",
      role: "Homeowner",
      text:
        "Excellent tree service! The team was professional, safe, and completed the job perfectly. Highly recommended."
    },


    {
      name: "Sarah Williams",
      role: "Property Owner",
      text:
        "Very reliable and experienced arborists. They transformed our yard and provided outstanding service."
    },


    {
      name: "David Anderson",
      role: "Residential Client",
      text:
        "Fast response, great communication, and quality workmanship. I would definitely hire them again."
    }

  ];




  return (


    <section

      id="testimonials"

      className="
      py-24
      bg-[#DCE8D5]
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
            text-[#355834]
            uppercase
            tracking-[5px]
            font-medium
            text-sm
            "

          >

            Testimonials

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

            What Our Clients Say


          </h2>







          <p

            className="
            text-[#26382D]
            text-lg
            mt-5
            leading-relaxed
            "

          >

            Trusted by homeowners who choose professional
            tree care services for their properties.

          </p>



        </div>









        {/* Cards */}



        <div

          className="
          grid
          md:grid-cols-3
          gap-8
          "

        >



          {
            testimonials.map((item,index)=>(



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





                {/* Stars */}



                <div

                  className="
                  flex
                  gap-2
                  text-[#C9A227]
                  mb-6
                  "

                >

                  {
                    [1,2,3,4,5].map((star)=>(

                      <FiStar

                        key={star}

                        className="
                        fill-current
                        "

                      />

                    ))
                  }

                </div>







                <p

                  className="
                  text-[#26382D]
                  leading-relaxed
                  text-lg
                  "

                >

                  "{item.text}"

                </p>







                <div

                  className="
                  mt-8
                  border-t
                  border-[#8FAF7A]
                  pt-6
                  "

                >



                  <h3

                    className="
                    text-xl
                    font-serif
                    text-[#123524]
                    "

                  >

                    {item.name}

                  </h3>





                  <p

                    className="
                    text-sm
                    text-[#355834]
                    mt-1
                    "

                  >

                    {item.role}

                  </p>



                </div>







              </div>



            ))
          }



        </div>






      </div>





    </section>


  );

}


export default Testimonials;