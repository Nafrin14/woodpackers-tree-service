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

const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));



function Home() {

  return (

    <>

      <Hero />

      <About />

      <Services />

      <WhyChooseUs />

      <Testimonials />

      <Contact />

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

            <div

              className="
              min-h-screen
              flex
              items-center
              justify-center
              text-[#123524]
              text-xl
              "

            >

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

              path="/Privacy"

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