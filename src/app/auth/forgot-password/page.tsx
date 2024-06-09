"use client";
import React, { useState } from "react";
import Image from "next/image";

const ForgotPassword = () => {
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
                            Forgot Password
                        </h1>
                        <input
                            type={"text"}
                            placeholder={"Email"}
                            className="w-full px-5 h-14 rounded-lg border-b-2 border-[#D2C2FFAD] focus:outline-[#2395FF]"
                        />
                        <button className="bg-[#2395FF] w-full p-4 rounded-lg text-2xl text-white font-bold focus:bg-blue-700">
                            Send
                        </button>
                        <div className="w-full space-y-2 flex flex-col justify-center items-center">
                            <h1 className="text-[#595959]">
                                You`ll get message soon on your email
                            </h1>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default ForgotPassword;
