import Head from "next/head";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import About from "../Components/About";
import WorkExperience from "../Components/WorkExperience";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import ContactMe from "../Components/ContactMe";
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import logo from "../images/logo.jpg";

// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
   <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
   overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
   <Head>
    <title>Abhishek's Portfolio</title>
   </Head>

 {/**Header */}
 <Header />

 {/**Hero */}
<section id="hero"  className="snap-start">
<Hero />

</section>
 {/**About */}
<section id="about" className="snap-center">
  <About />
</section>
 {/*Experience */}
<section id="experience" className="snap-center">
  <WorkExperience />
</section>
 {/**Skills */}

<section id="skills" className="snap-start">
  <Skills />
</section>
 {/**Projects */}

 <section id="projects" className="snap-center">
  <Projects />
 </section>

 {/**Contact Me */}


 <section id="contact"  className="snap-start">
  <ContactMe />
 </section>

 <Link href="#hero">
 <footer className="sticky bottom-5 w-full cursor-pointer">
  <div className="flex items-center justify-center">
  <img 
  className="h-10 rounded-full filter grayscale hover:grayscale-500 cursor-pointer"
  src={imageUrl} alt="" />
  </div>
 </footer>
 </Link>
   </div>
  );
}
