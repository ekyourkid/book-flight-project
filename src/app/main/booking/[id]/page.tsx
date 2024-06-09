"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCreditCard } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import DropDownSummary from "@/components/dropDownSummary";
import { WiTime7 } from "react-icons/wi";
import Navbar from "@/components/feature/layout/navbar";
import Footer from "@/components/feature/layout/footer";
import useCustomMutation from "@/helpers/hooks/useCustomMutation";
import { putStatusPayment } from "@/helpers/servers/statusServer";
import { useRouter } from "next/navigation";

const StatusPaymentPage = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const { mutation } = useCustomMutation(putStatusPayment as any);

    const changeStatus = async () => {
        try {
            const response = await mutation.mutateAsync({
                id: params?.id,
                payload: { statusId: "2" },
            });
            if (response.status === 200) {
                router.push("/main/my-booking");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main>
            <Navbar />
            <div className="bg-[#2395FF] w-full flex justify-center items-center">
                <section className="m-10 w-9/12 bg-white flex justify-center space-x-10 py-10">
                    <div className="w-5/12">
                        <span>
                            <h1 className="font-medium text-lg">
                                Payment Method
                            </h1>
                        </span>
                        <div className="pl-5 pt-5 space-y-10">
                            <div className="bg-slate-200 p-2 rounded">
                                <div className="flex justify-between">
                                    <h1>Paypal</h1>
                                    <Image
                                        src={"/images/paypall.png"}
                                        width={50}
                                        height={50}
                                        alt="image paypall payment"
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>
                                        <h1>Credit Card</h1>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                        <Image
                                            src={"/images/mastercard.png"}
                                            width={40}
                                            height={40}
                                            alt="image mastercard payment"
                                            className="bg-blue-700 rounded h-fit"
                                        />
                                        <Image
                                            src={"/images/visa.png"}
                                            width={50}
                                            height={50}
                                            alt="image visa payment"
                                            className=" rounded object-cover h-fit"
                                        />
                                        <Image
                                            src={"/images/stripe.png"}
                                            width={45}
                                            height={45}
                                            alt="image stripe payment"
                                            className="rounded object-cover h-fit"
                                        />
                                        <Image
                                            src={"/images/mastercard.png"}
                                            width={40}
                                            height={40}
                                            alt="image mastercard payment"
                                            className="bg-blue-700 rounded h-fit"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <span>
                                    <h1>Card Number</h1>
                                </span>
                                <span className="relative space-y-2">
                                    <FaRegCreditCard className="absolute top-0 left-2 text-[#A3A3A3] text-xl" />
                                    <input
                                        type="text"
                                        placeholder="0000 0000 0000 0000"
                                        className="pl-10 pr-2 w-full h-9 rounded bg-white focus:outline-[#2395FF]"
                                    />
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <span>
                                        <h1>Expiry Date</h1>
                                    </span>
                                    <span className="relative space-y-2">
                                        <MdCalendarMonth className="absolute top-0 left-2 text-[#A3A3A3] text-xl" />
                                        <input
                                            type="month"
                                            placeholder=""
                                            className="pl-10 pr-2 w-[280px] h-9 rounded bg-white focus:outline-[#2395FF]"
                                        />
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <h1>CVC/CVV</h1>
                                    </span>
                                    <span className="relative space-y-2">
                                        <FaLock className="absolute top-0 left-2 text-[#A3A3A3] text-lg" />
                                        <input
                                            type="text"
                                            placeholder="0000 0000 0000 0000"
                                            className="pl-10 pr-2 w-[280px] h-9 rounded bg-white focus:outline-[#2395FF]"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                                <FaLock />
                                <h1>
                                    Your transaction is secured with ssl
                                    certificate
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-5/12">
                        <span>
                            <h1 className="font-medium text-lg">Summary</h1>
                        </span>
                        <div className="pl-5 pt-5 space-y-10 w-full">
                            <div>
                                <span className="flex items-center justify-between">
                                    <DropDownSummary title={"Summary"} />
                                    <h1 className="text-xl">
                                        $9.99{" "}
                                        <span className="text-base font-extralight">
                                            /Month
                                        </span>
                                    </h1>
                                </span>
                            </div>
                            <div className="space-y-2">
                                <span className="flex items-center justify-between">
                                    <h1>Refferal Bonouses</h1>
                                    <h1>-$2.00</h1>
                                </span>
                                <span className="flex justify-between items-center">
                                    <h1 className="flex items-center gap-1">
                                        Vat{" "}
                                        <span>
                                            {" "}
                                            <WiTime7 />
                                        </span>
                                    </h1>
                                    <h1>-20%</h1>
                                </span>
                            </div>
                            <div>
                                <span className="flex justify-between items-center">
                                    <h1>Today you pay(US Dollars)</h1>
                                    <h1>$0</h1>
                                </span>
                                <span className="text-sm">
                                    <h1>After 30 days $9.59</h1>
                                </span>
                            </div>
                            <div className="flex flex-col items-center space-y-2 ">
                                <button
                                    className="w-full flex justify-center p-3 bg-blue-600 text-white font-medium rounded"
                                    onClick={() => changeStatus()}
                                >
                                    Try it free for 30 days
                                </button>
                                <Link
                                    href={""}
                                    className="text-blue-600 border-b-2 border-blue-600 w-fit text-sm"
                                >
                                    Have a promo code?
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
};

export default StatusPaymentPage;
