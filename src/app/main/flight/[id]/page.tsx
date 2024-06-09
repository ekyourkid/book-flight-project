"use client";
import React from "react";
import Image from "next/image";
import { IoWarningSharp } from "react-icons/io5";
import { GoCheckCircle } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import ToggleSwitch from "@/components/toggleSwitch";
import useCustomQuery from "@/helpers/hooks/useCustomQuery";
import { fetchtFlightDetailFn } from "@/helpers/servers/flight_server";
import dayjs from "dayjs";
import { USDollar } from "@/helpers/utils/currencyFormat";
import Navbar from "@/components/feature/layout/navbar";
import Footer from "@/components/feature/layout/footer";
import { SubmitHandler, useForm } from "react-hook-form";
import useCustomMutation from "@/helpers/hooks/useCustomMutation";
import { bookingFlightFn } from "@/helpers/servers/booking_servers";
import { useRouter } from "next/navigation";
type BookingPayload = {
    title1: string;
    fullname1: string;
    nationality1: string;
    title2: string;
    fullname2: string;
    nationality2: string;
    email?: string;
    phone?: string;
};

const FindTicket = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const { data: flightDetailData, isLoading } = useCustomQuery(
        "flightDetail",
        params,
        (params?) => {
            if (params?.id) {
                return fetchtFlightDetailFn(params.id);
            }
            return Promise.resolve(undefined);
        }
    );

    const { mutation, isSuccess } = useCustomMutation(bookingFlightFn as any);
    const { register, handleSubmit, watch } = useForm<BookingPayload>();

    const onSubmit: SubmitHandler<BookingPayload> = async (data) => {
        try {
            const resp = await mutation.mutateAsync({
                id: params.id,
                payload: { ...data },
            });

            const bookingId = resp?.data?.data?.code as string;
            if (resp.status === 200) {
                router.push(`/main/booking/${bookingId}`);
            }
        } catch (error) {
            console.error(
                "An error occurred while submitting the form:",
                error
            );
        }
    };

    return (
        <main className="w-screen">
            <Navbar />
            <section className="bg-[#2395FF] w-full h-60 rounded-b-[30px] relative -z-10">
                <Image
                    src={"/images/vectorBg.png"}
                    width={298}
                    height={300}
                    alt="image vector background"
                    className="absolute -z-10"
                />
            </section>
            <section className="flex top-52 w-10/12 mx-48 space-x-5">
                {/* Contact Person Details */}
                <form onSubmit={handleSubmit(onSubmit)} className="w-8/12">
                    <div className="text-3xl font-semibold text-white">
                        <h1 className="text-slate-300">
                            Contact Person Details
                        </h1>
                    </div>
                    <div className="w-full px-10 py-5 rounded-t-3xl mt-8 space-y-8 bg-white">
                        <div className="w-full h-28 flex border-b-4 border-gray-300">
                            <div className="space-y-2">
                                <h1 className="text-gray-500 text-xl">Title</h1>
                                <select {...register("title1")}>
                                    <option value="Mr">female</option>
                                    <option value="Mrs">male</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h1 className="text-gray-500 text-xl">Name</h1>
                            <input
                                {...register("fullname1")}
                                type="text"
                                className="w-full h-12 p-5 text-lg border-b-4 border-gray-300 focus:outline-blue-500"
                                placeholder="Rizky Syahputra"
                            />
                        </div>
                        <div className="space-y-3">
                            <h1 className="text-gray-500 text-xl">Email</h1>
                            <input
                                {...register("email")}
                                type="email"
                                className="w-full h-12 p-5 text-lg border-b-4 border-gray-300 focus:outline-blue-500"
                                placeholder="Rizky Syahputra"
                            />
                        </div>
                        <div className="space-y-3">
                            <h1 className="text-gray-500 text-xl">
                                Phone Number
                            </h1>
                            <input
                                {...register("phone")}
                                type="tel"
                                className="w-full h-12 p-5 text-lg border-b-4 border-gray-300 focus:outline-blue-500"
                                placeholder="Rizky Syahputra"
                            />
                        </div>
                        <div className="w-full h-28 flex border-b-4 border-gray-300">
                            <div className="space-y-2">
                                <h1 className="text-gray-500 text-xl">
                                    Nation
                                </h1>
                                <select {...register("nationality1")}>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Mrs">male</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex items-center space-x-5">
                            <IoWarningSharp className="text-2xl text-red-600" />
                            <h1>Make sure the customer data is correct.</h1>
                        </div>
                    </div>
                    <div className="w-full mt-10">
                        <div className="text-3xl font-semibold text-black">
                            <h1>Passenger Details</h1>
                        </div>
                        <div className="w-full px-10 py-10 mt-8 space-y-8 bg-white ">
                            <div className="w-full p-5 flex items-center justify-between rounded-lg bg-[#2395FF1A]">
                                <span>
                                    <h1>Passenger: 1 Adult</h1>
                                </span>
                                <span className="flex items-center space-x-3">
                                    <h1>Same as contact person</h1>
                                    <ToggleSwitch />
                                </span>
                            </div>
                            <div className="w-full h-28 flex border-b-4 border-gray-300">
                                <div className="space-y-2">
                                    <h1 className="text-gray-500 text-xl">
                                        Title
                                    </h1>
                                    <select {...register("title2")}>
                                        <option value="Mr">female</option>
                                        <option value="Mrs">male</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h1 className="text-gray-500 text-xl">
                                    Full Name
                                </h1>
                                <input
                                    {...register("fullname2")}
                                    type="text"
                                    className="w-full h-12 p-5 text-lg border-b-4 border-gray-300 focus:outline-blue-500"
                                    placeholder="Mike Kowalski"
                                />
                            </div>
                            <div className="w-full h-28 flex border-b-4 border-gray-300">
                                <div className="space-y-2">
                                    <h1 className="text-gray-500 text-xl">
                                        Nation
                                    </h1>
                                    <select {...register("nationality2")}>
                                        <option value="Indonesia">
                                            Indonesia
                                        </option>
                                        <option value="Malaysia">
                                            Malaysia
                                        </option>
                                        <option value="Singapore">
                                            Singapore
                                        </option>
                                        <option value="Thailand">
                                            Thailand
                                        </option>
                                        <option value="Mrs">male</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-10">
                        <div className="text-3xl font-semibold text-black">
                            <h1>Passenger Details</h1>
                        </div>
                        <div className="w-full px-10 py-10 mt-8 space-y-8">
                            <div className="w-full p-5 flex flex-col space-y-5 rounded-lg bg-[#2395FF1A]">
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center space-x-4">
                                        <input type="checkbox" />
                                        <h1 className="text-lg">
                                            Travel Insurance
                                        </h1>
                                    </span>
                                    <span className="flex items-center">
                                        <h1 className="text-blue-600 font-semibold">
                                            $ 2,00
                                        </h1>
                                        <h2 className="text-gray-400">/pax</h2>
                                    </span>
                                </div>
                                <div>
                                    <h1 className="text-gray-600">
                                        Get travel compensation up to $
                                        10.000,00
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center mt-4">
                            <button
                                type="submit"
                                className="bg-[#2395FF] px-14 py-5 rounded-lg text-white font-bold text-lg shadow-lg"
                            >
                                Proceed to Payment
                            </button>
                        </div>
                    </div>
                </form>
                {/* Flight Details */}

                <div className=" w-4/12">
                    <div className="flex justify-between">
                        <h1 className="text-slate-300 text-3xl font-semibold">
                            Flight Details
                        </h1>
                        <h1 className="text-white text-2xl font-semibold">
                            View Details
                        </h1>
                    </div>
                    <div className="px-10 py-5 mt-8 w-full bg-white space-y-8 rounded-t-3xl">
                        <div className="flex items-center space-x-5">
                            <Image
                                src={flightDetailData?.data?.photo}
                                width={100}
                                height={100}
                                alt="item image photo user"
                            />
                            <h1 className="text-slate-800 font-semibold">
                                {flightDetailData?.data?.name}
                            </h1>
                        </div>
                        <div className="flex space-x-8">
                            <span>
                                <h1 className="text-sm text-nowrap">
                                    {flightDetailData?.data?.from?.location}
                                </h1>
                                <h1 className="text-xl">
                                    ({flightDetailData?.data?.from?.code})
                                </h1>
                            </span>
                            <Image
                                src={"/images/logoGrey.png"}
                                width={30}
                                height={10}
                                alt="image logo booking flight"
                                className="object-contain"
                            />
                            <span>
                                <h1 className="text-sm text-nowrap">
                                    {flightDetailData?.data?.to?.location}
                                </h1>
                                <h1 className="text-xl">
                                    ({flightDetailData?.data?.to?.code})
                                </h1>
                            </span>
                        </div>
                        <div className="text-[#6B6B6B]">
                            <h2>
                                {dayjs(flightDetailData?.data?.takeoff).format(
                                    "dddd,D MMMM YYYY"
                                )}
                            </h2>
                            <h2 className="space-x-2">
                                {dayjs(flightDetailData?.data?.landing).format(
                                    "hh:mm A"
                                )}
                                -
                                {dayjs(flightDetailData?.data?.landing).format(
                                    "hh:mm A"
                                )}
                            </h2>
                        </div>
                        <div>
                            <span className="flex items-center space-x-2 text-lg text-blue-600">
                                <GoCheckCircle />
                                <h1>Refundable</h1>
                            </span>
                            <span className="flex items-center space-x-2 text-lg text-blue-600">
                                <GoCheckCircle />
                                <h1>Can reschedule</h1>
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-xl">
                                <h1>Total Payment</h1>
                            </span>
                            <span className="flex items-center space-x-3 text-2xl text-blue-600 font-semibold">
                                <h1>
                                    {USDollar.format(
                                        flightDetailData?.data?.price
                                    )}
                                </h1>
                                <IoIosArrowDown />
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default FindTicket;
