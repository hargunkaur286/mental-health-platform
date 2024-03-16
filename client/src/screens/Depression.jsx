import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState, useRef } from "react";
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import image8 from './image8.jpg';
import image9 from './image9.jpg';
import image10 from './image10.jpg';
import image11 from './image11.jpg';
import image12 from './image12.jpg';
import image13 from './image13.jpg';
import image14 from './image14.jpg';
import image15 from './image15.jpg';
import image16 from './image16.jpg';
import image17 from './image17.jpg';
import image18 from './image18.jpg';
import image19 from './image19.jpg';
import image20 from './image20.jpg';
import image21 from './image21.jpg';
import image22 from './image22.jpg';
import image23 from './image23.jpg';
import image24 from './image24.jpg';
import image25 from './image25.jpg';
import image26 from './image26.jpg';
import thankyou from './image27.jpg';


const Depression = () => {

    const swiperRef = useRef();
  return (
    <>
     <div className="my-20">
                <h1 className="text-center text-[40px] font-bold">WHAT IS DEPRESSION ?</h1>
                <p className="w-[80%] mx-auto text-center mt-5">Depression is a mental health condition that can cause a person to feel persistently sad, hopeless, and/or lack energy or motivation. It can also cause physical symptoms such as changes in appetite or sleep patterns, difficulty concentrating, and feelings of worthlessness or guilt. Depression can be severe and can interfere with a person&apos;s ability to carry out their daily activities, including work, school, and relationships. It can also lead to thoughts of suicide. Depression is a common condition that can affect anyone, but it is also treatable with therapy, medication, and other forms of support.</p>
            </div>
            <div className="flex flex-row my-20 w-full">
                <button
                    className="border-black rounded-full bg-white w-20 ml-10"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <img src="https://img.icons8.com/ios-glyphs/40/null/chevron-left.png" />
                </button>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: true,
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper w-[90%] mx-auto my-auto"
                >
                    <SwiperSlide className="bg-[#deebfe] py-10 rounded-lg">
                        <div className="md:w-[70%] mx-auto">
                            <img src={image1} className='shadow-2xl' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image1} className='shadow-2xl' height={'300px'} />
                            <p className="md:text-[25px] text-center mt-5">I had a black dog. His name was depression</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image2} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">Whenever the black dog made an appearance, I felt empty and life seemed to slow down.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image3} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">He could surprise me with a visit for no reason or occasion.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image5} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">The black dog made me look and feel older than my years.
                                When the rest of the world seemed to be enjoying life, I could only see it through the black dog
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image6} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">Activities that usually brought me pleasure, suddenly ceased to.
                                He liked to ruin my appetite.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image7} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">He chewed up my memory and ability to concentrate.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image8} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">Doing anything or going anywhere with the black dog required super human strength.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image9} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">At social situations, he would sniff out what confidence I had and chase it away.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image11} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">My biggest fear was being found out.
                                I worried that people would judge me.
                                Because of the shame and stigma of the black dog I was constantly worried that I would be found out.
                                So I invested vast amounts of energy into covering him up.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image13} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">Keeping up an emotional lie is exhausting
                                Black dog could make me think and say negative things.
                                He could make me irritable and difficult to be around.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image14} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">He would take my love and bury my intimacy.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image15} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">He loved nothing more than to wake me up with highly repetitive and negative thinking. He also liked to remind me how exhausted I was going to be the next day.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image16} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">Having a black dog in your life isn&apos;t so much about feeling a bit down, sad or blue...at its worst it&apos;s about being devoid of feeling altogether.

                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image17} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">As I got older the black dog got bigger
                                and he started hanging around all the time.
                                I&apos;d chase him off with whatever I thought might send him running.
                                But more often than not he&apos;d come out on top
                                going down became easier than getting up again.

                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image18} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">So I became rather good at self medication...
                                which never really helped.
                                Eventually I felt totally isolated from everything and everyone.
                                The black dog had finally succeeded in hijacking my life.

                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image19} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">When you lose all joy in life you can begin to question what the point of it is.
                                Thankfully this was the time that I sought professional help.
                                This was my first step towards recovery and a major turning point in my life
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image20} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">I learnt that it doesn&apos;t matter who you are
                                the black dog affects millions and millions of people;
                                it is an equal opportunity mongrel.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image21} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">I also learnt that being emotionally genuine and authentic to those who are close to you,
                                can be an absolute game changer.
                                Most importantly I learnt not to be afraid of the black dog.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image22} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">The more tired and stressed you are the louder he barks,
                                so it&apos;s important to learn how to quiet your mind.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image23} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">It&apos;s been clinically proven that regular exercise
                                can be as effective for treating mild to moderate depression as antidepressants.
                                So go for a walk or a run and leave the mutt behind.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image24} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">Keep a mood journal; getting your thoughts on paper can be cathartic and often insightful
                                Also keep track of the things that you have to be grateful for.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image25} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">The most important thing to remember is that no matter how bad it gets…
                                if you take the right steps, talk to the right people, black dog days can and will pass.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] pt-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[50%] mx-auto">
                            <img src={image26} className='shadow-2xl' />
                            <p className="md:text-[25px] text-center mt-5">I wouldn&apos;t say that I&apos;m grateful for the black dog but he has been an incredible teacher.
                                He forced me to re-evaluate and simplify my life.
                                I learnt that rather than running away from my problems it&apos;s better to embrace them.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] md:py-40 py-5 rounded-lg">
                        <div className="flex flex-col justify-between items-center md:w-[90%] mx-auto">
                            <p className="md:text-[25px] text-center mt-5 font-bold text-[#1551b8]">&quot;The black dog may always be part of my life but he will never be the beast that he was. We have an understanding. I&apos;ve learnt through knowledge, patience, discipline and humour the worst black dog can be made to heel. If you are in difficulty, never be afraid to ask for help. There is absolutely no shame in doing so the only shame is missing out on life.&quot;
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#deebfe] py-10 rounded-lg">
                        <div className="md:w-[70%] mx-auto">
                            <img src={thankyou} className='shadow-2xl' />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button
                    className="border-black rounded-full bg-white w-20 ml-10"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <img src="https://img.icons8.com/ios-glyphs/40/null/chevron-right.png" />
                </button>
            </div>
    </>
  )
}

export default Depression
