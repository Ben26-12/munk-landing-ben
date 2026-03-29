import { useState, useEffect } from "react";

const REVIEWS = [
  {
    id: 1,
    name: "Resid",
    content: "super mockup. I received fast delivery, Shop is awsome",
    stars: 5,
  },
  { id: 2, name: "PTO", content: "i think it's very good", stars: 5 },
  { id: 3, name: "Audra", content: "Just what I was looking for...", stars: 5 },
  { id: 4, name: "Jazmin", content: "Perfect, thank you", stars: 4 },
];

const DISPLAY_REVIEWS = [...REVIEWS, ...REVIEWS];

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(2); // Mobile hiện 2
      } else {
        setItemsToShow(4); // Desktop hiện 4
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleTransitionEnd = () => {
    //
    if (currentIndex >= REVIEWS.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  return (
    <div
      id="testimonials"
      className="overflow-hidden w-full py-10 my-10 bg-gray-50"
    >
      <h1 className="text-4xl md:text-main-title  text-center font-thin text-main-text font-title my-10">
        WHAT OUR CUSTOMERS SAY
      </h1>
      <div
        className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {DISPLAY_REVIEWS.map((review, idx) => (
          <div key={idx} className="min-w-1/2 md:min-w-1/4 px-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
              {/* Tên đưa lên trên */}
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                    Verified Buyer
                  </p>
                </div>
                <div className="flex text-orange-400 text-sm">
                  {"★".repeat(review.stars)}
                </div>
              </div>

              {/* Nội dung review */}
              <p className="text-gray-600 text-sm leading-relaxed grow">
                {review.content}
              </p>

              <div className="mt-4 pt-4 border-t border-gray-50">
                <p className="text-xs text-gray-400 italic">7 months ago</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
