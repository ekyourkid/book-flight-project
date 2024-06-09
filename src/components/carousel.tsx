"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function Carousel({
    autoSlide = false,
    autoSlideInterval = 2000,
}) {
    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, []);

    const slides = [
        {
            img: "/images/imgTrending.png",
            nation: "England",
        },
        {
            img: "/images/imgTrending.png",
            nation: "India",
        },
        {
            img: "/images/imgTrending.png",
            nation: "Nepal",
        },
        {
            img: "/images/imgTrending.png",
            nation: "Hawai",
        },
        {
            img: "/images/imgTrending.png",
            nation: "Thailand",
        },
        {
            img: "/images/imgTrending.png",
            nation: "Singapore",
        },
        {
            img: "/images/imgTrending.png",
            nation: "German",
        },
        {
            img: "/images/imgTrending.png",
            nation: "Spain",
        },
    ];
    return (
        <div className="overflow-hidden relative flex flex-col items-center justify-center w-full mx-auto">
            <div className="flex items-center h-80 space-x-8 ">
                {slides.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="transition-transform ease-out duration-500 flex flex-col items-center gap-y-3"
                            style={{ transform: `translateX(-${curr * 118}%)` }}
                        >
                            <Image
                                src={item.img}
                                alt="item image"
                                width={160}
                                height={160}
                                className="rounded-full w-40 h-40 border-4 border-white p-2"
                            />
                            <h1 className="text-white">{item.nation}</h1>
                        </div>
                    );
                })}
            </div>
            <div className=" space-x-16">
                <button onClick={prev}>
                    <FaChevronLeft
                        size={40}
                        className="text-white border-2 px-3 rounded-xl hover:bg-white hover:text-blue-600 focus:bg-white focus:text-blue-600"
                    />
                </button>
                <button onClick={next}>
                    <FaChevronRight
                        size={40}
                        className="text-white border-2 px-3 rounded-xl hover:bg-white hover:text-blue-600 focus:bg-white focus:text-blue-600"
                    />
                </button>
            </div>
        </div>
    );
}
