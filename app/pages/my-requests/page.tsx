import Header from "@/app/_components/header";
import React from "react";
import Cards from "./components/cards";

const MyRequests = () => {
  return (
    <main className="px-6 pt-2 flex flex-col gap-6">
      <Header />
      <span>My Requests</span>
      <section className="flex flex-col gap-3">
        <Cards />
        <Cards />
      </section>
    </main>
  );
};

export default MyRequests;
