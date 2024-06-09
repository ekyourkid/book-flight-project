"use client";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { CiAirportSign1 } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { TbWorldLatitude } from "react-icons/tb";
import { TbWorldLongitude } from "react-icons/tb";
import { GoArrowUpRight } from "react-icons/go";

const AccordionBookingDetail = ({
    label,
    fromAirport,
    fromTerminal,
    fromLatitude,
    fromLongtitude,
    fromLocation,
    toAirport,
    toTerminal,
    toLatitude,
    toLongtitude,
    toLocation,
}: any) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <div className=" w-full">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex gap-x-7 items-center w-full"
            >
                <span className="text-lg font-semibold flex justify-end w-full">
                    {label}
                </span>
                {accordionOpen ? (
                    <IoIosArrowUp className="text-blue-600" />
                ) : (
                    <IoIosArrowDown className="text-blue-600" />
                )}
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
                    accordionOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden pt-2 space-y-2 flex flex-col border-b-8 border-blue-300 rounded w-full p-5">
                    <div className="pt-3 space-x-5 flex justify-around">
                        <div className="bg-white shadow-lg w-96 space-y-2 p-3 rounded-lg">
                            <h1 className="pb-3 font-semibold text-black">
                                From
                            </h1>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-x-2">
                                    <CiAirportSign1 className="text-2xl" />
                                    <h1 className="text-sm font-medium">
                                        Airport
                                    </h1>
                                </span>
                                <span className="text-xs font-semibold">
                                    {fromAirport}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-x-2">
                                    <GoArrowUpRight className="text-2xl" />
                                    <h1 className="text-sm font-medium">
                                        Terminal
                                    </h1>
                                </span>
                                <span className="text-xs font-semibold">
                                    {fromTerminal}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-x-2">
                                    <FaLocationDot className="text-2xl" />
                                    <h1 className="text-sm font-medium">
                                        Location
                                    </h1>
                                </span>
                                <span className="text-xs font-semibold">
                                    {fromLocation}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-x-2">
                                    <TbWorldLatitude className="text-2xl" />
                                    <h1 className="text-sm font-medium">
                                        Latitude
                                    </h1>
                                </span>
                                <span className="text-xs font-semibold">
                                    {fromLatitude}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-x-2">
                                    <TbWorldLongitude className="text-2xl" />
                                    <h1 className="text-sm font-medium">
                                        Longitude
                                    </h1>
                                </span>
                                <span className="text-xs font-semibold">
                                    {fromLongtitude}
                                </span>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg w-96 space-y-2 p-3 rounded-lg">
                            <h1 className="pb-3 font-semibold text-black">
                                To
                            </h1>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-x-2">
                                    <CiAirportSign1 className="text-2xl" />
                                    <h1 className="text-sm font-medium">
                                        Airport
                                    </h1>
                                </span>
                                <span className="text-xs font-semibold">
                                    {toAirport}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-x-2">
                                    <GoArrowUpRight className="text-2xl" />
                                    <h1 className="text-sm font-medium">
                                        Terminal
                                    </h1>
                                </span>
                                <span className="text-xs font-semibold">
                                    {toTerminal}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-x-2">
                                    <FaLocationDot className="text-2xl" />
                                    <h1 className="text-sm font-medium">
                                        Location
                                    </h1>
                                </span>
                                <span className="text-xs font-semibold">
                                    {toLocation}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-x-2">
                                    <TbWorldLatitude className="text-2xl" />
                                    <h1 className="text-sm font-medium">
                                        Latitude
                                    </h1>
                                </span>
                                <span className="text-xs font-semibold">
                                    {toLatitude}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-x-2">
                                    <TbWorldLongitude className="text-2xl" />
                                    <h1 className="text-sm font-medium">
                                        Longitude
                                    </h1>
                                </span>
                                <span className="text-xs font-semibold">
                                    {toLongtitude}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionBookingDetail;
