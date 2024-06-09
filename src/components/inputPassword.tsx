"use client";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const InputPassword = ({ defaultValue = "", register, fieldName }) => {
    const [open, setOpen] = useState(false);
    // handle toggle
    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className="w-full mt-52 relative">
            <div className="w-full">
                <input
                    {...register(fieldName)}
                    defaultValue={defaultValue}
                    type={open === false ? "password" : "text"}
                    placeholder="Password"
                    className="w-full px-5 h-14 rounded-lg border-b-2 border-[#D2C2FFAD] focus:outline-[#2395FF]"
                />
            </div>
            <div className="text-2xl absolute top-4 right-5">
                {open === false ? (
                    <FaRegEyeSlash
                        onClick={toggle}
                        className="text-[#2395FF]"
                    />
                ) : (
                    <FaRegEye onClick={toggle} className="text-[#2395FF]" />
                )}
            </div>
        </div>
    );
};

export default InputPassword;
