"use client";
import ExperienceUI from "@/components/experience/ExperienceUI";
import Left from "@/components/homepage/Left";
import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import GetExperience from "@/queries/GetExperience";
import { GameData } from "@/types/GameData";
import { useState } from "react";

//code for graphs
import AreaGraph from "@/components/charts/AreaGraph";
import BarGraph from "@/components/charts/BarGraph";
import DonutGraph from "@/components/charts/DonutGraph";
import PieGraph from "@/components/charts/PieGraph";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import RoleCheck from "@/queries/RoleCheck";

export default function Discover() {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [admin, setAdmin] = React.useState(false);
  const { trendingType, universeId } = useParams();
  const [gameData, setGameData] = useState<GameData | null>(null);
  async function getRole() {
    const role = await RoleCheck(user?.email as string);
    if (role === "admin") {
      setAdmin(true);
    }
  }

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

    if (user) {
      getRole();
    }

    return () => clearTimeout(timeoutId);
  }, [user]);
  const getGameInfo = async () => {
    const data = await GetExperience(
      universeId as string,
      trendingType as string
    );
    setGameData(data);
  };
  React.useEffect(() => {
    getGameInfo();
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start w-full min-h-[83vh]">
        <Left />
        <div className="w-full flex flex-col gap-4 p-4">
          <ExperienceUI
            playing={Number(gameData?.playing).toLocaleString() as string}
            visits={Number(gameData?.visits)}
            rating={gameData?.rating as string}
            favoritedCount={
              Number(gameData?.favoritedCount)
            }
            createdDate={gameData?.createdDate as string}
            title={gameData?.title as string}
            creator={gameData?.creator as string}
            imageUrl={gameData?.imageUrl as string}
            upvote={gameData?.upvote as string}
            downvote={gameData?.downvote as string}
          />
          {
            admin ?(
              <div className="flex flex-col gap-4 bg-gray-100 p-6 rounded-3xl sm:gap-6 md:p-8 lg:p-10 xl:rounded-2xl 2xl:my-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <AreaGraph />
                <BarGraph />
                <AreaGraph />
                <BarGraph />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <DonutGraph />
                <PieGraph />
                <DonutGraph />
                <PieGraph />
              </div>
            </div>
            ):(
              <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4 rounded-3xl">
                <p>
                  Your account does not have access to this page. Please contact the administrator.
                </p>
            </div>
            )

          }
        </div>
      </div>
    </div>
  );
}
