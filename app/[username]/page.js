// import React from 'react'
// import PaymentPage from '@/components/PaymentPage'
// import { notFound } from "next/navigation"
// import connectDb from '@/db/connectDb'
// import User from '@/models/User'
// const Username = async ({ params }) => {

//   // If the username is not present in the database, show a 404 page
//   const checkUser = async () => {
//     await connectDb()
//     let u = await User.findOne({ username: params.username })
//     if (!u) {
//       return notFound()
//     }
//   }
//   await checkUser()



//   return (
//     <>
//       <PaymentPage username={params.username} />
//     </>
//   )
// }

// export default Username
 
// export async function generateMetadata({ params }) {
//   return {
//     title: `Support ${params.username} - Get Me A Chai`,
//   }
// } 

import PaymentPage from '@/components/PaymentPage'
import { notFound } from "next/navigation"
import connectDb from '@/db/connectDb'
import User from '@/models/User'
import { fetchuser, fetchpayments } from '@/actions/useractions'

const Username = async ({ params }) => {
  const resolvedParams = await params
  const username = resolvedParams.username
  await connectDb()
  let u = await User.findOne({ username})
  if (!u) notFound()

  return (
    <PaymentPage
      // username={params.username}
      username={username} 
    />
  )
}

export default Username

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  
  return {
    
    title: `Support ${resolvedParams.username} - Get Me A Chai`,
  }
}