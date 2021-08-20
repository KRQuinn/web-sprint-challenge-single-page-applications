import React from 'react'
import { useHistory } from 'react-router-dom'
import Banner from '../panuccis_pizza.jpg'

export default function Home(props){


    const history = useHistory()

    const pizzaRoute = () => {
        history.push('/pizza')
    }

    return(
        <div>
           <img
            src={Banner} 
            alt='Panuccis!'
            />
           <button onClick={pizzaRoute} id='order-pizza'>Get some Za!</button>
        </div>
    )
}