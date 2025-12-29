import { ArrowRight } from 'lucide-react'
import HeroImage from './HeroImage'
import Header from "./Header.jsx";


const Hero = () => {
  return (
    <section className="max-w-7xl mt-30 mx-auto p-4 sm:p-8 mb-20">

      <div className="flex relative flex-col lg:flex-row lg:space-x-12 overflow-x-clip "> </div>


      {/* left content */}
      <div className="lg:w-1/2"> 
        {/* Main Title : Large Bold */}
        <h1 className="text-7xl sm:text-8xl font-extrabold leading-none mb-6">
          <span className="block impact lg:text-[250px] ">FINE</span>
          <span className="block impact lg:text-[250px] tracking-tight lg:mt-10">FURNISHINGS</span>
        </h1>

        {/* Subtitle : Medium Regular */}
        <div className=" text-base lg:text-lg text-zinc-600 max-w-md lg:w-full mb-8 py-2">
          Choosing the right furniture for your home online will add elegance
          and functionality to your space. We offer a curated
          collection of 
          fine furnishing.
        </div>

        {/* CTA Buttons */}
        <button className="group flex items-center space-x-3 bg-zinc-900 text-white text-sm font-semibold py-4 px-6 rounded-full transition-all duration-150 gover:bg-transparent border border-zinc-900 hover:text-zinc-900 ease-in lg:absolute lg:text-lg lg:py-5 lg:px-10 bottom-10 right-10 hover:animate-wiggle cursor-pointer "> 
          <span>Shop Now</span>
          <ArrowRight size={20} className="group-hover:rotate-360 -routate-350 transition-all duration-500 ease-in"/>
        </button>


      </div>


      {/* Right content */}
    <HeroImage/>

    </section>
  )
}

export default Hero