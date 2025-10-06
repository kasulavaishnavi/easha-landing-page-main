import React from 'react'
import Right from '../../../../assets/clinic.jpg'
import Clinic from '../../../../assets/clinic.svg'
import Dot from '../../../../assets/dot.svg'


function ClinicVisit() {
  return (
    <div><div className="mt-10  md:!mt-45 lg:!mt-15 xl:!mt-15 flex flex-col-reverse md:flex-row px-10">

  <div className="flex flex-col justify-center items-start md:w-[650px] lg:!w-[942px] lg:ml-[50px] ">
    <h3 className="flex items-center text-xl md:text-2xl !font-semibold lg:!text-[31px]">
      <img
        src={Clinic}
        className="!w-5 !h-8 mr-2 sm:w-4 sm:h-7 md:w-5 md:h-8 lg:!w-6 lg:!h-10 lg:!mr-4 md:mr-3"
      />
      Clinic Visit Appointment
    </h3>

    <ul className="mt-3 font-regular !items-start p-0 text-sm md:text-base leading-relaxed space-y-2 lg:!text-[24px]">
      <li className="flex items-center gap-2">
        <img src={Dot} alt="dot" className="!h-2 !w-2 md:!w-3 md:!h-3" />
        <span>Meet Doctors at nearby clinics</span>
      </li>
      <li className="flex items-center gap-2">
        <img src={Dot} alt="dot" className="!h-2 !w-2 md:!w-3 md:!h-3" />
        <span>Verified clinics and real time slots</span>
      </li>
      <li className="flex items-center gap-2">
        <img src={Dot} alt="dot" className="!h-2 !w-2 md:!w-3 md:!h-3" />
        <span>Easy rescheduling & navigation Support</span>
      </li>
    </ul>

    <button className="mt-2 mb-5 lg:!w-50  lg:!mt-4 px-4 font-medium !text-[18px] py-2 bg-[#00917F] text-white !rounded-3xl">
      Find a clinic
    </button>
  </div>

  <div className="w-full !mb-7 md:!mb-0">
    <img
      src={Right}
      alt="Online consultation"
      className="rounded-2xl h-auto object-cover md:!w-[400px] md:!h-[300px] xl:!w-[818px] xl:!h-[445px]"
    />
  </div>
</div>
</div>
  )
}

export default ClinicVisit