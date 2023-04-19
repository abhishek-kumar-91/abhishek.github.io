import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid";
import {useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

function ContactMe({}: Props) {


    const { register, handleSubmit,  } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:abhishekkumar958830@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
  };



  return (
    <div className='h-screen relative flex flex-col items-center
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto text-center md:text-left'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact Me</h3>


        <div className='flex flex-col space-y-10'>

            <h4 className='text-4xl font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    
                <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl '>+918830028712</p>
                </div>
           

            <div className='flex items-center space-x-5 justify-center'>
                    
                <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl '>abhishekkumar958830@gmail.com</p>
                </div>

            <div className='flex items-center space-x-5 justify-center'>
                    
                <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2xl '>Pune, India</p>
                </div>
                </div>


                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                            <div className='flex space-x-2'>
                                <input {...register('name')} className='contactInput' type="text" placeholder='Name' required /> 
                                <input {...register('email')} className='contactInput' type="email" placeholder='Email' required/> 
                            </div>

                            <input {...register('subject')} className='contactInput' type="text"  placeholder='subject' required/>

                            <textarea {...register('message')} placeholder = "Message" className='contactInput' required></textarea>
                            <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md
                            text-black font-bold text-lg'>Submit</button>
                    </form>
        </div>
    </div>
  )
}

export default ContactMe