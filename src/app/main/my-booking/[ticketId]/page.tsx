"use client";

import React from "react";
import Image from "next/image";
import DropDownSetting from "@/components/dropDownSetting";
import Navbar from "@/components/feature/layout/navbar";
import Footer from "@/components/feature/layout/footer";
import { useBarcode } from "next-barcode";

const BookingPassportPage = ({ params }: { params: { ticketId: string } }) => {
    const { ticketId } = params;
    const { inputRef } = useBarcode({
        value: ticketId,
        options: {
            width: 0.9,
            format: "CODE128",
            displayValue: false,
            background: "#ffff",
        },
    });

    return (
        <main>
            <Navbar />

            <div className="bg-[#2395FF] w-full flex justify-center items-center">
                <section className="m-10 w-9/12 bg-white flex justify-center space-x-10 py-20 shadow-xl rounded-2xl">
                    <div className="w-8/12">
                        <span className="flex items-center justify-between">
                            <h1 className="text-4xl font-semibold">
                                Booking Pass
                            </h1>
                            <DropDownSetting />
                        </span>
                        <section className=" border-2 border-slate-300 rounded-xl mt-10 flex justify-between">
                            <div className="flex flex-col px-20 py-10 space-y-10">
                                <div className="flex items-center space-x-7 ">
                                    <Image
                                        alt="image logo maskapai"
                                        src={"/images/logoMask.png"}
                                        width={150}
                                        height={150}
                                    />
                                    <span className="flex items-center gap-5">
                                        <h1 className="text-4xl font-semibold">
                                            IDN
                                        </h1>
                                        <Image
                                            alt="image logo"
                                            src={"/images/logoGrey.png"}
                                            width={30}
                                            height={50}
                                            className="object-contain"
                                        />
                                        <h1 className="text-4xl font-semibold">
                                            JPN
                                        </h1>
                                    </span>
                                </div>
                                <div className="flex justify-between w-80">
                                    <span>
                                        <h1 className="text-gray-500 text-base">
                                            Code
                                        </h1>
                                        <h1>AB-221</h1>
                                    </span>
                                    <span>
                                        <h1 className="text-gray-500 text-base">
                                            Class
                                        </h1>
                                        <h1>Economy</h1>
                                    </span>
                                </div>
                                <div className=" flex justify-between w-[290px]">
                                    <span>
                                        <h1 className="text-gray-500 text-base">
                                            Terminal
                                        </h1>
                                        <h1>A</h1>
                                    </span>
                                    <span>
                                        <h1 className="text-gray-500 text-base">
                                            Gate
                                        </h1>
                                        <h1>221</h1>
                                    </span>
                                </div>
                                <div className="flex justify-between w-96">
                                    <span>
                                        <h1 className="text-gray-500 text-base">
                                            Deparature
                                        </h1>
                                        <h1>Monday, 20 July `20 - 12:33</h1>
                                    </span>
                                </div>
                            </div>
                            <div className="border-l-2 border-dotted border-slate-300 w-72 flex items-center">
                                <section className="text-base -rotate-90 text-center flex flex-col pb-32 ">
                                    <canvas ref={inputRef} />
                                    {ticketId}
                                </section>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
};

export default BookingPassportPage;
