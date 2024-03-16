import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          About
          <span className='text-orange-600'> Us </span>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        At Empathear, we're on a mission to revolutionize mental health support. Our team is passionate about creating a safe and nurturing environment where individuals can find solace, support, and understanding. 
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        With a commitment to destigmatizing mental health issues, we strive to empower every member of our community on their journey toward well-being. Together, we're fostering connections, breaking barriers, and building a brighter, healthier future for all.
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
