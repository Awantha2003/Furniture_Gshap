import { Phone } from "lucide-react"
import NavBtn from "./NavBtn"


const Header = () => {
  return <header className="fixed border-b border-b-zinc-300 bg-white/50 backdrop-blur-lg backdrop-blur-lg min-w-full py-6 lg:py-7 px-4 sm:px-6 lg:px-8 max-w-7xl overflow-clip " >
     <div className="container mx-auto flex items-center justify-between">

         {/* Logo */}
            <div className="text-3xl impact relative uppercase tracking-tight text-zinc-900 "> Furniture
               
               <sup className=" absolute font-thin text-xs">TM</sup>
      </div> 


         {/* Nav */}
            <div className="hidden lg:flex items-center space-x-8 "> </div>
             
             <NavBtn>Home</NavBtn>
             <NavBtn>About</NavBtn>
             <NavBtn>Works</NavBtn>
             <NavBtn>Gallery</NavBtn>
            <NavBtn>Service</NavBtn>

         {/* Contact Buttons */}   

         <button className="flex items-center space-x-2 bg-zinc-900 text-white text-sm py-4 px-6 rounded-full cursor-pointer transition-all duration-150 ease-in ml-4 hover:bg-transparent border border-zinc-900 hover:text-zinc-900">
                <Phone size={16} />
                  <span>Contact Us</span>
         </button>



             
             


         {/* Menu Icon for mobile */}
            <div className=""> </div>

     </div>
  </header>
}

export default Header