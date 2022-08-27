import React from 'react'
import useSWR from 'swr'


export const DrinkData = () => {
  const fetcher = (...args:any) => fetch(args).then(res => res.json())

  const {data , error} = useSWR("https://www.thecocktaildb.com/api/json/v1/1/random.php", fetcher) 

  if (error) return <div className='bg-gradient-to-b from-amber-500 w-full h-full'>No data found</div>
  if (!data) return <div className='bg-gradient-to-b from-amber-500 w-full h-full'>Loading...</div>

  return (
    <div className='w-full h-screen -my-2 py-4'>
      {data.drinks.map((drink:any)=> (
        <div className='font-serif text-center py-5 mx-6 space-y-8'>
          <p>Your drink is a <p className='font-bold'>{drink.strDrink}</p></p>
          <p>It is a <p className='font-bold'>{drink.strCategory}</p></p>
          <p>The drink is <p className='font-bold'>{drink.strAlcoholic}</p></p>
          <p>We recommend that you use a <p className='font-bold'>{drink.strGlass}</p></p>
          <p>Here are the instructions to make this drink: <p className='font-bold'>{drink.strInstructions}</p></p>
          <div className='flex justify-center pt-10'>
            <img height={250} width={250} src={drink.strDrinkThumb}/>
          </div>
        </div>
      ))}
    </div>
  )
}


