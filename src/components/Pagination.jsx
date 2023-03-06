// This component will be located between the Header and the Content components. Also it will refresh dynamically the data from the API when the user clicks on the Previous or Next button. The Pagination component will not go below 1 or above 34. The Pagination component will have the following props:
//   characters: array
//   setCharacters: function

import React, { useState, useEffect } from 'react'

export default function Pagination ({ characters, setCharacters }) {

    const [page, setPage] = useState(1)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(res => res.json())
        .then(data => {
            setCharacters(data.results)
        })
    }, [page])

    return (
        <div className="pagination">
            <button className="pagination--button" onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
            <p className="pagination--page">Page {page}</p>
            <button className="pagination--button" onClick={() => setPage(page + 1)} disabled={page === 34}>Next</button>
        </div>
    )
}






