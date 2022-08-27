import Link from 'next/link'
import React from 'react'

export const NavBar = () => {
  return (
    <div className='bg-gradient-to-b from-red-500 via-orange-500 to-amber-500 w-full h-20 flex justify-center space-x-24 py-6 font-serif font-bold'>
      <Link href={'/'}>
        <p className=''>
          Home
        </p>
      </Link>
      <Link href={'/api'}>
        <p className=''>
          API
        </p>
      </Link>
    </div>
  )
}
