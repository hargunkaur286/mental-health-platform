import React from 'react'
import { Footer } from '../sections'
import { Nav } from '../components'

const Vent = () => {
  return (
    <>
    <div className='pb-28'>
    <Nav />
    </div>
    
    <div>
                <h1 className="text-center text-[40px] font-bold">STORIES
</h1>
                <p className="text-center w-[80%] mx-auto">
                Storytelling is a powerful tool for mental health education, as it helps to engage people in a more personal and meaningful way. It helps to illustrate different mental health issues and provide a deeper understanding of what it might be like to experience these challenges. Also, helps to make the information more relatable and engaging, and can also help to reduce stigma and promote understanding.


                </p>
                <div className="flex flex-col w-[80%] mx-auto mt-5 pb-10">
                    <a target={'_blank'} className='flex flex-row justify-between items-center text-[20px] my-3 border rounded-lg py-10 px-5 hover:cursor-pointer hover:scale-105 transition ease-in-out shadow-lg'>DEPRESSION <img src="https://img.icons8.com/material-rounded/24/null/chevron-right.png" /></a>
                    <a target={'_blank'} className='flex flex-row justify-between items-center text-[20px] my-3 border rounded-lg py-10 px-5 hover:cursor-pointer hover:scale-105 transition ease-in-out shadow-lg'>ANXIETY<img src="https://img.icons8.com/material-rounded/24/null/chevron-right.png" /></a>
                    <a target={'_blank'} className='flex flex-row justify-between items-center text-[20px] my-3 border rounded-lg py-10 px-5 hover:cursor-pointer hover:scale-105 transition ease-in-out shadow-lg'>ADDICTION <img src="https://img.icons8.com/material-rounded/24/null/chevron-right.png" /></a>
                    <a target={'_blank'} className='flex flex-row justify-between items-center text-[20px] my-3 border rounded-lg py-10 px-5 hover:cursor-pointer hover:scale-105 transition ease-in-out shadow-lg'>PERSONALITY DISORDER<img src="https://img.icons8.com/material-rounded/24/null/chevron-right.png" /></a>
                    <a target={'_blank'} className='flex flex-row justify-between items-center text-[20px] my-3 border rounded-lg py-10 px-5 hover:cursor-pointer hover:scale-105 transition ease-in-out shadow-lg'>ATTENTION DEFICIENT HYPERACTIVITY DISORDER(ADHD) <img src="https://img.icons8.com/material-rounded/24/null/chevron-right.png" /></a>
                </div>
            </div>
            <div className='bg-black pt-5 pl-10 pr-10 pb-10'>
                <Footer/>
            </div>
            
    </>
  )
}

export default Vent
