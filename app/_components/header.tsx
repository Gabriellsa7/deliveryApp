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
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-6">
      <Image width={100} height={30} src={"/Logo.svg"} alt="Logo" />
      <Button
        size="icon"
        variant="outline"
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
