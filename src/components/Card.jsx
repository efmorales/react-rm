// The Card component will display the data passed down from the Content component. The Card component will have the following props:
//   id: number
//   name: string
//   status: string
//   species: string
//   type: string
//   image: string
//   gender: string
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

export default function Card ({ character }) {
    return (
        <div className="card">
            <div className="card__image">
                <img src={character.image} alt={character.name} />
            </div>
            <div className="card__content">
                <h2 className="card__title">{character.name}</h2>
                <p className="card__text"> Species: {character.species}</p>
                <p className="card__text"> Status: {character.status}</p>
                <p className="card__text"> {character.type}</p>
                <p className="card__text"> {character.gender}</p>
            </div>
        </div>
    )
}