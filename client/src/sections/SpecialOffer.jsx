import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-orange-600'>Features </span>
          We Offer
        </h2>
        <div className="font-bold">One-on-One Video Call:</div> 
        Connect with licensed therapists for personalized support through private video calls. Get confidential guidance tailored to your needs.
        <br/>
        <div className="font-bold">Discord Peer Groups:</div>
        Join supportive peer groups on Discord to share experiences, exchange advice, and find solidarity in your mental health journey.
        <br/>
        <div className="font-bold">Music Therapy:</div>
        Experience the healing power of music through curated playlists designed to promote relaxation and boost your mood.
        <br/>
        <div className="font-bold">Helpline Numbers:</div>
        Access a list of helpline numbers for immediate mental health support whenever you need it.
        <br/>
        <div className="font-bold">Inspiring Stories:</div>
        Read stories of resilience and triumph from individuals who have overcome mental health challenges, offering hope and inspiration.
        {/* <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-600'
            textColor='text-slate-600'
          />
        </div> */}
      </div>
    </section>
  );
};

export default SpecialOffer;
