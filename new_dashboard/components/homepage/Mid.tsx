import { TrendingUp, Play, ShoppingBag, Users } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from 'react'

interface NavItemProps {
  icon?: React.ReactNode
  children: React.ReactNode
  isActive?: boolean
  onClick?: () => void
}


const allCategories = {
  "Top Trending": "topTrending",
  "Up-and-Coming": "upAndComing",
  "Fun with Friends": "funWithFriends",
  "Top Revisited": "topRevisited",
  "Top Earning": "topEarning",
  "Top Paid Access": "topPaidAccess",
  "Most Popular": "mostPopular",
  "Top Rated": "topRated",
  "Trending Music Experiences": "trendingMusicExperiences",
  "Trending in Action": "trendingAction",
  "Trending in Adventure": "trendingAdventure",
  "Trending in Entertainment": "trendingEntertainment",
  "Trending in Obby & Platformer": "trendingObbyPlatformer",
  "Trending in Party & Casual": "trendingPartyCasual",
  "Trending in Puzzle": "trendingPuzzle",
  "Trending in RPG": "trendingRPG",
  "Trending in Roleplay": "trendingRoleplay",
  "Trending in Shooter": "trendingShooter",
  "Trending in Shopping": "trendingShopping",
  "Trending in Simulation": "trendingSimulation",
  "Trending in Social": "trendingSocial",
  "Trending in Sports": "trendingSports",
  "Trending in Strategy": "trendingStrategy",
  "Trending in Survival": "trendingSurvival"
}


function NavItem({ icon, children, isActive,onClick }: NavItemProps) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-2",
        isActive && "bg-secondary"
      )}
      onClick={onClick}
      
    >
      {icon}
      <span>{children}</span>
    </Button>
  )
}

type MidProps = {
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

export default function Mid({setCategory}: MidProps) {

  const [currentCategory, setCurrentCategory] = useState("topTrending");
  const onClick = (value:string) => {
    setCategory(value);
    setCurrentCategory(value);
  }

  return (
    <div className="w-80">
      <div className="py-6">
        <div className="px-3 space-y-6">
          <div className="space-y-1 bg-white p-4 rounded-3xl">
            <h2 className="text-2xl font-semibold px-4 mb-4">Explore</h2>
            <NavItem icon={<TrendingUp className="w-4 h-4" />} >Genres</NavItem>
            <NavItem icon={<Play className="w-4 h-4 fill-primary" />} >
              Experiences
            </NavItem>
            <NavItem icon={<ShoppingBag className="w-4 h-4"/>} >Avatar Items</NavItem>
            <NavItem icon={<Users className="w-4 h-4" />}>Groups</NavItem>
          </div>

          <div className="space-y-1 bg-white p-4 rounded-3xl">
  <h2 className="font-semibold px-4 mb-2">Categories</h2>
  <div className="h-[400px] sm:h-[80vh] md:h-[70vh] lg:h-[46vh] xl:h-[43vh] 2xl:h-[50vh] overflow-y-auto">
    {
      Object.entries(allCategories).map(([name, value]) => (
        <NavItem
          key={name}
          isActive={currentCategory === value}
          onClick={() => onClick(value)}
      >
        {name}
      </NavItem>
      ))}
  </div>
</div>

        </div>
      </div>
    </div>


  )
}

