"use client";
import { LogOutIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import x from "@/assets/Close.svg";
import Profile from "./profile";
import PrimaryMenuList from "./primary-menu-list";
import SecondaryMenuList from "./secondary-menu-list";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuHamburguer = () => {
    setIsOpen(!isOpen);
    document.body.classList.add("overflow-hidden");
  };

  const handleCloseMenu = () => {
    setIsOpen((isOpen) => !isOpen);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <header className="flex items-center justify-between p-6 relative">
      <div>
        <Image width={100} height={30} src={"/Logo.svg"} alt="Logo" />
      </div>
      <div>
        {isOpen ? (
          <>
            <div
              className={
                "fixed top-0 left-0 h-screen w-[20%] bg-black opacity-50 z-50 transition-opacity"
              }
              onClick={handleCloseMenu}
            ></div>
            <div className="fixed top-0 right-0 z-10 flex flex-col h-screen w-4/5 overflow-y-auto touch-auto bg-white items-center justify-start transform transition-transform duration-300 ease-in-out translate-x-0">
              <div className="flex items-center justify-between w-full pt-6 px-5">
                <h2>Menu</h2>
                <button onClick={handleCloseMenu}>
                  <Image src={x} alt="close" width={20} height={20} />
                </button>
              </div>
              <div className="flex flex-col gap-4 pt-6 px-5 w-full">
                <Profile />
              </div>
              <PrimaryMenuList />
              <SecondaryMenuList />
              <div className="flex flex-col gap-4 pt-1 px-5 w-full">
                <div className="flex items-center gap-4 py-3 px-4 rounded-2xl ">
                  <LogOutIcon size={16} color="#323232" />
                  <p className="text-sm font-normal text-[#323232]">
                    Log out of account
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Button
            size="icon"
            variant="outline"
            className="border-none bg-transparent"
            onClick={handleMenuHamburguer}
          >
            <MenuIcon />
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
