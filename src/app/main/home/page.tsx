"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiTransfer } from "react-icons/bi";
import { LuArrowUpDown } from "react-icons/lu";
import Accordion from "@/components/accordion";
import RangeSlider from "@/components/rangeSlider";
import { FaBurger } from "react-icons/fa6";
import { BsFillSuitcaseFill } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import useCustomQuery from "@/helpers/hooks/useCustomQuery";
import { fetchFlightFn } from "@/helpers/servers/flight_server";
import dayjs from "dayjs";
import { USDollar } from "@/helpers/utils/currencyFormat";
import Navbar from "@/components/feature/layout/navbar";
import Footer from "@/components/feature/layout/footer";
import AccordionTicketDetail from "@/components/accordionTicketDetail";
import { facilitiesFetchFn } from "@/helpers/servers/facilitiesServer";
import { getAirlinesListFn } from "@/helpers/servers/arilinesServer";

export type TParamsSearchFlights = {
    filter: {
        facilities: string[];
        airlineId: string[];
        minPrice: number;
        maxPrice: number;
    };
};

const defaultParams = {
    filter: { facilities: [], airlineId: [], minPrice: 0, maxPrice: 0 },
};

const HomePage = () => {
    const [params, setParams] = useState<TParamsSearchFlights>({
        filter: { facilities: [], airlineId: [], minPrice: 0, maxPrice: 0 },
    });

    const { data: facilities } = useCustomQuery(
        "facilitiesList",
        params,
        facilitiesFetchFn
    );
    const { data: airlines } = useCustomQuery(
        "airlinesList",
        params,
        getAirlinesListFn
    );

    const {
        data: allFlights,
        isLoading,
        refetch,
    } = useCustomQuery("flightList", params, fetchFlightFn);

    const RenderFacilities = (facility: string) => {
        switch (facility) {
            case "baggage":
                return <BsFillSuitcaseFill />;
            case "meal":
                return <FaBurger />;
            case "wifi":
                return <FaWifi />;
        }
    };
    const resetParams = async () => {
        setParams(defaultParams);
        await refetch();
    };

    useEffect(() => {
        (async () => {
            await refetch();
        })();
    }, [params, refetch]);

    return (
        <main className="w-full">
            <Navbar />
            <section className="bg-[#2395FF] h-60 rounded-b-[30px] relative -z-10">
                <Image
                    src={"/images/vectorBg.png"}
                    width={298}
                    height={300}
                    alt="image vector background"
                    className="absolute -z-10"
                />
                <div className=" ml-44 w-10/12 h-full flex justify-between items-center z-10">
                    <div className="flex items-center space-x-5 ">
                        <div className="flex items-center">
                            <Image
                                src={"/images/vectorSM.png"}
                                alt="image vector background"
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-white">
                                <h1>From</h1>
                                <h1>To</h1>
                            </div>
                            <div className="flex justify-between text-2xl text-white font-semibold">
                                <h1>Medan (IDN)</h1>
                                <BiTransfer className="text-3xl" />
                                <h1>Tokyo (JPN)</h1>
                            </div>
                            <div className="space-x-5 text-sm text-white font-normal">
                                <span>Monday, 20 July 2020</span>
                                <span>6 Passenger</span>
                                <span>Economy</span>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-xl text-white font-semibold">
                        Change Search
                    </h1>
                </div>
            </section>

            {/* Filter Section */}
            <section className="w-11/12 mx-auto mt-10 flex space-x-7">
                <div className="w-96 border-2 border-gray-200 rounded-md p-5">
                    <div className="flex justify-between">
                        <button className="text-xl font-semibold">
                            Filter
                        </button>
                        <button
                            onClick={() => resetParams()}
                            className="text-base font-medium text-blue-600"
                        >
                            Reset
                        </button>
                    </div>

                    {/* Sidebar Filter Section */}
                    <div className="w-80 mx-auto mt-5">
                        <div className="space-y-3">
                            <Accordion
                                fieldKey="facilities"
                                label={"Facilities"}
                                params={params}
                                setParams={setParams}
                                options={facilities?.data}
                            />
                            <Accordion
                                fieldKey="airlineId"
                                label={"Airlines"}
                                params={params}
                                setParams={setParams}
                                options={airlines?.data}
                            />
                            <div className="flex justify-between w-full">
                                <h1 className="text-lg font-semibold">
                                    Ticket Price
                                </h1>
                            </div>
                            <RangeSlider
                                params={params}
                                setParams={setParams}
                                initialMin={100}
                                initialMax={5000}
                                min={200}
                                max={10000}
                                step={100}
                                priceCap={1000}
                            />
                        </div>
                    </div>

                    {/* Main section */}
                </div>
                <div className="border-2 border-gray-200 rounded-md p-5 w-9/12 ">
                    <div className="w-full flex justify-between">
                        <h1 className="text-xl font-semibold">
                            Select Ticket
                            <span className="pl-2 text-base text-gray-500 font-normal">
                                (6 flight found)
                            </span>
                        </h1>
                        <button className="flex items-center w-fit text-xl font-semibold">
                            Sort by
                            <span className="pl-2">
                                <LuArrowUpDown className="text-2xl" />
                            </span>
                        </button>
                    </div>

                    {isLoading === false && !allFlights?.data?.length && (
                        <div>data not found</div>
                    )}
                    {isLoading ? (
                        <div className="w-full h-60 border border-gray-200 flex items-center justify-center rounded-md bg-gray-100 animate-pulse">
                            ...loading
                        </div>
                    ) : (
                        allFlights?.data?.map((item: any, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className=" rounded mt-10 w-full px-10 flex flex-col py-5 space-y-6 hover:bg-slate-100 hover:transition-all hover:duration-200 hover:ease-in"
                                >
                                    <div className="flex items-center space-x-5 text-base text-gray-800">
                                        <Image
                                            alt="item photo flight"
                                            src={item?.photo}
                                            width={110}
                                            height={110}
                                        />
                                        <h1>{item?.name}</h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="">
                                            <span className="flex justify-between w-44">
                                                <h1 className="text-3xl">
                                                    {item?.from?.code}
                                                </h1>
                                                <Image
                                                    src={"/images/logoGrey.png"}
                                                    width={20}
                                                    height={5}
                                                    alt="image background"
                                                    className="object-contain"
                                                />
                                                <h1 className="text-3xl">
                                                    {item?.to?.code}
                                                </h1>
                                            </span>
                                            <span className="text-sm flex justify-between w-40 text-gray-500">
                                                <h2>
                                                    {dayjs(item.takeoff).format(
                                                        "hh:mm A"
                                                    )}
                                                </h2>
                                                <h2>
                                                    {dayjs(item.landing).format(
                                                        "hh:mm A"
                                                    )}
                                                </h2>
                                            </span>
                                        </div>
                                        <div className="text-gray-700 text-center text-lg w-fit ">
                                            <h1>{item?.interval_time}</h1>
                                            <p>({item?.transit}) transit</p>
                                        </div>
                                        <div className="flex gap-x-10">
                                            <div className="flex items-center text-gray-500 text-3xl space-x-5">
                                                {item?.facilities?.map(
                                                    (facility: any) => {
                                                        return RenderFacilities(
                                                            facility
                                                        );
                                                    }
                                                )}
                                            </div>
                                            <div className="flex items-center space-x-14">
                                                <h1 className="text-[#2395FF] text-lg">
                                                    {USDollar.format(
                                                        item?.price
                                                    )}
                                                    <span className="text-gray-400 text-base">
                                                        /pax
                                                    </span>
                                                </h1>
                                                <Link
                                                    href={`/main/flight/${item?.code}`}
                                                    className="text-white rounded-lg shadow-xl font-bold bg-[#2395FF] px-10 py-3 hover:bg-blue-600 transition-all ease-out focus:bg-blue-600"
                                                >
                                                    Select
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center text-blue-500 font-semibold">
                                        <AccordionTicketDetail
                                            label={"View Details"}
                                            data={item}
                                        />
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default HomePage;
