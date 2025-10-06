import React from "react";
import Icon1 from "../../../../assets/devices.svg";
import Icon2 from "../../../../assets/instant.svg";
import Icon3 from "../../../../assets/call.svg";
import Icon4 from "../../../../assets/Prescription.svg";

const leftCards = [
  {
    icon: Icon1,
    title: "Instant Access To Experts",
    text: "Connect with certified doctors anytime, without waiting in queues or booking days in advance. Get expert advice, prescriptions, and follow-ups all from the comfort of your home."
  },
  {
    icon: Icon3,
    title: "Consult From Anywhere",
    text: "Whether you’re at home, at work, or traveling, get medical advice right where you are. Connect instantly with certified doctors and get the care you need—without the wait."
  }
];

const rightCards = [
  {
    icon: Icon2,
    title: "Private And Secure",
    text: "Receive digital prescriptions instantly—and get your medicines delivered to your doorstep. Stay on track with your treatment, without stepping out."
  },
  {
    icon: Icon4,
    title: "Prescriptions Delivered",
    text: "Receive digital prescriptions instantly—and get your medicines delivered to your doorstep. Track your orders in real-time and enjoy hassle-free, contactless delivery."
  }
];

export default function OnlineCareFeatures() {
  return (
    <div className="w-full bg-white !overflow-x-hidden px-[20px] md:px-[40px] mt-[50px]">
      <h2 className="font-urbanist text-center text-[24px] sm:text-[36px] md:text-[54px] font-bold pb-0 mt-[24px] md:mt-[40px] leading-tight">
        <span className="text-[#013A63]">Experience</span> the Ease of Online Care
      </h2>
      <div className="feature-grid grid grid-cols-1 gap-[32px] w-full mt-[20px] md:mt-[60px] md:grid-cols-2">
        <div className="flex flex-col gap-[32px] md:gap-[40px] pt-[20px]">
          {leftCards.map((card, idx) => (
            <div
              key={idx}
              className="custom-card border border-[#D2CFCF] rounded-[20px] md:rounded-[32px] flex flex-col gap-[16px] md:gap-[24px] pt-[32px] md:pt-[48px] px-[20px] md:px-[32px] pb-[20px] md:pb-[32px] text-justify"
            >
              <div className="flex justify-center">
                <div className="bg-[#00A99D] rounded-full flex items-center justify-center icon-wrapper">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="icon-img"
                  />
                </div>
              </div>
              <h5 className="font-urbanist font-bold text-[20px] sm:text-[28px] md:text-[41px] leading-tight text-[#013A63] mobile-title">
                {card.title}
              </h5>
              <p className="font-urbanist text-[14px] sm:text-[18px] md:text-[24px] leading-[22px] sm:leading-[28px] md:leading-[32px] text-[#111111] mobile-text">
                {card.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[32px] md:gap-[40px] pt-[20px]">
          {rightCards.map((card, idx) => (
            <div
              key={idx}
              className="custom-card border border-[#D2CFCF] rounded-[20px] md:rounded-[32px] flex flex-col gap-[16px] md:gap-[24px] pt-[32px] md:pt-[48px] px-[20px] md:px-[32px] pb-[20px] md:pb-[32px]"
            >
              <div className="flex justify-center">
                <div className="bg-[#00A99D] rounded-full flex items-center justify-center icon-wrapper">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="icon-img"
                  />
                </div>
              </div>
              <h5 className="font-urbanist font-bold text-[20px] sm:text-[28px] md:text-[41px] leading-tight text-[#013A63] mobile-title">
                {card.title}
              </h5>
              <p className="font-urbanist text-[14px] sm:text-[18px] md:text-[24px] leading-[22px] sm:leading-[28px] md:leading-[32px] text-[#333] mobile-text">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .custom-card {
          min-height: 250px;
        }

        /* Mobile styles (<= 584px) */
        @media (max-width: 584px) {
          .custom-card {
            min-height: unset;
            padding-top: 16px;
            padding-left: 12px;
            padding-right: 12px;
            gap: 10px;
          }
          .icon-wrapper {
            width: 48px;
            height: 48px;
          }
          .icon-img {
            width: 24px;
            height: 24px;
          }
          .mobile-title {
            font-size: 16px !important;
            line-height: 20px !important;
          }
          .mobile-text {
            font-size: 12px !important;
            line-height: 18px !important;
          }
        }
        
        /* Tablet styles (768px to 1024px) */
        @media (min-width: 768px) and (max-width: 1024px) {
          .custom-card {
            min-height: 300px !important;
            padding-top: 24px !important;
            padding-bottom: 24px !important;
            gap: 16px !important;
          }
          .icon-wrapper {
            width: 80px;
            height: 80px;
          }
          .icon-img {
            width: 40px;
            height: 40px;
          }
          .mobile-title {
            font-size: 28px !important;
            line-height: 32px !important;
          }
          .mobile-text {
            font-size: 18px !important;
            line-height: 24px !important;
          }
        }

        /* Desktop styles (>= 1025px) */
        @media (min-width: 1025px) {
          .icon-wrapper {
            width: 120px !important;
            height: 120px !important;
          }
          .icon-img {
            width: 60px !important;
            height: 60px !important;
          }
        }
      `}</style>
    </div>
  );
}