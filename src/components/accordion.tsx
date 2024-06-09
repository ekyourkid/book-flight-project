import { TParamsSearchFlights } from "@/app/main/home/page";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface IPropsAccordionFilter {
    label: string;
    params: TParamsSearchFlights;
    setParams: ({ filter }: TParamsSearchFlights) => void;
    options: { id: number; name: string }[];
    fieldKey: "facilities" | "airlineId";
}

const Accordion: React.FC<IPropsAccordionFilter> = ({
    label,
    params,
    setParams,
    options,
    fieldKey,
}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-2">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between w-full"
            >
                <span className="text-lg font-semibold">{label}</span>
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
                <div className="overflow-hidden pt-2 space-y-2 flex flex-col ">
                    {options?.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between text-black"
                        >
                            <h1>{item?.name}</h1>
                            <input
                                type="checkbox"
                                checked={params.filter[fieldKey]?.includes(
                                    String(item?.id)
                                )}
                                value={item?.id}
                                onChange={(e) => {
                                    if (
                                        params.filter[fieldKey]?.includes(
                                            String(e.target.value)
                                        )
                                    ) {
                                        const newArray = [
                                            ...params.filter[fieldKey],
                                        ];
                                        const index = params.filter[
                                            fieldKey
                                        ].indexOf(e.target.value);
                                        if (index > -1) {
                                            // only splice array when item is found
                                            newArray.splice(index, 1); // 2nd parameter means remove one item only
                                        }
                                        // if exist remove from array
                                        setParams({
                                            filter: {
                                                ...params.filter,
                                                [fieldKey]: newArray,
                                            },
                                        });
                                    } else {
                                        // if not exist add to array
                                        setParams({
                                            filter: {
                                                ...params.filter,
                                                [fieldKey]: [
                                                    ...params?.filter[fieldKey],
                                                    e.target.value,
                                                ],
                                            },
                                        });
                                    }
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
