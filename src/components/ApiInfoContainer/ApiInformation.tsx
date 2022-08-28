import React from 'react'

export const ApiInformation = () => {
  return (
    <div className='w-full h-screen -my-1 font-serif text-center text-xl py-4 px-10 space-y-12'>
      <p>This App uses an API from TheCocktailDB</p>
      <p>Huge thanks to them, and please check them out on the link below: </p>
      <div className='pt-2'>
        <a className='font-bold' href="https://www.thecocktaildb.com/api.php">TheCocktailDB</a>
      </div>
    </div>
  )
}
