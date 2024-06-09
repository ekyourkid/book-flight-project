import React, { useState } from "react";

import { IoChevronForwardSharp, IoChevronDown } from "react-icons/io5";

const AccordionLanding = ({ label }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <div className="py-2">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between items-center w-full border-[1px] border-gray-200 rounded p-3"
            >
                <span className="text-lg font-medium">{label}</span>
                {accordionOpen ? (
                    <IoChevronDown className="text-blue-600" />
                ) : (
                    <IoChevronForwardSharp className="text-blue-600" />
                )}
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
                    accordionOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden pt-2 space-y-2 flex flex-col  ">
                    <div className="flex justify-between text-black cursor-pointer">
                        <h1 className="font-thin">Tuesday, 20 July 2020</h1>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className="flex justify-between text-black cursor-pointer">
                        <h1 className="font-thin">Weednesday, 20 July 2020</h1>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className="flex justify-between text-black cursor-pointer">
                        <h1 className="font-thin">Saturday, 20 July 2020</h1>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className="flex justify-between text-black cursor-pointer">
                        <h1 className="font-thin">Monday, 20 July 2020</h1>
                        <input type="checkbox" name="" id="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionLanding;
