"use client"
import React, { useEffect } from 'react'
import { Search, LogIn } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '@/firebase/config'
import logout from '@/firebase/auth/logout'

export default function Left() {
  const router = useRouter()
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user && user.email) {
      setLoggedIn(true)
    } 
  }, [user])

  return (
    <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2 px-4 pt-4 max-w-xs mt-6">
      <div className="w-32">
        <Image
          src="/logo/logo.png"
          alt="SUPER BIZ"
          width={120}
          height={40}
          className="w-full hover:cursor-pointer"
          onClick={() => router.push('/')}
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
          onClick={() => {
            if (loggedIn) {
              logout()
              setLoggedIn(false)
            } else {
              router.push('/auth/login')
            }
          }}
        >
          <LogIn className="w-5 h-5" />
          {
            loggedIn ? "Logout" : "Login"
          }
        </Button>
      </div>
    </div>
  )
}
