'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { auth, db } from "@/firebase/config";
import { doc, getDoc } from 'firebase/firestore'
import { sendPasswordResetEmail } from "firebase/auth";
export default function ResetForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    //check if the email exists in the db
    const userRef = doc(db, "users", email);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      setError('User does not exist. Please register.')
      return
    }

    await sendPasswordResetEmail(auth, email).then(() => {
        setError('Password reset email sent.')
        })
        .catch((error) => {
            setError('Invalid email.')
            console.log(error)
            }
        );
    setEmail('')
  }

  return (
<div className='w-full flex justify-center items-center p-28'>
<Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Reset</CardTitle>
        <CardDescription>Reset your account password.</CardDescription>
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
          </div>
          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <CardFooter className="flex justify-between mt-4 px-0">
            <Button type="submit" className="w-full">Reset Password</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
</div>
  )
}

