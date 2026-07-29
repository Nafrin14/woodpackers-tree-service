import {
  FiStar
} from "react-icons/fi";


function Testimonials() {


  const testimonials = [

    {
      name: "Michael Anderson",
      location: "Roslyn, NY",
      review:
        "Excellent tree service! The team was professional, fast, and left my property cleaner than before. Highly recommended.",
    },

    {
      name: "Sarah Williams",
      location: "Roslyn, NY",
      review:
        "They removed a dangerous tree safely and efficiently. Great communication and outstanding workmanship.",
    },

    {
      name: "David Miller",
      location: "New York",
      review:
        "Very reliable company. Their tree trimming service improved the look of our entire landscape.",
    }

  ];





  return (


    <section

      id="testimonials"

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
            text-[#52734D]
            uppercase
            tracking-[5px]
            text-sm
            font-medium
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

            What Our Clients


            <span

              className="
              text-[#355834]
              "

            >

              {" "}Say

            </span>


          </h2>







          <p

            className="
            text-[#364A3A]
            text-lg
            mt-5
            "

          >

            Trusted by homeowners who choose professional
            tree care services.

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
                bg-[#EEF3E8]
                rounded-3xl
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
                  gap-1
                  mb-6
                  text-[#C9A227]
                  "

                >


                  {
                    [...Array(5)].map((_,i)=>(

                      <FiStar

                        key={i}

                        fill="currentColor"

                      />

                    ))
                  }


                </div>









                {/* Review */}



                <p

                  className="
                  text-[#364A3A]
                  leading-relaxed
                  mb-8
                  "

                >

                  "{item.review}"

                </p>









                {/* Client */}



                <div>


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
                    text-[#52734D]
                    mt-1
                    "

                  >

                    {item.location}

                  </p>



                </div>









                {/* Bottom Line */}



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


export default Testimonials;