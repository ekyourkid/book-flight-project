"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { HiArrowsRightLeft } from "react-icons/hi2";
import Image from "next/image";
import { BsArrowClockwise } from "react-icons/bs";
import AccordionLanding from "./accordionLanding";
import AccordionLanding2 from "./accordionLanding2";
import AccordionLanding3 from "./accordionLanding3";
import { GoArrowRight } from "react-icons/go";

const DropDownLanding = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative flex flex-col rounded">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="  w-fit flex items-center justify-between font-medium tracking-wider border-transparent hover:border-b-2 hover:border-b-blue-600 focus:border-b-2 focus:border-b-blue-600  duration-300"
            >
                {title}
            </button>
            {isOpen && (
                <div className="bg-white shadow-lg absolute top-[74px] -right-48 flex flex-col items-start rounded-lg p-2">
                    <div className="flex flex-col space-y-5 w-80 px-5 py-5">
                        <div className="w-full space-y-1">
                            <h3 className="font-semibold">Hey,</h3>
                            <h3 className="font-semibold">
                                Where you want to go?
                            </h3>
                            <span className="flex items-center justify-between text-[#2395FF] font-medium pt-4">
                                <h1>Recently Searched</h1>
                                <IoIosArrowForward className="text-lg" />
                            </span>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg w-full flex items-center justify-between p-3">
                            <span className="">
                                <h1 className="text-xs text-[#979797]">from</h1>
                                <h1 className="text-xl font-semibold">Medan</h1>
                                <h1 className="text-sm font-light">
                                    Indonesia
                                </h1>
                            </span>
                            <span>
                                <HiArrowsRightLeft className="text-2xl font-bold text-[#2395FF]" />
                            </span>
                            <span className="text-end">
                                <h1 className="text-xs text-[#979797]">To</h1>
                                <h1 className="text-xl font-semibold">Tokyo</h1>
                                <h1 className="text-sm font-light">Japan</h1>
                            </span>
                        </div>
                        <div className="w-full flex justify-between">
                            <button className="flex items-center space-x-2 text-[#595959] bg-[#F0F0F0] px-4 py-2 rounded-lg hover:bg-[#2395FF] hover:text-white focus:bg-[#2395FF] focus:text-white active:bg-[#2395FF] active:text-white">
                                <Image
                                    src={"/images/vectorSM.png"}
                                    width={20}
                                    height={50}
                                    alt="image vector"
                                    className="border-b-2 pb-1 text-[#595959]"
                                />
                                <h1 className="hover:text-white font-semibold">
                                    One way
                                </h1>
                            </button>
                            <button className="flex items-center space-x-2 text-[#595959] bg-[#F0F0F0] px-4 py-2 rounded-lg hover:bg-[#2395FF] hover:text-white focus:bg-[#2395FF] focus:text-white active:bg-[#2395FF] active:text-white">
                                <BsArrowClockwise className="text-lg" />
                                <h1 className="hover:text-white font-semibold text-nowrap">
                                    Round trip
                                </h1>
                            </button>
                        </div>
                        <div>
                            <div>
                                <h1 className="text-slate-500">Departure</h1>
                                <AccordionLanding
                                    label={"Monday, 20 July 2020"}
                                />
                            </div>
                            <div>
                                <h1 className="text-slate-500">
                                    How many person?
                                </h1>
                                <span className="flex justify-between space-x-3">
                                    <AccordionLanding2 label={"2 Child"} />
                                    <AccordionLanding3 label={"4 Adult"} />
                                </span>
                            </div>
                            <div className="w-full py-2 space-y-1">
                                <h1 className="text-[#6B6B6B]">
                                    Which class do you want?
                                </h1>
                                <span className="flex justify-between w-full">
                                    <span className="flex items-center gap-1 text-black cursor-pointer">
                                        <input type="radio" name="" id="" />
                                        <h1 className="font-normal">Economy</h1>
                                    </span>
                                    <span className="flex items-center gap-1 text-black cursor-pointer">
                                        <input type="radio" name="" id="" />
                                        <h1 className="font-normal">
                                            Business
                                        </h1>
                                    </span>
                                    <span className="flex items-center gap-1 text-black cursor-pointer">
                                        <input type="radio" name="" id="" />
                                        <h1 className="font-normal">
                                            First Class
                                        </h1>
                                    </span>
                                </span>
                            </div>
                            <div className=" pt-5">
                                <button className="flex items-center justify-between bg-[#2395FF] w-full px-6 py-3 rounded-lg hover:bg-blue-800 focus:bg-blue-800 active:bg-blue-800 shadow-lg ">
                                    <h1 className="text-white font-bold">
                                        SEARCH FLIGHT
                                    </h1>
                                    <GoArrowRight className="text-white font-semibold text-3xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropDownLanding;
