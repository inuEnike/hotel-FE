"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/utils/images";
import { links } from "@/app/(main)/admin/dashboard/links";
import { usePathname } from "next/navigation";
import { GrLogout } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { useDashboardContext } from "@/hooks/DashboardContext";

const Sidebar = () => {
  const pathName = usePathname();
  const { navOpen, handleToggleNav } = useDashboardContext();
  return (
    <aside className={`bg-white ${!navOpen && "not-sm:hidden"} `}>
      <nav className="py-7 flex flex-col justify-between h-screen w-full">
        <div className="w-full">
          <div className="flex justify-between items-center  px-5">
            <div className="flex items-center">
              <Link href={"/dashboard"}>
                <Image
                  src={images.LogoBrown}
                  alt="Hybrid hotel & suite logo"
                  width={55}
                  height={55}
                  loading="eager"
                  className="object-cover object-center "
                />
              </Link>
              <h4
                className={"not-sm:hidden  md:text-xl text-main font-semibold"}
              >
                <span>Hybrid Hotels </span>
                <span>& Suites</span>
              </h4>
            </div>
            <button className={"not-sm:block hidden"} onClick={handleToggleNav}>
              <IoMdClose className="text-2xl" />
            </button>
          </div>

          <ul className="flex flex-col sgap-10 text-sm my-10 ">
            {links.map((link, i) => {
              const isActive = pathName === link.link;
              return (
                <li key={i} className={"py-6"}>
                  <Link
                    href={link.link}
                    key={i}
                    className={`flex gap-3 items-center text-gray-600 px-5 relative transition-all duration-700 ${isActive && " bg-bgDashboard py-4"}`}
                  >
                    {isActive && (
                      <>
                        {/* Top Inverted Corner */}
                        <div
                          className="absolute -top-5 right-0 w-3.75 h-5 bg-bgDashboard
                      before:content-[''] before:absolute before:inset-0 before:bg-white before:rounded-br-[20px]"
                        ></div>

                        {/* Bottom Inverted Corner */}
                        <div
                          className="absolute -bottom-5 right-0 w-3.75 h-5 bg-bgDashboard
                      before:content-[''] before:absolute before:inset-0 before:bg-white before:rounded-tr-[20px]"
                        ></div>
                      </>
                    )}
                    <span>{isActive ? link.iconCurrent : link.icon}</span>
                    <span
                      className={`${isActive && "text-main font-semibold"}`}
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className={"px-5 flex items-center text-sm gap-3"}>
          <GrLogout className={"text-main text-xl"} />
          <li>Logout</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
