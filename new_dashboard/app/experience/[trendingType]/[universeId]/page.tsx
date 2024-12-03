"use client"
import ExperienceUI from '@/components/experience/ExperienceUI'
import Left from '@/components/homepage/Left'
import React from 'react'
import { useParams } from 'next/navigation'
import GetExperience from '@/queries/GetExperience'
import { GameData } from '@/types/GameData'
import { useState } from 'react'

//code for graphs
import AreaGraph from '@/components/charts/AreaGraph'
import BarGraph from '@/components/charts/BarGraph'
import DonutGraph from '@/components/charts/DonutGraph'
import PieGraph from '@/components/charts/PieGraph'

export default function Discover() {
  const { trendingType,universeId } = useParams()
  const [gameData, setGameData] = useState<GameData|null>(null)
  const getGameInfo = async() => {
      const data = await GetExperience(universeId as string, trendingType as string)
      setGameData(data)
  }
  React.useEffect(() => {
      getGameInfo()
  }, [])

  return (
    <div>
        <div className='flex bg-gray-100 w-full'>
        <Left />
        <div className='w-full flex flex-col bg-white'>

        <ExperienceUI 
        playing={Number(gameData?.playing).toLocaleString() as string}
        visits={Number(gameData?.visits).toLocaleString() as string}
        rating={gameData?.rating as string}
        favoritedCount={Number(gameData?.favoritedCount).toLocaleString() as string}
        createdDate={gameData?.createdDate as string}
        title={gameData?.title as string}
        creator={gameData?.creator as string}
        imageUrl={gameData?.imageUrl as string}
        />
        <div className='flex flex-col gap-3 bg-gray-100 p-4'>
        <div className='flex gap-3'>
          <AreaGraph />
          <BarGraph />
          <AreaGraph />
          <BarGraph />
        </div>
        <div className='flex gap-3'>
          <DonutGraph />
          <PieGraph />
          <DonutGraph />
          <PieGraph />
        </div>
        </div>

        </div>
        </div>

    </div>

  )
}
