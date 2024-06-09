"use client";
import React from "react";
import Image from "next/image";
import Input from "@/components/input";
import InputPassword from "@/components/inputPassword";
import Link from "next/link";
import useCustomMutation from "@/helpers/hooks/useCustomMutation";
import { loginFn } from "@/helpers/servers/auth_servers";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type LoginInputs = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm<LoginInputs>();
    const { mutation } = useCustomMutation(loginFn as any);

    const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
        try {
            const resp = await mutation.mutateAsync(data);
            if (resp.status === 200) {
                router.push("/main/home");
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
                <div className="w-96 mx-32 mt-20">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col space-y-10"
                    >
                        <h1 className="text-4xl font-semibold">Login</h1>
                        <Input
                            register={register}
                            fieldName={"email"}
                            defaultValue={""}
                            type={"text"}
                            placeholder={"Username"}
                        />
                        <InputPassword
                            register={register}
                            defaultValue={""}
                            fieldName={"password"}
                        />
                        <button
                            type="submit"
                            className="bg-[#2395FF] flex justify-center w-full p-4 rounded-lg text-2xl text-white font-bold hover:bg-blue-600 transition-all ease-out focus:bg-blue-600"
                        >
                            Sign In
                        </button>
                        <div className="w-full space-y-2 flex flex-col justify-center items-center">
                            <h1 className="text-[#595959]">
                                Did you forgot your password?
                            </h1>
                            <Link
                                href={"/auth/forgot-password"}
                                className="text-[#2395FF] border-b-2 border-blue-400 focus:text-blue-900 focus:border-blue-900"
                            >
                                Tap here for reset
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
