"use client";
import Left from "@/components/homepage/Left";
import Mid from "@/components/homepage/Mid";
import Right from "@/components/homepage/Right";
import { useState } from "react";

export default function Home() {
const [category, setCategory] = useState("topTrending");

  return (
    <main className="bg-gray-100 min-h-[90vh]">
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start">
      <Left />
      <Mid setCategory={setCategory}/>
      <Right category={category}/>
      </div>
    </main>
  );
}
