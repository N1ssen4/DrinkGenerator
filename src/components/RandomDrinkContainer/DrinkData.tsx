import axios from 'axios'
import React, {useState } from 'react'



export const DrinkData = () => {
  const[drinkData, setDrinkData] = useState([])

  const getRandomDrink = () => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => {
      setDrinkData(res.data.drinks)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
      <div className='w-full h-screen -my-1 py-4'>
        <div className='flex justify-center my-6'>
        <button className='font-serif bg-red-500 font-bold py-2 px-4 rounded-full border border-b-4 border-red-600' onClick={getRandomDrink}> Get a random drink</button>
        </div>

        {drinkData && drinkData.map((drink:any)=> (
          <div key={drink.id} className='font-serif text-center py-5 mx-6 space-y-8'>
            <div>Your drink is a <p className='font-bold'>{drink.strDrink}</p></div>
            <div>It is a <p className='font-bold'>{drink.strCategory}</p></div>
            <div>The drink is <p className='font-bold'>{drink.strAlcoholic}</p></div>
            <div>We recommend that you use a <p className='font-bold'>{drink.strGlass}</p></div>
            <div>Here are the instructions to make this drink: <p className='font-bold'>{drink.strInstructions}</p></div>
            <div  className='flex justify-center pt-10'>
              <img height={250} width={250} src={drink.strDrinkThumb}/>
            </div>
        </div>
      ))}
    </div>
  )

      }

