import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
    return (
        <main className="h-28 flex items-center justify-between w-11/12 mx-auto">
            <Link href={"/main/home"}>
                <Image
                    src={"/images/logo.png"}
                    width={200}
                    height={200}
                    alt="image logo"
                />
            </Link>
            <div className="relative">
                <IoSearchSharp className="absolute top-2 left-2 text-[#A3A3A3] text-xl" />
                <input
                    type="text"
                    placeholder="Where you want to go?"
                    className="pl-10 pr-2 w-64 h-9 rounded bg-[#F5F5F5] focus:outline-[#2395FF]"
                />
            </div>
            <div className="space-x-10">
                <Link
                    href={"/main/home"}
                    className="font-semibold hover:border-b-2 border-blue-700  active:border-b-2 active:border-blue-700"
                >
                    Find Ticket
                </Link>
                <Link
                    href={"/main/my-booking"}
                    className="font-semibold hover:border-b-2 border-blue-700  active:border-b-2 active:border-blue-700"
                >
                    My Booking
                </Link>
            </div>
            <div className="flex items-center space-x-7 bg-white">
                <CiMail className="text-3xl text-[#595959]" />
                <IoNotificationsOutline className="text-3xl text-[#595959]" />
                <Image
                    src={"/images/userPhoto.png"}
                    width={50}
                    height={50}
                    alt="image user"
                    className="rounded-full border-2 border-[#2395FF]"
                />
            </div>
        </main>
    );
};

export default Navbar;
