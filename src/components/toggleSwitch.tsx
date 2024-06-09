"use client";
import React from "react";

const ToggleSwitch = () => {
    return (
        <label
            htmlFor="toggleSwitch"
            className="flex items-center justify-center"
        >
            <input
                type="checkbox"
                id="toggleSwitch"
                className="cursor-pointer h-5 w-12 rounded-full appearance-none bg-white bg-opacity-5 border-blue-300 border-2 checked:bg-gray-600 transition duration-200 relative"
            />
        </label>
    );
};

export default ToggleSwitch;
