import React from 'react'
import Left from '../../../../assets/online-consultation.jpg'
import Mobile from '../../../../assets/mobile.svg'
import Dot from '../../../../assets/dot.svg'

const ServicesSection = () => {
  return (
    <section className="w-full">
      <div className="text-center  ">
        <h2 className="flex justify-center text-white h-15 !font-bold lg:h-40   !items-center  lg:!text-4xl" style={{backgroundColor:'#1F405E'}}>
          Our services
        </h2>
        <div className='text-center w-full'>
        <p className="mt-5 !w-full !text-center md:text-xl xl:text-4xl xl:!mt-10 font-semibold ">
          Choose How You Want to Consult
        </p>
        </div>
        <p className="mt-2   mx-10 text-sm md:text-base xl:!text-[18px] md:!w-[500px] lg:!w-[700px] text-justify">
          Book appointments for both in-clinic visits and virtual consultations
          tailored to your convenience and comfort.
        </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row    px-10 ">
        <div className="w-full  !mb-7 md:!mb-0">
          <img
            src={Left}
            alt="Online consultation"
            className="rounded-2xl h-auto object-cover md:!w-[400px] md:!h-[300px] xl:!w-[818px] xl:!h-[445px]"
          />
        </div>

        <div className=" flex flex-col justify-center items-start  md:!w-[600px]  lg:!w-[942px]  md:ml-[50px]  ">
          <h3 className="flex items-center gap-2 text-xl md:text-2xl !font-semibold lg:!text-[31px]   ">
<img
  src={Mobile}
  className="!w-5 !h-8 sm:w-4 sm:h-7 md:w-5 md:h-8 lg:!w-6 lg:!h-10 lg:!mr-4"
/>            Online consultation
          </h3>
          <ul className="mt-3 font-regular !items-start p-0 text-sm md:text-base leading-relaxed  space-y-2   lg:!text-[24px]">
  <li className="flex items-center gap-2">
    <img src={Dot} alt="dot" className=" !h-2 !w-2 md:!w-3 md:!h-3" />
    <span>Video or Audio consultation from Home</span>
  </li>
  <li className="flex items-center gap-2">
    <img src={Dot} alt="dot" className=" !h-2 !w-2 md:!w-3 md:!h-3"  />
    <span>Secure and private virtual care</span>
  </li>
  <li className="flex items-center gap-2">
    <img src={Dot} alt="dot" className=" !h-2 !w-2 md:!w-3 md:!h-3"  />
    <span>Instant booking with reminders</span>
  </li>
</ul>
          <button className="mt-2 px-3 py-2 lg:!w-50 text-[18px] font-medium bg-[#00917F]  text-white !rounded-3xl ">
            Book online now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
