"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { PiUserCircleFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Navbar from "@/components/feature/layout/navbar";
import Footer from "@/components/feature/layout/footer";
import dayjs from "dayjs";
import useCustomQuery from "@/helpers/hooks/useCustomQuery";
import { ticketFlightFn } from "@/helpers/servers/booking_servers";
import AccordionBookingDetail from "@/components/accordionBookingDetail";
type TParamsSearchTicket = {
    limit: number;
    page: number;
    sort: string;
    filter: any;
};

const BookingPage = () => {
    const [params, setParams] = useState<TParamsSearchTicket>({
        limit: 25,
        page: 1,
        filter: { is_active: true },
        sort: "name",
    });

    const { data: allTicketBooking, isLoading } = useCustomQuery(
        "ticketList",
        params,
        ticketFlightFn
    );

    const RenderStatusPayment = (status: string) => {
        switch (status) {
            case "Pending":
                return (
                    <h1 className="p-2 w-48 text-center text-white font-medium rounded-lg bg-[#FF7F23]">
                        Waiting for payment
                    </h1>
                );
            case "Confirmed":
                return (
                    <h1 className="p-2 w-48 text-white text-center font-medium rounded-lg bg-[#4FCF4D]">
                        Confirmed
                    </h1>
                );
            case "Cancelled":
                return (
                    <h1 className="p-2 w-48 text-white text-center font-medium rounded-lg bg-[#F24545]">
                        Cancelled
                    </h1>
                );
        }
    };

    console.log(allTicketBooking?.data?.result, "ini cees");

    return (
        <main>
            <Navbar />
            <div className="bg-[#F5F6FA] w-full flex items-start ">
                <section className="m-10 w-3/12 flex flex-col justify-start py-10 shadow-xl rounded-2xl">
                    <div className="flex flex-col items-center">
                        <Image
                            alt="image user"
                            src={"/images/userPhoto.png"}
                            width={110}
                            height={100}
                            className="rounded-full border-2 border-[#2395FF]"
                        />
                        <Link
                            href={""}
                            className="border-[1px] border-blue-500 rounded-lg text-blue-600 px-7 py-2 font-semibold mt-5 hover:bg-blue-100 focus:bg-blue-100"
                        >
                            Select Photo
                        </Link>
                        <h1 className="text-2xl font-semibold pt-7">
                            {allTicketBooking?.data?.user?.name}
                        </h1>
                        <span className="flex items-center space-x-2 pt-1">
                            <FaLocationDot className="text-blue-600" />
                            <h1 className="text-[#6B6B6B]">Medan, Indonesia</h1>
                        </span>
                    </div>
                    <div className="pt-8 px-14 space-y-2">
                        <span className="flex justify-between">
                            <h1 className="text-lg font-semibold">Cards</h1>
                            <Link
                                href={""}
                                className="text-lg text-blue-600 font-semibold hover:text-blue-700 focus:text-blue-700"
                            >
                                +Add
                            </Link>
                        </span>
                        <span className="flex flex-col bg-[#2395FF] p-4 rounded-xl space-y-2 shadow-xl cursor-pointer hover:bg-blue-500 focus:bg-blue-500">
                            <h1 className="text-white text-xl font-semibold">
                                4441 1235 5512 5551
                            </h1>
                            <span className="flex justify-between text-white">
                                <h1>X Card</h1>
                                <h1>$ 1,440.2</h1>
                            </span>
                        </span>
                    </div>
                    <div className="px-20 space-y-5 py-10 hover:text-[#2395FF] focus:text-[#2395FF]">
                        <Link
                            href={""}
                            className="flex items-center gap-10 text-[#979797] hover:text-[#2395FF] focus:text-[#2395FF]"
                        >
                            <PiUserCircleFill className="text-4xl" />
                            <h1 className="text-xl font-semibold ">Profile</h1>
                            <IoIosArrowForward className="text-3xl font-semibold ml-20" />
                        </Link>
                        <Link
                            href={""}
                            className="flex items-center gap-10 text-[#979797] hover:text-[#2395FF] focus:text-[#2395FF]"
                        >
                            <FaStar className="text-4xl" />
                            <h1 className="text-xl font-semibold text-nowrap">
                                My Review
                            </h1>
                            <IoIosArrowForward className="text-3xl font-semibold ml-[38px]" />
                        </Link>
                        <Link
                            href={""}
                            className="flex items-center gap-10  text-[#979797] hover:text-[#2395FF] focus:text-[#2395FF]"
                        >
                            <IoSettingsSharp className="text-4xl" />
                            <h1 className="text-xl font-semibold text-nowrap">
                                Settings
                            </h1>
                            <IoIosArrowForward className="text-3xl font-semibold ml-[60px]" />
                        </Link>
                        <Link
                            href={"/auth/login"}
                            className="flex items-center gap-10 text-[#F24545] focus:text-[#F24545]"
                        >
                            <FaSignOutAlt className="text-4xl" />
                            <h1 className="text-xl font-semibold text-nowrap">
                                Logout
                            </h1>
                            <IoIosArrowForward className="text-3xl font-semibold ml-[72px]" />
                        </Link>
                    </div>
                </section>

                <section className="m-10 w-10/12 flex flex-col py-5 space-y-10">
                    <section className="w-full bg-white py-7 px-5 shadow-lg rounded-2xl">
                        <h1 className="text-sm text-[#2395FF] tracking-[7px]">
                            MY BOOKING
                        </h1>
                        <h1 className="text-3xl font-semibold">My Booking</h1>
                    </section>
                    {allTicketBooking?.data?.result.map(
                        (item: any, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className="w-full bg-white py-7 space-y-3 px-5 shadow-lg rounded-2xl hover:bg-slate-200 hover:transition-all hover:duration-200 hover:ease-in"
                                >
                                    <Link
                                        href={`/main/my-booking/${item?.ticket?.code}`}
                                    >
                                        <h1 className="text-base">
                                            {dayjs(
                                                item?.ticket?.takeoff
                                            ).format(
                                                "dddd, D MMMM YYYY - H:mm A"
                                            )}
                                        </h1>
                                        <span className="flex items-center gap-5">
                                            <h1 className="text-2xl font-semibold">
                                                {item?.ticket?.from?.code}
                                            </h1>
                                            <Image
                                                alt="image logo"
                                                src={"/images/logoGrey.png"}
                                                width={20}
                                                height={50}
                                                className="object-contain"
                                            />
                                            <h1 className="text-2xl font-semibold">
                                                {item?.ticket?.to?.code}
                                            </h1>
                                        </span>
                                        <h1 className="text-[#7A7A7A]">
                                            {item?.ticket?.airline?.name},
                                            <span className="pl-2">
                                                {item?.id}
                                            </span>
                                        </h1>
                                        <hr className="mt-5" />
                                    </Link>
                                    <div className="flex justify-between items-center w-full">
                                        <span className="flex w-96 justify-between items-center">
                                            <h1 className="text-[#7A7A7A]">
                                                Status
                                            </h1>
                                            <h1>
                                                {RenderStatusPayment(
                                                    item?.status?.name
                                                )}
                                            </h1>
                                        </span>
                                        <span className="text-blue-500 font-semibold">
                                            <AccordionBookingDetail
                                                label={"View Details"}
                                                fromAirport={
                                                    item?.ticket?.from?.name
                                                }
                                                fromTerminal={
                                                    item?.ticket?.from?.terminal
                                                }
                                                fromLatitude={
                                                    item?.ticket?.from?.latitude
                                                }
                                                fromLongtitude={
                                                    item?.ticket?.from
                                                        ?.longitude
                                                }
                                                fromLocation={
                                                    item?.ticket?.from?.location
                                                }
                                                toAirport={
                                                    item?.ticket?.to?.name
                                                }
                                                toTerminal={
                                                    item?.ticket?.to?.terminal
                                                }
                                                toLatitude={
                                                    item?.ticket?.to?.latitude
                                                }
                                                toLongtitude={
                                                    item?.ticket?.to?.longitude
                                                }
                                                toLocation={
                                                    item?.ticket?.to?.location
                                                }
                                            />
                                        </span>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </section>
            </div>
            <Footer />
        </main>
    );
};

export default BookingPage;
