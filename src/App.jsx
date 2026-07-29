import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// Lazy load components
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));


// Lazy load pages
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));





function Home() {

  return (

    <>

      <Hero />

      <Suspense

        fallback={

          <div className="
            min-h-screen
            flex
            items-center
            justify-center
            text-[#123524]
            text-xl
          ">

            Loading...

          </div>

        }

      >

        <About />

        <Services />

        <WhyChooseUs />

        <Testimonials />

        <Contact />

      </Suspense>

    </>

  );

}






function App() {


  return (

    <>


      <Navbar />



      <main>


        <Suspense

          fallback={

            <div className="
              min-h-screen
              flex
              items-center
              justify-center
              text-[#123524]
              text-xl
            ">

              Loading...

            </div>

          }

        >



          <Routes>



            <Route

              path="/"

              element={<Home />}

            />



            <Route

              path="/privacy"

              element={<Privacy />}

            />



            <Route

              path="/terms"

              element={<Terms />}

            />



            <Route

              path="*"

              element={<Home />}

            />



          </Routes>



        </Suspense>


      </main>




      <Footer />


    </>

  );

}



export default App;