"use client";
import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'

const page = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
    <h1>piraji survase</h1>
      Not signed in  <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export default page