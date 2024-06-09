"use client";
import { TParamsSearchFlights } from "@/app/main/home/page";
import React, { useState, useEffect, useRef } from "react";

interface IPropsAccordionFilter {
    params: TParamsSearchFlights;
    setParams: ({ filter }: TParamsSearchFlights) => void;
    initialMin: number;
    initialMax: number;
    min: number;
    max: number;
    step: number;
    priceCap: number;
}

const RangeSlider: React.FC<IPropsAccordionFilter> = ({
    params,
    setParams,
    initialMin = 0,
    initialMax = 0,
    min,
    max,
    step,
    priceCap,
}) => {
    const progressRef: any = useRef(null);
    const [minValue, setMinValue] = useState<number>(initialMin);
    const [maxValue, setMaxValue] = useState<number>(initialMax);

    useEffect(() => {
        setParams({
            filter: {
                ...params.filter,
                minPrice: minValue,
                maxPrice: maxValue,
            },
        });
    }, [minValue, maxValue]);

    const handleMin = (e: any) => {
        if (maxValue - minValue >= priceCap && maxValue <= max) {
            if (parseInt(e.target.value) > +maxValue) {
            } else {
                setMinValue(parseInt(e.target.value));
            }
        } else {
            if (parseInt(e.target.value) < minValue) {
                setMinValue(parseInt(e.target.value));
            }
        }
    };
    const handleMax = (e: any) => {
        if (maxValue - minValue >= priceCap && maxValue) {
            if (parseInt(e.target.value) < +minValue) {
            } else {
                setMaxValue(parseInt(e.target.value));
            }
        } else {
            if (parseInt(e.target.value) > maxValue) {
                setMaxValue(parseInt(e.target.value));
            }
        }
    };

    useEffect(() => {
        progressRef.current.style.left = (minValue / max) * step + "%";
        progressRef.current.style.right = step - (maxValue / max) * step + "%";
    }, [minValue, maxValue, max, step]);

    return (
        <div className="flex flex-col w-80  shadow-xl rounded px-6 py-4 space-y-3">
            <div className="flex justify-between text-[#6B6B6B]">
                <h1>Lowest</h1>
                <h1>Highest</h1>
            </div>
            <div className="slider relative h-1 rounded bg-gray-300">
                <div
                    className="progress absolute h-1 bg-blue-500 rounded"
                    ref={progressRef}
                ></div>
            </div>
            <div className="range-input relative">
                <input
                    onChange={handleMin}
                    type="range"
                    value={minValue}
                    min={min}
                    step={step}
                    max={max}
                    className="range-min absolute w-full -top-4 h-1 bg-transparent appearance-none pointer-events-none"
                />
                <input
                    onChange={handleMax}
                    type="range"
                    value={maxValue}
                    min={min}
                    step={step}
                    max={max}
                    className="range-max absolute w-full -top-4 h-1 bg-transparent appearance-none pointer-events-none"
                />
            </div>
            <div className="flex justify-between">
                <input
                    onChange={handleMin}
                    type="number"
                    value={minValue}
                    min={min}
                    step={step}
                    max={max}
                    className="w-16 bg-transparent outline-none text-[#2395FF] font-semibold"
                />
                <input
                    onChange={handleMax}
                    type="number"
                    value={maxValue}
                    min={min}
                    step={step}
                    max={max}
                    className=" w-16 bg-transparent outline-none text-[#2395FF] font-semibold"
                />
            </div>
        </div>
    );
};

export default RangeSlider;
