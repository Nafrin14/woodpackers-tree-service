import heroImage from "../assets/images/hero.webp";
import { FiArrowRight } from "react-icons/fi";

function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-[700px]
        lg:min-h-screen
        bg-[#B8CBB0]
        flex
        items-center
        overflow-hidden
        relative
      "
    >
      {/* Background Shapes */}
      <div
        className="
          absolute
          -right-40
          top-20
          w-[550px]
          h-[550px]
          rounded-full
          bg-[#8FAF7A]
          opacity-50
        "
      />

      <div
        className="
          absolute
          left-10
          bottom-20
          w-40
          h-40
          rounded-full
          bg-[#52734D]
          opacity-20
        "
      />

      <div
        className="
          max-w-[1400px]
          mx-auto
          px-6
          lg:px-14
          pt-32
          w-full
          relative
          z-10
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
          {/* Content */}
          <div>
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
                  w-12
                  h-[1px]
                  bg-[#8A6418]
                "
              />

              <p
                className="
                  uppercase
                  tracking-[5px]
                  text-sm
                  text-[#123524]
                "
              >
                Professional Tree Care
              </p>
            </div>


            <h1
              className="
                text-[#123524]
                text-6xl
                md:text-7xl
                lg:text-[88px]
                font-serif
                leading-[1.05]
              "
            >
              Creating
              <br />
              Timeless
              <br />
              Landscapes.
            </h1>


            <p
              className="
                mt-8
                max-w-xl
                text-lg
                text-[#364A3A]
                leading-relaxed
              "
            >
              Expert tree removal, trimming and complete tree care services
              designed to protect your property and enhance your outdoor
              environment.
            </p>


            <a
              href="#contact"
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                bg-[#0F2A1D]
                text-white
                px-9
                py-4
                text-xs
                uppercase
                tracking-[2px]
                hover:bg-[#526B45]
                transition
              "
            >
              Request Estimate
              <FiArrowRight />
            </a>

          </div>



          {/* Image */}
          <div className="relative">

            <div
              className="
                absolute
                inset-0
                bg-[#7F9D6A]
                rounded-[180px_40px_180px_40px]
                translate-x-6
                translate-y-6
              "
            />


            <div
              className="
                relative
                overflow-hidden
                rounded-[180px_40px_180px_40px]
                shadow-2xl
              "
            >

              <img
                src={heroImage}
                alt="Professional tree service"
                width="700"
                height="650"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="
                  w-full
                  h-[450px]
                  lg:h-[650px]
                  object-cover
                "
              />

            </div>



            {/* Floating Card */}
            <div
              className="
                absolute
                bottom-10
                -left-10
                bg-[#F8F3E8]
                px-8
                py-6
                shadow-xl
                rounded-2xl
              "
            >

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[3px]
                  text-[#526B45]
                "
              >
                Trusted Experts
              </p>


              <p
                className="
                  mt-2
                  text-xl
                  font-serif
                  text-[#123524]
                "
              >
                Quality Tree Care
              </p>

            </div>


          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;