"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

function CoursePage({ title, description }: any) {
  return (
    <div>
      <div className="flex flex-col items-center gap-7">
        {" "}
        <div className="gradient1"></div>
        <div className="flex flex-wrap border border-white rounded-2xl p-2 m-2 mx-5 my-5 w-10/12">
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full bg-black p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-white text-lg font-medium">{title}</h2>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-white">
                  {description}
                </p>
                <a
                  href="#"
                  className="mt-3 text-white hover:text-blue-600 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
function App() {
  return (
    <div className="flex flex-col items-center gap-7">
      <h1 className="z-10 text-center mt-4 lg:text-6xl md:text-5xl text-4xl font-extrabold lg:w-[56rem] md:w-[40rem] w-[22rem] md:leading-normal leading-tight">
        Explore <span className="gradText1 leading-snug"> Freemium </span>
        Courses!
      </h1>
      <div className="flex flex-wrap justify-center mt-10">
        <CoursePage
          title="Feature 1"
          description="Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
        />
        <CoursePage
          title="Feature 2"
          description="Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet."
        />
        <CoursePage
          title="Feature 3"
          description="Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet."
        />
        <CoursePage
          title="Feature 3"
          description="Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet."
        />
        <CoursePage
          title="Feature 3"
          description="Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet."
        />
        <CoursePage
          title="Feature 3"
          description="Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet."
        />
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}
