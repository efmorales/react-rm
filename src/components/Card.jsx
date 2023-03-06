// The Card component will display the data passed down from the Content component. If the field is empty, don't show the corresponding 'p' tag at all. The card component will flip when the user clicks on it, and it will show the back of the card with the list of episodes the character was in, location and origin.

import React, { useState } from 'react'

export default function Card({ character }) {

    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    }

    return (

        <div className="card" onClick={flipCard}>
            {!isFlipped ? (
                <div className={"card--front"}>
                    <img className="card--image" src={character.image} alt={character.name} />
                    <div className="card--content">
                        <h2 className="card--title">{character.name}</h2>
                        <p className="card--text"><strong>Status:</strong> {character.status}</p>
                        <p className="card--text"><strong>Species:</strong> {character.species}</p>
                        {character.type && <p className="card--text"><strong>Type:</strong> {character.type}</p>}

                        {character.gender && <p className="card--text"><strong>Gender:</strong> {character.gender}</p>}
                    </div>
                    <div className="card--footer">
                        <p className="card--footer-text"><strong>Episodes:</strong> {character.episode.length}</p>
                    </div>
                </div>

            ) : (
                <div className={"card--back"}>
                    <div className="card--back-content">
                        <h2 className="card--back-title">{character.name}</h2>
                        <p className="card--back-text"><strong>Location:</strong> {character.location.name}</p>
                        <p className="card--back-text"><strong>Origin:</strong> {character.origin.name}</p>
                    </div>
                </div>
            )}
        </div>

    )
}