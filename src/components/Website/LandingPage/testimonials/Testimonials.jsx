import React, { useRef, useState, useEffect } from "react";
import Star from "../../../../assets/Star.svg";
import rameshImage from "../../../../assets/rameshimage.png";
import anitaImage from "../../../../assets/anitaraoimage.png";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "S. Ramesh",
      text: "This website is a lifesaver! It helped me identify my symptoms quickly and connected me to a specialist in no time. Highly recommend!",
      image: rameshImage,
    },
    {
      id: 2,
      name: "Anita Rao",
      text: "This website is a lifesaver! It helped me identify my symptoms quickly and connected me to a specialist in no time. Highly recommend!",
      image: anitaImage,
    },
    {
      id: 3,
      name: "Siva",
      text: "This website is a lifesaver! It helped me identify my symptoms quickly and connected me to a specialist in no time. Highly recommend!",
      image: rameshImage,
    },
    {
      id: 4,
      name: "Sandeep",
      text: "This website is a lifesaver! It helped me identify my symptoms quickly and connected me to a specialist in no time. Highly recommend!",
      image: anitaImage,
    },
    {
      id: 5,
      name: "Vamshi",
      text: "This website is a lifesaver! It helped me identify my symptoms quickly and connected me to a specialist in no time. Highly recommend!",
      image: rameshImage,
    },
    {
      id: 6,
      name: "Deepika Singh",
      text: "This website is a lifesaver! It helped me identify my symptoms quickly and connected me to a specialist in no time. Highly recommend!",
      image: anitaImage,
    },
    {
      id: 7,
      name: "Vikash",
      text: "This website is a lifesaver! It helped me identify my symptoms quickly and connected me to a specialist in no time. Highly recommend!",
      image: rameshImage,
    },
    {
      id: 8,
      name: "Iyer",
      text: "This website is a lifesaver! It helped me identify my symptoms quickly and connected me to a specialist in no time. Highly recommend!",
      image: anitaImage,
    },
  ];

  const scrollRef = useRef(null);
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const rafLock = useRef(false);

  const StarRating = () => (
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={Star}
          alt="star"
          className="w-5 h-5 mr-1 text-teal-500"
        />
      ))}
    </div>
  );

  const updateActiveByPosition = () => {
    const container = scrollRef.current;
    const cards = itemRefs.current.filter(Boolean);
    if (!container || cards.length === 0) return;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let nearest = 0;
    let nearestDist = Infinity;
    cards.forEach((el, idx) => {
      const cardCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(containerCenter - cardCenter);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = idx;
      }
    });
    setActiveIndex(nearest);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      if (rafLock.current) return;
      rafLock.current = true;
      requestAnimationFrame(() => {
        const lastCard = itemRefs.current[itemRefs.current.length - 1];
        if (lastCard) {
          const maxScrollLeft = lastCard.offsetLeft;
          if (container.scrollLeft > maxScrollLeft) {
            container.scrollLeft = maxScrollLeft;
          }
        }
        updateActiveByPosition();
        rafLock.current = false;
      });
    };

    updateActiveByPosition();
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveByPosition);
    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveByPosition);
    };
  }, []);

  const scrollToCard = (index) => {
    const container = scrollRef.current;
    const el = itemRefs.current[index];
    if (!container || !el) return;
    container.scrollTo({ left: el.offsetLeft, behavior: "smooth" });
  };

  const dotsCount = Math.ceil(testimonials.length / 2);

  return (
    <div className="min-h-140 py-8 sm:py-7 md:!pt-25 lg:!pb-26 px-4">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-![14px] md:!text-[54px] font-extrabold  text-center mb-8 sm:mb-12 !lg:mb-0"
          style={{ color: "#013A63" }}
        >
          Testimonials
        </h1>

        <div className="relative">
          <div
            ref={scrollRef}
            className="overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="flex space-x-4 sm:space-x-6 w-max">
              {testimonials.map((t, idx) => (
                <div
                  key={t.id}
                  ref={(el) => (itemRefs.current[idx] = el)}
                  className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 duration-300 w-[4%] sm:w-[4%] lg:w-[5.4%] xl:w-[7.4%] flex-shrink-0 mt-[45px] border border-[#BFBFBF]"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <StarRating />
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {t.text}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
                        {t.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {Array.from({ length: dotsCount }).map((_, index) => (
              <div
                key={index}
                onClick={() => scrollToCard(index * 2)}
                className={`cursor-pointer h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  Math.floor(activeIndex / 2) === index
                    ? "bg-teal-600 w-6 sm:w-8"
                    : "bg-gray-300 w-1.5 sm:w-2"
                }`}
                aria-label={`Go to testimonials group ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          @media (min-width: 640px) {
            .scrollbar-hide::-webkit-scrollbar {
              display: block;
              height: 6px;
            }
            .scrollbar-hide::-webkit-scrollbar-track {
              background: #f1f5f9;
              border-radius: 10px;
            }
            .scrollbar-hide::-webkit-scrollbar-thumb {
              background: #14b8a6;
              border-radius: 10px;
            }
            .scrollbar-hide::-webkit-scrollbar-thumb:hover {
              background: #0f766e;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
