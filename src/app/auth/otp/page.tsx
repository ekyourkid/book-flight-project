"use client";
import React, { useState } from "react";
import Image from "next/image";
import Input from "@/components/input";

const OtpPage = () => {
    return (
        <main className="flex w-screen h-screen">
            <div className="bg-[#2395FF] flex justify-center items-center w-[50%]">
                <Image
                    src={"/images/authBg.png"}
                    alt="image auth background"
                    width={700}
                    height={700}
                />
            </div>
            <div className="flex flex-col items-center w-[50%] px-20 my-28">
                <div className="w-96 mx-32">
                    <Image
                        src={"/images/logo.png"}
                        height={200}
                        width={200}
                        alt="image auth logo background"
                    />
                </div>
                <div className="w-96 mx-32 mt-20">
                    <form className="flex flex-col space-y-10">
                        <h1 className="text-4xl font-semibold">
                            Verifikasi Otp
                        </h1>
                        <Input
                            type={"text"}
                            placeholder={"Email"}
                            register={undefined}
                            fieldName={undefined}
                        />
                        <Input
                            type={"text"}
                            placeholder={"Otp"}
                            register={undefined}
                            fieldName={undefined}
                        />
                        <button className="bg-[#2395FF] w-full p-4 rounded-lg text-2xl text-white font-bold focus:bg-blue-700">
                            Verifikasi
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default OtpPage;
