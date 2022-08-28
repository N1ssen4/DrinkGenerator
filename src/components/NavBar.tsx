import Link from 'next/link'
import React from 'react'

export const NavBar = () => {
  return (
    <div className='bg-gradient-to-b from-red-500 via-orange-500 to-amber-500 w-full h-20 flex justify-center space-x-16 py-6 font-serif font-bold'>
      <Link href={'/'}>
        <p>
          Home
        </p>
      </Link>
      <Link href={'/random-drink'}>
        <p>
          Random Drink
        </p>
      </Link>
      <Link href={'/api-info'}>
        <p>
          API
        </p>
      </Link>
    </div>
  )
}
