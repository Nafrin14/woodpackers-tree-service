import {
  FiPhone,
  FiMapPin,
  FiMail
} from "react-icons/fi";

import { Link } from "react-router-dom";

import logo from "../assets/images/logo.webp";


function Footer() {


  return (


    <footer

      className="
      bg-[#0F2A1D]
      text-white
      "

    >



      <div

        className="
        container
        mx-auto
        px-6
        lg:px-12
        py-16
        "

      >





        <div

          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-10
          "

        >







          {/* Brand */}



          <div>


            <div

              className="
              flex
              items-center
              gap-3
              mb-5
              "

            >



              <img

                src={logo}

                alt="Woodpeckers Tree Service Logo"

                className="
                h-10
                lg:h-12
                w-10
                lg:w-12
                rounded-full
                object-cover
                bg-white
                border
                border-[#C9A227]
                "

              />





              <h2

                className="
                text-2xl
                lg:text-3xl
                font-serif
                "

              >

                Woodpeckers


                <span

                  className="
                  text-[#C9A227]
                  "

                >

                  {" "}Tree Service

                </span>


              </h2>



            </div>








            <p

              className="
              text-[#D9D0BE]
              leading-relaxed
              "

            >

              Professional tree removal, trimming and
              complete tree care services. Protecting your
              property with safe and reliable solutions.

            </p>




          </div>









          {/* Quick Links */}



          <div>



            <h3

              className="
              text-xl
              font-serif
              mb-5
              "

            >

              Quick Links

            </h3>







            <ul

              className="
              space-y-3
              text-[#D9D0BE]
              "

            >



              <li>

                <a

                  href="/#home"

                  className="
                  hover:text-[#C9A227]
                  transition
                  "

                >

                  Home

                </a>

              </li>





              <li>

                <a

                  href="/#about"

                  className="
                  hover:text-[#C9A227]
                  transition
                  "

                >

                  About

                </a>

              </li>







              <li>

                <a

                  href="/#services"

                  className="
                  hover:text-[#C9A227]
                  transition
                  "

                >

                  Services

                </a>

              </li>







              <li>

                <a

                  href="/#why-choose-us"

                  className="
                  hover:text-[#C9A227]
                  transition
                  "

                >

                  Why Choose Us

                </a>

              </li>







              <li>

                <a

                  href="/#contact"

                  className="
                  hover:text-[#C9A227]
                  transition
                  "

                >

                  Contact

                </a>

              </li>



            </ul>




          </div>









          {/* Services */}



          <div>



            <h3

              className="
              text-xl
              font-serif
              mb-5
              "

            >

              Services

            </h3>







            <ul

              className="
              space-y-3
              text-[#D9D0BE]
              "

            >

              <li>
                Tree Removal
              </li>


              <li>
                Tree Trimming
              </li>


              <li>
                Stump Grinding
              </li>


              <li>
                Emergency Tree Service
              </li>


            </ul>




          </div>









          {/* Contact */}



          <div>



            <h3

              className="
              text-xl
              font-serif
              mb-5
              "

            >

              Contact

            </h3>







            <div

              className="
              space-y-4
              text-[#D9D0BE]
              "

            >







              <a

                href="tel:716-355-0028"

                className="
                flex
                items-center
                gap-3
                hover:text-[#C9A227]
                transition
                "

              >

                <FiPhone/>

                716-355-0028

              </a>









             









              <div

                className="
                flex
                items-center
                gap-3
                "

              >

                <FiMapPin/>

               9950 County Rd, New York, USA

              </div>





            </div>





          </div>







        </div>









        {/* Bottom */}



        <div

          className="
          border-t
          border-[#C8BDA8]/30
          mt-12
          pt-6
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
          text-[#D9D0BE]
          text-sm
          "

        >





          <p>

            © {new Date().getFullYear()} Woodpeckers Tree Service.
            All Rights Reserved.

          </p>







          <div

            className="
            flex
            gap-5
            "

          >



            <Link

              to="/privacy"

              className="
              hover:text-[#C9A227]
              transition
              "

            >

              Privacy Policy

            </Link>







            <Link

              to="/terms"

              className="
              hover:text-[#C9A227]
              transition
              "

            >

              Terms & Conditions

            </Link>





          </div>





        </div>







      </div>




    </footer>


  );


}


export default Footer;