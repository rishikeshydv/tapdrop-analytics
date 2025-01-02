"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export default function LoadingUI() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (<div className="flex justify-center items-center min-h-[80vh]">
      <Progress value={progress} className="w-[20%]" />
  </div>)
}
