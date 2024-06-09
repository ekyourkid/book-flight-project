"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useCustomMutation from "@/helpers/hooks/useCustomMutation";
import { registerFn } from "@/helpers/servers/auth_servers";
import InputPassword from "@/components/inputPassword";
import Input from "@/components/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { postEmailChecker } from "@/helpers/servers/emailCheckerServer";

type RegisterInputs = {
    name: string;
    email: string;
    password: string;
};

const RegisterPage = () => {
    const { register, handleSubmit } = useForm<RegisterInputs>();
    const { mutation } = useCustomMutation(registerFn as any);
    const { mutation: sendEmail } = useCustomMutation(postEmailChecker as any);

    const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
        try {
            const resp = await mutation.mutateAsync(data);
            if (resp.status === 200) {
                await sendEmail.mutateAsync(data?.email);
            }
        } catch (error) {
            console.error(
                "An error occurred while submitting the form:",
                error
            );
        }
    };

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
                <div className=" w-96  mx-32 mt-20">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col space-y-6"
                    >
                        <h1 className="text-4xl font-semibold">Register</h1>
                        <Input
                            placeholder={"Full Name"}
                            register={register}
                            fieldName={"name"}
                            defaultValue={""}
                            type={"text"}
                        />
                        <Input
                            placeholder={"Email"}
                            register={register}
                            fieldName={"email"}
                            type={"text"}
                        />
                        <InputPassword
                            register={register}
                            fieldName={"password"}
                            defaultValue={""}
                        />
                        <button
                            type="submit"
                            className="bg-[#2395FF] w-full p-4 rounded-lg text-2xl text-white font-bold hover:bg-blue-600 transition-all ease-out focus:bg-blue-600 "
                        >
                            Sign Up
                        </button>
                        <div className="flex space-x-5">
                            <input
                                type="checkbox"
                                className="focus:border-blue-500 hover:border-blue-500 "
                            />
                            <h1 className="text-[#595959]">
                                Accept terms and condition
                            </h1>
                        </div>
                        <hr />
                        <div className="w-full flex flex-col justify-center items-center space-y-3">
                            <h1 className="text-[#595959]">
                                Already have an account?
                            </h1>
                            <Link
                                href={"/auth/login"}
                                className="bg-white border-2 border-[#2395FF] flex justify-center w-full p-4 rounded-lg text-2xl text-[#2395FF] font-bold hover:text-3xl transition-all ease-out "
                            >
                                Sign In
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default RegisterPage;
