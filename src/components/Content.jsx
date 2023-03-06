// This component will call the Rick and Morty API (https://rickandmortyapi.com/api) to get the data for the cards. The data will be passed down to the Card component as props. The data will be an array of objects. Each object will have the following properties:
//   id: number
//   name: string
//   status: string
//   species: string
//   type: string
//   image: string


import React, { useState, useEffect } from 'react'
import Card from './Card'

export default function Content () {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => {
            setCharacters(data.results)
        })
    }, [])

    return (
        <div className="content">
            {characters.map(character => {
                return <Card key={character.id} character={character} />
            })}
        </div>
    )
}
// The Card component will display the data passed down from the Content component. The Card component will have the following props:
//   id: number
//   name: string
//   status: string
//   species: string
//   type: string
//   image: string
// The Card component will have the following HTML structure:
// <div className="card">
//   <div className="card__image">
//     <img src="https://picsum.photos/200/300" alt="random" />
//   </div>
//   <div className="card__content">
//     <h2 className="card__title">Card Title</h2>
//     <p className="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
//   </div>
// </div>
// The Card component will have the following CSS:

// The Content component will have the following CSS:


// The App component will have the following CSS:

// The App component will have the following HTML structure:
// <div className="app">

//   <Header />

//   <Content />

// </div>



