import React from 'react'

function Trending() {
  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-4 mt-20 mb-20">

      {/* title */}
      <div className="relative flex justify-between items-end mb-12 ">
        <h2 className="section-title">
          
         FOR TRENDING <br/> NOW
        </h2>
         <button className='text-sm lg:text-lg absolute right-0 font-medium border-zinc-900 text-zinc-900 px-5 py-3 rounded-full cursor-pointer hover:bg-zinc-900 hover:text-zinc-50 transition-all duration-200 ease-in'>
          SEE ALL
         </button>
      </div>

    {/* Trending items grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

        {/* Item 1 */}
      <div className="col-span1">
        
      </div>
       
       {/* Item 2 & 3  */}
      </div>

    </section>
  )
}

export default Trending