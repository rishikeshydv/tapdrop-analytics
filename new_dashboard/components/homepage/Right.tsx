"use client";
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import GetTopEarning from "@/queries/GetTopEarning";
import { useEffect, useState } from "react";
import { GameData } from "@/types/GameData";
import { FaSortDown } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

export default function Right() {
  const router = useRouter();
  const [gameData, setGameData] = useState<GameData[]>([]);
  const [gameTrend, setGameTrend] = useState<string>("");
  const fetchData = async () => {
    const TopEarning = await GetTopEarning();
    setGameData(TopEarning);
  };
  useEffect(() => {
    setGameTrend("topEarning");
    fetchData();
  }, [])

  //order by ccu, ascending order
  const orderByCCU_asc = () => {
    const sorted = [...gameData].sort((a, b) => Number(a.playing) - Number(b.playing));
    setGameData(sorted);
  }

  //order by favorited count, ascending order
  const orderByFavoritedCount_asc = () => {
    const sorted = [...gameData].sort((a, b) => Number(a.favoritedCount) - Number(b.favoritedCount));
    setGameData(sorted);
  }

  //order by visits, ascending order
  const orderByVisits_asc = () => {
    const sorted = [...gameData].sort((a, b) => Number(a.visits) - Number(b.visits));
    setGameData(sorted);
  }

  //order by rating, ascending order
  const orderByRating_asc = () => {
    const sorted = [...gameData].sort((a, b) => Number(a.rating.slice(0,2)) - Number(b.rating.slice(0,2)));
    setGameData(sorted);
  }

  //order by genre alphabetically
  const orderByGenre = () => {
    const sorted = [...gameData].sort((a, b) => a.genre.localeCompare(b.genre));
    setGameData(sorted);
  }

  return (
    <div className="w-full mr-[1em] p-6 bg-white rounded-3xl my-6 h-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0 mb-6">
        <div className="relative md:w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search experiences"
            className="pl-8"
          />
        </div>
        <div className="flex items-start md:items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Metrics (6/6)</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Active Players</DropdownMenuItem>
              <DropdownMenuItem>Session Length</DropdownMenuItem>
              <DropdownMenuItem>Favorites</DropdownMenuItem>
              <DropdownMenuItem>Rating</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button>Export</Button>
        </div>
      </div>

      <div className="rounded-md border">
        <div>
        <Table className='hidden md:grid'>
        <TableHeader className='text-sm'>
            <TableRow className='flex'>
              <TableHead className="w-[210px] md:w-[30%] border flex items-center justify-center md:justify-start  text-xs md:text-sm">Games</TableHead>
              <TableHead className='w-[60px] md:w-[10%] border text-center flex flex-col md:flex-row justify-center items-center gap-[4px] text-xs md:text-sm'>
                <div>CCU</div>
                 <div>
                 <FaSortDown className="w-4 h-4 mt-[-8px]" onClick={orderByCCU_asc} />
                  </div>             
                </TableHead>
              <TableHead className='w-[14%] md:w-[14%] border text-center flex flex-col md:flex-row justify-center items-center gap-[4px]  text-xs md:text-sm'>
                <p>
                Favorites
                </p>
                <FaSortDown className="w-4 h-4 mt-[-8px]" onClick={orderByFavoritedCount_asc} />
                </TableHead>
              <TableHead className='w-[15%] md:w-[15%] border text-center flex flex-col md:flex-row justify-center items-center gap-[4px]  text-xs md:text-sm'>
                <p>
                Visits
                </p>
                <FaSortDown className="w-4 h-4 mt-[-8px]" onClick={orderByVisits_asc} />
              </TableHead>
              <TableHead className='w-[9%] md:w-[9%] border text-center flex flex-col md:flex-row justify-center items-center gap-[4px]  text-xs md:text-sm'>
                <p>
                Genre
                </p>
                <FaSortDown className="w-4 h-4 mt-[-8px]" onClick={orderByGenre} />
              </TableHead>
              <TableHead className='w-[9%] md:w-[9%] border text-center flex flex-col md:flex-row justify-center items-center gap-[4px]  text-xs md:text-sm'>
                <p>
                Rating
                </p>
                <FaSortDown className="w-4 h-4 mt-[-8px]" onClick={orderByRating_asc} />
              </TableHead>
              <TableHead className='w-[14%] md:w-[14%] border flex justify-center items-center  text-xs md:text-sm'>
                <p>
                Created Date
                </p>
    
              </TableHead>
            </TableRow>
          </TableHeader>
          </Table>
          <div className="overflow-y-auto h-[500px] sm:h-[80vh] md:h-[70vh] lg:h-[60vh] xl:h-[64vh] 2xl:h-[65vh]">
          <Table>
        <TableHeader className='text-sm contents md:hidden'>
            <TableRow>
              <TableHead className=" border  text-xs md:text-sm">Games</TableHead>
              <TableHead className=' border text-center text-xs md:text-sm'>
                <div>CCU</div>
                 <div className='flex justify-center items-center'>
                 <FaSortDown className="w-4 h-4 mt-[-8px] hover:cursor-pointer" onClick={orderByCCU_asc} />
                  </div>             
                </TableHead>
              <TableHead className='border text-center   text-xs md:text-sm'>
                <p>
                Favorites
                </p>
                <div className='flex justify-center items-center'>
                <FaSortDown className="w-4 h-4 mt-[-8px] hover:cursor-pointer" onClick={orderByFavoritedCount_asc} />
                </div>
                </TableHead>
              <TableHead className='border text-center  text-xs md:text-sm'>
                <p>
                Visits
                </p>
                <div className='flex justify-center items-center'>
                <FaSortDown className="w-4 h-4 mt-[-8px] hover:cursor-pointer" onClick={orderByVisits_asc} />
                </div>
              </TableHead>
              <TableHead className='border text-center text-xs md:text-sm'>
                <p>
                Genre
                </p>
                <div className='flex justify-center items-center'>
                <FaSortDown className="w-4 h-4 mt-[-8px] hover:cursor-pointer" onClick={orderByGenre} />
                </div>
              </TableHead>
              <TableHead className='border text-center  text-xs md:text-sm'>
                <p>
                Rating
                </p>
                <div  className='flex justify-center items-center'>
                <FaSortDown className="w-4 h-4 mt-[-8px] hover:cursor-pointer" onClick={orderByRating_asc} />
                </div>
              </TableHead>
              <TableHead className='border text-xs md:text-sm'>
                <p>
                Created Date
                </p>
    
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              gameData.map((game) => (
                <TableRow key={game.placeId}>
                  <TableCell className="font-medium md:w-[30%] hover:cursor-pointer text-xs md:text-sm" onClick={()=>{router.push(`experience/${gameTrend}/${game.universeId}`)}}>
                    <div className="flex items-center gap-2">
                      <img
                        src={game.imageUrl}
                        alt="Brookhaven"
                        className="w-10 h-10 rounded hidden md:flex"
                      />
                      <div>
                        <div className="font-medium">{game.title}</div>
                        <div className="text-sm text-muted-foreground">@{game.creator}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className='md:w-[10%] text-center'>{game.playing}</TableCell>
                  <TableCell className='md:w-[14%] text-center'>{game.favoritedCount}</TableCell>
                  <TableCell className='md:w-[15%] text-center'>{game.visits}</TableCell>
                  <TableCell className='md:w-[9%] text-center'>{game.genre}</TableCell>
                  <TableCell className='md:w-[9%] text-center'>{game.rating}</TableCell>
                  <TableCell className='md:w-[14%] text-center'>{game.createdDate}</TableCell>
                </TableRow>
              ))
            }

          
          </TableBody>
        </Table>
        </div>
        </div>
      </div>
      {/* pagination */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between mt-3">
        <div className="text-sm text-muted-foreground">
          1-50 of 33,393 experiences
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <div className='flex items-center gap-2'>
          <Button variant="outline">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline" className='hidden md:flex'>3</Button>
          <Button variant="outline" className='hidden md:flex'>4</Button>
          <Button variant="outline" className='hidden md:flex'>5</Button>
          <span>...</span>
          <Button variant="outline">668</Button>
          </div>
          <Button variant="outline">
            Next
          </Button>
          <Select defaultValue="50">
            <SelectTrigger className="w-[130px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10 / page</SelectItem>
              <SelectItem value="20">20 / page</SelectItem>
              <SelectItem value="50">50 / page</SelectItem>
              <SelectItem value="100">100 / page</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div> 
    </div>


  )
}

