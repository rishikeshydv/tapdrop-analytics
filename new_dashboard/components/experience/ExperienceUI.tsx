"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type ExperienceUIProps = {
  playing: string,
  visits: string,
  rating: string,
  favoritedCount: string,
  createdDate: string,
  title : string,
  creator : string,
  imageUrl : string,
}

const ExperienceUI = ({playing,visits,rating,favoritedCount,createdDate,title,creator,imageUrl}:ExperienceUIProps) => {

  return (
    <div className='bg-white w-full 2xl:mt-6'>
<div className="p-6 space-y-6 mx-auto bg-gray-100 rounded-3xl">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={imageUrl} className="w-10 h-10 rounded-lg bg-primary/10" />
          <div>
            <h1 className="text-xl font-semibold flex items-center gap-2">
              {title}
            </h1>
            <span className="text-sm text-muted-foreground">
                @{creator}
              </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="5/7">
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Metrics" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5/7">Metrics (5/7)</SelectItem>
              <SelectItem value="6/7">Metrics (6/7)</SelectItem>
              <SelectItem value="7/7">Metrics (7/7)</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Share</Button>
          <Button variant="outline" className="bg-black text-white">Export</Button>
        </div>
      </div>



      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <h3 className="text-sm text-muted-foreground">Active Players</h3>
              <p className="text-3xl font-bold">{playing}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <h3 className="text-sm text-muted-foreground">Est Avg Session Length</h3>
              <p className="text-3xl font-bold">TBD</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <h3 className="text-sm text-muted-foreground">Total Visits</h3>
              <p className="text-2xl font-bold">{visits}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <h3 className="text-sm text-muted-foreground">Rating</h3>
              <p className="text-2xl font-bold">{rating}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <h3 className="text-sm text-muted-foreground">Favorites</h3>
              <p className="text-2xl font-bold">{favoritedCount}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <h3 className="text-sm text-muted-foreground">Created</h3>
              <p className="text-2xl font-bold">{createdDate}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  )
}

export default ExperienceUI