import React from 'react';
import {motion} from "framer-motion";

type Props = {
    directionLeft?: boolean;
}

function Skill6({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
       <motion.img 
       initial = {{
        x: directionLeft ? -200: 200,
       }}
       transition={{duration: 1}}
       whileInView={{opacity: 1, x: 0}}
       src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&h=670&q=75&fit=max&auto=format"
       className='rounded-full border border-gray-500 object-cover w-24  h-24 md:w-28 md:h-28 xl:w-32
      xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'/>

      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
      ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
                 <p className='text-3xl font-bold text-black opacity-100'>80%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill6;