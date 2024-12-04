'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Signup from '@/firebase/auth/Signup'
import AccountCreation from '@/queries/AccountCreation'
import { useRouter } from 'next/navigation'

export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState<boolean>(false)

  const router = useRouter()

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    //pasword atleast 6 characters
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    // Here you would typically send the data to your backend
    await Signup(email, password)
    await AccountCreation(email, password)
    // Reset form after successful submission
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setSuccessMsg(true)

    setTimeout(() => {
      router.push('/auth/login')
    }, 2000)
  }

  return (
<div className='w-full flex justify-center items-center p-20'>
<Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create your account to get started.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input 
                id="confirm-password" 
                type="password" 
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <CardFooter className="flex justify-between mt-4 px-0">
            <Button type="submit" className="w-full">Sign Up</Button>
          </CardFooter>
        </form>
{
            successMsg && (
                <p className='text-sm font-semibold text-green-600 text-center'>Account Created Successfully.</p>
            )
}
        <div className='text-sm text-center'>
            Already a member? <a href="/auth/login" className="text-blue-500 font-semibold underline">Login</a>
        </div>
      </CardContent>
    </Card>
    
</div>
  )
}

