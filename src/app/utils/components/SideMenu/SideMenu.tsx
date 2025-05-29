"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { menus } from "../../../../../Helper/Menus";
import arrows from "../../../../../public/assets/sideMenuToggler.svg";
import logout from "../../../../../public/assets/logout.svg";
import Image from "next/image";
import Link from "next/link";
import DynamicSvg from "../DynamicSvgSideMenu";
import useHelper from "../../../../../Helper/helper";

const SideMenu = () => {
  const helper = useHelper();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState(true);

  var MenuToMap: any[] = [];
  if (helper.getData("RoleId") === "1") {
    const profileMenus = menus.DashBoard.map((item) => ({
      ...item,
      isActive: pathname === item.path,
    }));
    MenuToMap = profileMenus;
  } else {
    const profileMenus = menus.Profile.map((item) => ({
      ...item,
      isActive: pathname === item.path,
    }));
    MenuToMap = profileMenus;
  }

  return (
    <div
      className={`bg-white p-4 font-alata font-normal text-xs text-nowrap min-h-screen
      h-full flex justify-between flex-col border border-[#D7D7FB] 
      transition-all duration-300 ${
        !isOpened ? "w-[74px]" : "w-full md:w-[20dvw] xl:w-[15dvw]"
      }`}
    >
      <div className="flex flex-col">
        {MenuToMap.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className={`cursor-pointer flex items-center gap-2 py-3 rounded-md truncate 
              transition-all duration-200 ${
                item.isActive
                  ? "text-themeColor font-semibold"
                  : "text-[#575757] font-light hover:text-black"
              } ${!isOpened && "justify-center"}`}
          >
            <DynamicSvg
              height={isOpened ? 10 : 16}
              isActive={item.isActive}
              title={item.label}
            />
            {isOpened && (
              <p className="transition-opacity duration-100 text-xs">
                {item.label}
              </p>
            )}
          </Link>
        ))}
      </div>
      {helper.getData("RoleId") === "1" ? (
        <div className="w-full flex justify-between">
          <Image
            src={logout}
            height={15}
            alt="logout"
            className="cursor-pointer"
            onClick={() => {
              localStorage.clear();
              router.push("/");
            }}
          />
          <Image
            src={arrows}
            height={15}
            alt="Collapse Toggle"
            title="Collapse"
            className={`cursor-pointer transition-transform duration-100 ${
              isOpened ? "rotate-180" : ""
            }`}
            onClick={() => setIsOpened(!isOpened)}
          />
        </div>
      ) : (
        <div className="w-full flex justify-end">
          <Image
            src={arrows}
            height={15}
            alt="Collapse Toggle"
            title="Collapse"
            className={`cursor-pointer transition-transform duration-100 ${
              isOpened ? "rotate-180" : ""
            }`}
            onClick={() => setIsOpened(!isOpened)}
          />
        </div>
      )}
    </div>
  );
};

export default SideMenu;
