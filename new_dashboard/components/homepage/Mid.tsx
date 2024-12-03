import { TrendingUp, Play, ShoppingBag, Users } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface NavItemProps {
  icon?: React.ReactNode
  children: React.ReactNode
  isActive?: boolean
}

function NavItem({ icon, children, isActive }: NavItemProps) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-2",
        isActive && "bg-secondary"
      )}
    >
      {icon}
      <span>{children}</span>
    </Button>
  )
}

export default function Mid() {
  return (
    <div className="w-80 h-full border-r">
      <ScrollArea className="h-full py-6">
        <div className="px-3 space-y-6">
          <div className="space-y-1 bg-white p-4 rounded-3xl">
            <h2 className="text-2xl font-semibold px-4 mb-4">Explore</h2>
            <NavItem icon={<TrendingUp className="w-4 h-4" />}>Genres</NavItem>
            <NavItem icon={<Play className="w-4 h-4 fill-primary" />} isActive>
              Experiences
            </NavItem>
            <NavItem icon={<ShoppingBag className="w-4 h-4" />}>Avatar Items</NavItem>
            <NavItem icon={<Users className="w-4 h-4" />}>Groups</NavItem>
          </div>

          <div className="space-y-1 bg-white p-4 rounded-3xl">
  <h2 className="font-semibold px-4 mb-2">Categories</h2>
  {/* Use valid Tailwind classes for height and overflow */}
  <div className="h-[400px] overflow-y-auto">
    <NavItem isActive>All</NavItem>
    <NavItem>Top Trending</NavItem>
    <NavItem>Up-and-Coming</NavItem>
    <NavItem>Fun with Friends</NavItem>
    <NavItem>Top Revisited</NavItem>
    <NavItem>Top Earning</NavItem>
    <NavItem>Top Paid Access</NavItem>
    <NavItem>Top Rated</NavItem>
    <NavItem>Most Popular</NavItem>
    <NavItem>Trending Music Experiences</NavItem>  
    <NavItem>Trending in Action</NavItem>
    <NavItem>Trending in Adventure</NavItem>
    <NavItem>Trending in Entertainment</NavItem>
    <NavItem>Trending in Obby & Platformer</NavItem>
    <NavItem>Trending in Party & Casual</NavItem>
    <NavItem>Trending in Puzzle</NavItem>
    <NavItem>Trending in RPG</NavItem>
    <NavItem>Trending in Simulation</NavItem>
    <NavItem>Trending in Shooter</NavItem>
    <NavItem>Trending in Shopping</NavItem>
    <NavItem>Trending in Social</NavItem>
    <NavItem>Trending in Sports</NavItem>
    <NavItem>Trending in Strategy</NavItem>
    <NavItem>Trending in Survival</NavItem>
    <NavItem>Trending in Roleplay</NavItem>
  </div>
</div>

        </div>
      </ScrollArea>
    </div>
  )
}

