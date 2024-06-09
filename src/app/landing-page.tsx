import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Carousel from "@/components/carousel";
import NavbarLanding from "@/components/feature/layout/navbarLanding";
import FooterLanding from "@/components/feature/layout/footerLanding";

const LandingPage = () => {
    const ListTrending = [
        {
            img: "/images/imgTrending.png",
            city: "Tokyo",
            nation: "Japan",
            airlines: 10,
        },
        {
            img: "/images/imgTrending.png",
            city: "Barcelona",
            nation: "Spain",
            airlines: 2,
        },
        {
            img: "/images/imgTrending.png",
            city: "Seoul",
            nation: "South Korea",
            airlines: 12,
        },
        {
            img: "/images/imgTrending.png",
            city: "Honolulu",
            nation: "Hawai",
            airlines: 5,
        },
        {
            img: "/images/imgTrending.png",
            city: "Hongkong",
            nation: "China",
            airlines: 7,
        },
        {
            img: "/images/imgTrending.png",
            city: "London",
            nation: "England",
            airlines: 13,
        },
        {
            img: "/images/imgTrending.png",
            city: "Everest",
            nation: "Nepal",
            airlines: 9,
        },
        {
            img: "/images/imgTrending.png",
            city: "Jakarta",
            nation: "Indonesia",
            airlines: 20,
        },
        {
            img: "/images/imgTrending.png",
            city: "Berlin",
            nation: "German",
            airlines: 15,
        },
    ];

    return (
        <main>
            <NavbarLanding />
            <section className="w-full flex justify-between">
                <div className="w-7/12">
                    <div className="px-20 py-24 space-y-4">
                        <h1 className="text-6xl text-[#414141] font-semibold ">
                            Find your{" "}
                            <span className="text-[#2395FF]">Flight</span>
                        </h1>
                        <h1 className="text-[#979797] text-xl">
                            and explore the world with us
                        </h1>
                    </div>
                    <div>
                        <Image
                            src={"/images/imgLanding1.png"}
                            height={1000}
                            width={1000}
                            alt="book flight landing image"
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className="w-4/12 space-y-20">
                    <div className="flex justify-end ">
                        <Image
                            src={"/images/imgLanding2.png"}
                            height={600}
                            width={600}
                            alt="book flight landing image"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src={"/images/blobMaker.png"}
                            height={300}
                            width={300}
                            alt="book flight landing image"
                        />
                    </div>
                </div>
            </section>
            <section className="w-10/12 mx-auto mt-32">
                <div className="flex justify-between items-end w-full">
                    <span>
                        <h1 className="tracking-[10px] text-base font-medium text-[#2395FF]">
                            TRENDING
                        </h1>
                        <h1 className="text-3xl font-semibold">
                            Trending destinations
                        </h1>
                    </span>
                    <span>
                        <Link
                            href={""}
                            className="text-[#2395FF] font-semibold text-xl"
                        >
                            View all
                        </Link>
                    </span>
                </div>
                <div className="pt-7 flex overflow-x-scroll no-scrollbar space-x-10 w-full">
                    {ListTrending.map((item, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    backgroundImage: `url(${item.img})`,
                                }}
                                className="bg-cover rounded-2xl w-full h-72"
                            >
                                <div className="flex flex-col justify-between h-full p-5">
                                    <span className="flex bg-[#FFFFFF69] text-[#FFFFFF] px-5 py-1 rounded-full w-full space-x-2">
                                        <h1 className="text-[#FFFFFF] font-semibold">
                                            {item.airlines}
                                        </h1>
                                        <h1 className="font-light">Airlines</h1>
                                    </span>
                                    <span className="flex justify-between items-center w-full">
                                        <span className="text-[#FFFFFF] font-semibold">
                                            <h2 className="text-lg">
                                                {item.city},
                                            </h2>
                                            <h1 className="text-xl text-nowrap ">
                                                {item.nation}
                                            </h1>
                                        </span>
                                        <span className="bg-[#FFFFFF2B] p-2 ml-10 rounded-full text-lg font-bold text-white">
                                            <IoIosArrowForward />
                                        </span>
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div
                    style={{
                        backgroundImage: `url('/images/bgLanding.png')`,
                    }}
                    className="bg-cover rounded-2xl w-[100%] h-[790px] object-center mt-40 flex flex-col justify-center items-center"
                >
                    <span className="text-center text-white">
                        <h2 className="tracking-[5px] text-xl">TOP 10</h2>
                        <h1 className="text-3xl font-semibold">
                            Top 10 destinations
                        </h1>
                    </span>
                    <div className="flex items-center">
                        <Carousel />
                    </div>
                </div>
            </section>
            <FooterLanding />
        </main>
    );
};

export default LandingPage;
