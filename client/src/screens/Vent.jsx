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
                <h1 className="text-center text-[40px] font-bold">VENT IT OUT</h1>
                <p className="text-center w-[80%] mx-auto">
                    OVER TEA- A Virtual Support group to help share what&apos;s troubling
                    them. Through the sharing of experiences, you will be able to
                    offer support, encouragement, and comfort to the other group
                    members, and receive the same in return.
                    <br />
                    <br />
                    BLOOM- A place to confess your struggles and fears without
                    judgment or punishment. It likely feels good to get all of those
                    thoughts and feelings out of your head and down on something.Bloom
                    can be your own personal journal.
                    <br />
                    <br />
                    STILL- A voice channel that offers Music therapy by playlist
                    specially curated by professionals to provide a distraction for
                    your mind, it can slow the rhythms of the body, and it can alter
                    our mood, which in turn can influence your behavior.
                    <br />
                    <br />
                    HEADSPACE- Gathering of people over a voice channel who share
                    common ground in some way and can offer each other mental and
                    emotional support.
                </p>
                <div className="flex flex-col w-[80%] mx-auto mt-5 pb-10">
                    <a href="https://discord.gg/AyvnXb9t" target={'_blank'} className='flex flex-row justify-between items-center text-[20px] my-3 border rounded-lg py-10 px-5 hover:cursor-pointer hover:scale-105 transition ease-in-out shadow-lg'>DISCORD <img src="https://img.icons8.com/material-rounded/24/null/chevron-right.png" /></a>
                    <a href="https://open.spotify.com/playlist/37i9dQZF1DXcCnTAt8CfNe?si=V7ETnyKgSM2O8Ho5QV1v8Q&utm_source=whatsapp" target={'_blank'} className='flex flex-row justify-between items-center text-[20px] my-3 border rounded-lg py-10 px-5 hover:cursor-pointer hover:scale-105 transition ease-in-out shadow-lg'>MUSICAL THERAPY <img src="https://img.icons8.com/material-rounded/24/null/chevron-right.png" /></a>
                </div>
            </div>
            <div className='bg-black pt-5 pl-10 pr-10 pb-10'>
                <Footer/>
            </div>
            
    </>
  )
}

export default Vent
