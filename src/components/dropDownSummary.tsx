"use client";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const DropDownSummary = ({ title }: { title: string }) => {
    const LIST_SUMMARY = [
        {
            Summary: "Pro",
        },
        {
            Summary: "Years",
        },
        {
            Summary: "Monthly",
        },
        {
            Summary: "Weekly",
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative flex flex-col rounded">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="bg-white p-1 w-36 flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent text-gray-600 active:border-white duration-300 active:text-white"
            >
                {title}
                {!isOpen ? (
                    <IoIosArrowDown className="" />
                ) : (
                    <IoIosArrowUp className="" />
                )}
            </button>
            {isOpen && (
                <div className="bg-slate-200 absolute top-[50px] flex flex-col items-start rounded-lg p-2 space-y-2">
                    {LIST_SUMMARY?.map((item, index) => (
                        <div
                            key={index}
                            className="flex w-32 hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4 px-1"
                        >
                            <h3 className="font-semibold">{item?.Summary}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropDownSummary;
