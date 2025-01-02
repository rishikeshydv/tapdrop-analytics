"use client";
import Left from "@/components/homepage/Left";
import Mid from "@/components/homepage/Mid";
import Right from "@/components/homepage/Right";
import LoadingUI from "@/components/loading/Loading";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
export default function Home() {
const [category, setCategory] = useState("topTrending");
const [user, loading] = useAuthState(auth);
const router = useRouter();
const [isChecking, setIsChecking] = useState(true);


function checkSession(){
  if (user && user.email) {
    setIsChecking(false);
  }
  else{
    router.push("/auth/login");
  }
}

useEffect(() => {
  const timeoutId = setTimeout(() => {
    if (!loading) {
      checkSession();
    }
  }, 1000);

  return () => clearTimeout(timeoutId);
}, [user, loading]);

if (loading || isChecking) {
  return <LoadingUI />;
}
  return (
    <main className="bg-gray-100 min-h-[90vh] overflow-hidden">
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start">
      <Left />
      <Mid setCategory={setCategory}/>
      <Right category={category}/>
      </div>
    </main>
  );
}
