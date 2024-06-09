import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

const FooterLanding = () => {
    return (
        <main className="w-full px-16 py-12 mt-20 flex justify-around">
            <section className="">
                <div className="">
                    <Image
                        src={"/images/logo.png"}
                        width={170}
                        height={170}
                        alt="image logo"
                    />
                </div>
                <div className="text-base text-[#6B6B6B] pt-6">
                    <h1>
                        Find your Flight and explore the <br /> world with us.
                        We will take care of the rest
                    </h1>
                </div>
                <div className="text-base text-[#6B6B6B] pt-24">
                    <h1>© Ankasa. All Rights Reserved.</h1>
                </div>
            </section>
            <section className="">
                <div>
                    <h1 className="text-xl font-medium">Features</h1>
                    <ul className="flex flex-col pt-6 space-y-3 text-[#6B6B6B] text-base">
                        <Link
                            href={""}
                            className="hover:border-b-2 border-blue-600 focus:border-b-2 focus:border-blue-600"
                        >
                            Find Ticket
                        </Link>
                        <Link
                            href={""}
                            className="hover:border-b-2 border-blue-600 focus:border-b-2 focus:border-blue-600"
                        >
                            My Booking
                        </Link>
                        <Link
                            href={""}
                            className="hover:border-b-2 border-blue-600 focus:border-b-2 focus:border-blue-600"
                        >
                            Chat
                        </Link>
                        <Link
                            href={""}
                            className="hover:border-b-2 border-blue-600 focus:border-b-2 focus:border-blue-600"
                        >
                            Notification
                        </Link>
                    </ul>
                </div>
            </section>
            <section className="">
                <div>
                    <h1 className="text-xl font-medium">
                        Download Angkasa app
                    </h1>
                </div>
                <div className="pt-5 ">
                    <Link href={""} className="">
                        <Image
                            src={"/images/appleStore.png"}
                            width={250}
                            height={250}
                            alt="image logo apple store"
                        />
                    </Link>
                    <Link href={""} className="">
                        <Image
                            src={"/images/gogglePlay.png"}
                            width={250}
                            height={250}
                            alt="image logo google play"
                            className="pt-2"
                        />
                    </Link>
                </div>
            </section>
            <section className="">
                <div>
                    <h1 className="text-xl font-medium">Follow Us</h1>
                </div>
                <div className="flex space-x-5 text-2xl text-[#595959] pt-5">
                    <FiFacebook />
                    <FiTwitter />
                    <FaInstagram />
                    <FiYoutube />
                </div>
                <div className="flex items-center pt-32 space-x-1 text-[#6B6B6B]">
                    <CiLocationOn className="text-2xl" />
                    <h1>Jakarta Indonesia</h1>
                </div>
            </section>
        </main>
    );
};

export default FooterLanding;
