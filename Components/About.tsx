import React, {useState, useEffect} from 'react'
import logo from "../images/logo.jpg";
import {motion} from "framer-motion";


type Props = {}

function About({}: Props) {
    const imageUrl = logo.src;
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
    <motion.div 
    initial = {{
        opacity: 0
    }}

   whileInView={{
    opacity:1
   }}
   transition={{
    duration: 1.5,
   }}
    
    className='flex flex-col relative h-screen
    text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly
    mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img 
        initial = {{
            x: -200,
            opacity: 0
        }}

       whileInView={{
        x:0,
        opacity:1
       }}
       viewport={{
        once:true
       }}
       transition={{
        duration: 1.2,
       }}
        src={imageSrc}

        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
        object-conver md:rounded-lg md:w-65 md:h-95 xl:w-[400px] xl:h-[400px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span>  background</h4>
            <p className='text-base'>
                I'm Abhishek Kumar, a frontend developer with expertise in HTML5, CSS3, JavaScript,
                 ReactJS, TypeScript, Tailwind CSS, and Next.js. and I'm also a open source contributer,
                  I enjoy building intuitive and 
                 visually appealing interfaces and collaborating with cross-functional teams and open source projects. 
                 I'm a lifelong learner, always staying up-to-date with the latest web development
                  trends and best practices. When I'm not coding, 
                I enjoy exploring new technologies and spending time with my family and friends.

               <span>I am currently learning backend development.</span> 
                </p>
        </div>
    </motion.div>
  )
}

export default About