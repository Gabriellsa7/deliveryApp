"use client";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import { MenuIcon, Sheet } from "lucide-react";
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

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) {
    return null;
  }

  const handleMenuHamburguer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div>
        <Image width={100} height={30} src={"/Logo.svg"} alt="Logo" />
      </div>
      <Dialog>
        <DialogTrigger asChild>
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
            <DialogClose>
              <Button></Button>
            </DialogClose>
          )}
        </DialogTrigger>
        <DialogContent></DialogContent>
      </Dialog>
    </div>
  );
};

export default Header;
