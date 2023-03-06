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


