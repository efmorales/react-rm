// The Card component will display the data passed down from the Content component. If the field is empty, don't show the corresponding 'p' tag at all. The Card component will have the following props:
//   id: number
//   name: string
//   status: string
//   species: string
//   type: string
//   image: string
//   gender: string

export default function Card ({ character }) {

    return (
        <div className="card">
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
    )
}

