"use client";
import { HomeIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import x from "@/assets/Close.svg";
import profile from "@/assets/Profile.png";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@radix-ui/react-dialog";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuHamburguer = () => {
    setIsOpen(!isOpen);
    document.body.classList.add("overflow-hidden");
  };

  const handleCloseMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <header className="flex items-center justify-between p-6 relative">
      <div>
        <Image width={100} height={30} src={"/Logo.svg"} alt="Logo" />
      </div>
      <div>
        {isOpen ? (
          <Button
            size="icon"
            variant="outline"
            className="border-none bg-transparent"
            onClick={handleMenuHamburguer}
          >
            <MenuIcon />
          </Button>
        ) : (
          <>
            <div
              className="fixed top-0 left-0 h-screen w-[20%] bg-black opacity-50 z-50"
              onClick={handleCloseMenu}
            ></div>
            <div className="fixed top-0 right-0 z-10 flex flex-col h-screen w-4/5 bg-white items-center justify-start">
              <div className="flex items-center justify-between w-full pt-6 px-5">
                <h2>Menu</h2>
                <button onClick={handleCloseMenu}>
                  <Image src={x} alt="close" width={20} height={20} />
                </button>
              </div>
              <div className="flex flex-col gap-4 pt-6 px-5 w-full">
                <div className="flex items-center gap-4">
                  <Image
                    width={60}
                    height={30}
                    src={profile}
                    alt="Profile image"
                  />
                  <div className="flex flex-col gap-1">
                    <p>Gabriel Santana Santos</p>
                    <p>gabriel@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 pt-12 px-5 w-full">
                <div className="flex items-center gap-4 bg-red-600 py-3 px-4 rounded-2xl ">
                  <HomeIcon color="#FFFFFF" />
                  <p className="text-white">Home</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {/* <Dialog>
        <div className="flex-col">
          <DialogTrigger asChild>
            {!isOpen ? (
            <Button
              size="icon"
              variant="outline"
              className="border-none bg-transparent"
              onClick={handleMenuHamburguer}
            >
              <MenuIcon />
            </Button>
            { ) : (
            <Button>X</Button>
          )} }
          </DialogTrigger>
          <DialogContent>Test</DialogContent>
        </div>
      </Dialog> */}
    </header>
  );
};

export default Header;
