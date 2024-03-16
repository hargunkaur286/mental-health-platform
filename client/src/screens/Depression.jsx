import React from 'react'

const Depression = () => {
    // const swiper = new Swiper('.swiper', {
    //     scrollbar: {
    //       el: '.swiper-scrollbar',
    //       draggable: true,
    //     },
    //   mousewheel: {
    //       invert: true,
    //     },
    //   slidesPerView: 3,
    //   spaceBetween: 20,
    //   scrollbar: {
    //       clickable: true,
    //   });
  return (
    <>
     <main className="flex justify-center">
        <div className="swiper-container w-96 h-48">
          <div className="swiper-slide line-height-48 text-center bg-teal-900 text-white text-lg">Slide1</div>
          <div className="swiper-slide line-height-48 text-center bg-teal-700 text-white text-lg">Slide2</div>
          <div className="swiper-slide line-height-48 text-center bg-teal-500 text-white text-lg">Slide3</div>
          <div className="swiper-slide line-height-48 text-center bg-teal-300 text-white text-lg">Slide4</div>
          <div className="swiper-slide line-height-48 text-center bg-green-500 text-white text-lg">Slide5</div>
        </div>
      </main>
    </>
  )
}

export default Depression
