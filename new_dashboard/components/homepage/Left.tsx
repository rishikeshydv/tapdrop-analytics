import React from 'react'
import { Search, LogIn } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
export default function Left() {
  return (
    <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2 px-4 pt-4 max-w-xs mt-6">
      <div className="w-32">
        <Image
          src="/logo/logo.png"
          alt="SUPER BIZ"
          width={120}
          height={40}
          className="w-full"
        />
      </div>
      <div className="flex md:flex-col justify-center items-center">
        <Button 
          variant="ghost" 
          className="justify-start gap-2 text-sm font-normal w-full"
        >
          <Search className="w-5 h-5" />
          Explore
        </Button>
        <Button 
          variant="ghost" 
          className="justify-start gap-2 text-sm font-normal w-full"
        >
          <LogIn className="w-5 h-5" />
          Log In
        </Button>
      </div>
    </div>
  )
}
