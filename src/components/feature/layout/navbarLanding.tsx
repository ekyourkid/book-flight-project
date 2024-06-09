import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";
import DropDownLanding from "@/components/dropDownLanding";

const NavbarLanding = () => {
    return (
        <main className="h-28 flex items-center justify-between w-11/12 mx-auto">
            <div>
                <Image
                    src={"/images/logo.png"}
                    width={200}
                    height={200}
                    alt="image logo"
                />
            </div>
            <div className="relative">
                <IoSearchSharp className="absolute top-2 left-2 text-[#A3A3A3] text-xl" />
                <input
                    type="text"
                    placeholder="Where you want to go?"
                    className="pl-10 pr-2 w-64 h-9 rounded bg-[#F5F5F5] focus:outline-[#2395FF]"
                />
            </div>
            <div className="space-x-10  flex items-center">
                <DropDownLanding title={"Find Ticket"} />
                <Link
                    href={"#"}
                    className="font-medium hover:border-b-2 border-blue-700  active:border-b-2 active:border-blue-700"
                >
                    My Booking
                </Link>
            </div>
            <Link
                href={"/auth/register"}
                className="flex items-center text-white font-semibold space-x-7 px-8 py-2 rounded-xl shadow-xl bg-[#2395FF] hover:bg-blue-600 focus:bg-blue-600"
            >
                Sign Up
            </Link>
        </main>
    );
};

export default NavbarLanding;
