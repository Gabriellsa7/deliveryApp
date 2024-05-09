"use client";
import { MenuIcon, MenuSquareIcon, Sheet } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
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
  };

  return (
    <header className="flex items-center justify-between p-6">
      <div>
        <Image width={100} height={30} src={"/Logo.svg"} alt="Logo" />
      </div>
      <Dialog>
        <div className="flex-col">
          <DialogTrigger asChild>
            {/* {!isOpen ? ( */}
            <Button
              size="icon"
              variant="outline"
              className="border-none bg-transparent"
              onClick={handleMenuHamburguer}
            >
              <MenuIcon />
            </Button>
            {/* ) : (
            <Button>X</Button>
          )} */}
          </DialogTrigger>
          <DialogContent>Test</DialogContent>
        </div>
      </Dialog>
    </header>
  );
};

export default Header;
