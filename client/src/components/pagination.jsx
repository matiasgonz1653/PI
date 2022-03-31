import React from "react";

export default function Paginado ({dogsOnPage, allDogs, paginado}) {
    const pageNumbers = []

    for(let i = 0; i<Math.ceil(allDogs/dogsOnPage); i++) {
        pageNumbers.push(i+1)
    }


    return(
        <div>
            <ol>
                {pageNumbers?.map(n => (
                <li className="number" key={n} onClick={() => paginado(n)}>   
                </li>
            ))}
            </ol>    
        </div>
    )
}