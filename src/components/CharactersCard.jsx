/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

export const CharactersCard = ({charactersMap})=>{

    const imgUrl = `${charactersMap.thumbnail.path}.${charactersMap.thumbnail.extension}`
   
    return(
        <>
            <div className="col mb-3">
                <Link to={`/characters/${charactersMap.id}`} className="my-efect-card card text-bg-dark mx-auto border-light" style={{width: '18rem'}}>
                    <img src={imgUrl} className="card-img" alt={charactersMap.name}/>
                    <div className="card-img-overlay">
                        <h5 className="card-title text-light text-shadow">{charactersMap.name}</h5>
                    </div>
                </Link>
            </div>
        </>
    )
    
}


