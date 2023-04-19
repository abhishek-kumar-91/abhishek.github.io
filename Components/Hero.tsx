import React, {useState, useEffect} from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import logo from "../images/logo.jpg";
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
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
    




    const [text, count] = useTypewriter({
        words: ["Hi, My Name's Abhishek Kumar",
        "Frontend Developer(ReactJS)",
        "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center
    justify-center text-center overflow-hidden'>
        <BackgroundCircle />
        
        <img 
        className='relative rounded-full h-32 w-32 mx-auto
        object-cover'
        src={imageSrc} />
       
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Upcomming Software Engineer</h2>
        <h1 className='text-3xl lg:text-4xl font-semibold scroll-px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#f7AB0A' />
        </h1>

        <div className='pt-5'>
            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>
            
            <Link href="#experience">
            <button className='heroButton'>Experience</button>
            </Link>
            
            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>
            
            <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link>
        </div>
        </div>
    </div>
  )
}