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
export default function Right() {
  const [gameData, setGameData] = useState<GameData[]>([]);
  const fetchData = async () => {
    const TopEarning = await GetTopEarning();
    setGameData(TopEarning);
  };
  useEffect(() => {
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
    <div className="w-full p-6 bg-white rounded-3xl my-6">
      <div className="flex items-center justify-between mb-6">
        <div className="relative w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search experiences"
            className="pl-8"
          />
        </div>
        <div className="flex items-center gap-2">
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
        <div className='h-[565px]'>
        <Table>
        <TableHeader className='text-sm'>
            <TableRow className='flex'>
              <TableHead className="w-[30%] border">Games</TableHead>
              <TableHead className='w-[10%]  border text-center flex justify-center items-center gap-[4px]'>
                <div>CCU</div>
                 <div>
                 <FaSortDown className="w-4 h-4 mt-[-8px]" onClick={orderByCCU_asc} />
                  </div>             
                </TableHead>
              <TableHead className='w-[14%] border text-center flex justify-center items-center gap-[4px]'>
                <p>
                Favorites
                </p>
                <FaSortDown className="w-4 h-4 mt-[-8px]" onClick={orderByFavoritedCount_asc} />
                </TableHead>
              <TableHead className='w-[15%] border text-center flex justify-center items-center gap-[4px]'>
                <p>
                Visits
                </p>
                <FaSortDown className="w-4 h-4 mt-[-8px]" onClick={orderByVisits_asc} />
              </TableHead>
              <TableHead className='w-[9%] border text-center flex justify-center items-center gap-[4px]'>
                <p>
                Genre
                </p>
                <FaSortDown className="w-4 h-4 mt-[-8px]" onClick={orderByGenre} />
              </TableHead>
              <TableHead className='w-[9%] border text-center flex justify-center items-center gap-[4px]'>
                <p>
                Rating
                </p>
                <FaSortDown className="w-4 h-4 mt-[-8px]" onClick={orderByRating_asc} />
              </TableHead>
              <TableHead className='w-[12%] border flex justify-center items-center'>
                <p>
                Created Date
                </p>
    
              </TableHead>
            </TableRow>
          </TableHeader>
          </Table>
          <div className="overflow-y-auto h-[500px]">
          <Table>
          <TableBody>

            {
              gameData.map((game) => (
                <TableRow key={game.placeId}>
                  <TableCell className="font-medium w-[30%]">
                    <div className="flex items-center gap-2">
                      <img
                        src={game.imageUrl}
                        alt="Brookhaven"
                        className="w-10 h-10 rounded"
                      />
                      <div>
                        <div className="font-medium">{game.title}</div>
                        <div className="text-sm text-muted-foreground">@{game.creator}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className='w-[10%] text-center'>{game.playing}</TableCell>
                  <TableCell className='w-[14%] text-center'>{game.favoritedCount}</TableCell>
                  <TableCell className='w-[15%] text-center'>{game.visits}</TableCell>
                  <TableCell className='w-[9%] text-center'>{game.genre}</TableCell>
                  <TableCell className='w-[9%] text-center'>{game.rating}</TableCell>
                  <TableCell className='w-[12%] text-center'>{game.createdDate}</TableCell>
                </TableRow>
              ))
            }

          
          </TableBody>
        </Table>
        </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-muted-foreground">
          1-50 of 33,393 experiences
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="outline">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">4</Button>
          <Button variant="outline">5</Button>
          <span>...</span>
          <Button variant="outline">668</Button>
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

