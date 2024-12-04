"use client";
import Left from "@/components/homepage/Left";
import Mid from "@/components/homepage/Mid";
import Right from "@/components/homepage/Right";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
const [category, setCategory] = useState("topTrending");
const [user] = useAuthState(auth);
const router = useRouter();


function checkSession(){
  if (user && user.email) {
    console.log("User is signed in");
  }
  else{
    router.push("/auth/login");
  }
}

useEffect(() => {
  const timeoutId = setTimeout(() => {
    checkSession();
  }, 1000);

  return () => clearTimeout(timeoutId);
}, [user]);
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
