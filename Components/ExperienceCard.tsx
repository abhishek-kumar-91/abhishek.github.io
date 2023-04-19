import React, {useState, useEffect} from 'react'
import {motion } from "framer-motion";
import chegg from "../images/chegg.png";
type Props = {}

function ExperienceCard({}: Props) {

    const imageUrl = chegg.src;
    const [imageSrc, setImageSrc] = useState("");
    
    useEffect(() => {
      async function convertImageToUrl() {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        setImageSrc(objectUrl);
      }
      convertImageToUrl();
    }, [imageUrl]);

  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 mt-40
    w-[500px] md:w-[500px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden '>
        <motion.img 
        initial = {{
            y: -100,
            opacity: 0,
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{opacity: 1, y:0}}
        viewport={{once:true}}
        className='w-32 rounded-full xl:w-[200px] xl:h-[200px]
        object-cover object-center'
        src={imageUrl} />


        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Subject Matter Expert</h4>
            <p className='font-bold text-2xl mt-1'>Chegg</p>
            <div className='flex space-x-2 my-2'>
                {/**tech stack */}
                <img 
                className='h-10 w-10 rounded-full'
                src="https://cdn.comparably.com/27579934/l/17407_logo_chegg.png" alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started April 2023</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Helping to student to solve computer science assignment problem</li>
                <li>CSS, Data Structure and Algorithm</li>
                

            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard