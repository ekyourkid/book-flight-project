"use client";
import React from "react";

const Input = ({
    type,
    placeholder,
    defaultValue = "",
    register,
    fieldName,
}) => {
    return (
        <div className="w-full mt-52 relative">
            <div className="w-full">
                <input
                    {...register(fieldName)}
                    defaultValue={defaultValue}
                    type={type}
                    placeholder={placeholder}
                    className="w-full px-5 h-14 rounded-lg border-b-2 border-[#D2C2FFAD] focus:outline-[#2395FF]"
                />
            </div>
        </div>
    );
};

export default Input;
