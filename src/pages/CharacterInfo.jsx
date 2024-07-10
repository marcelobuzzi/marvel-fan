import { getUrl } from "../utils/APIconnection";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import "../CharacterInfo.css";


export const CharacterInfo = () =>{

    const [character, setCharacter] = useState(null);
    const {characterId} = useParams();

    useEffect(()=>{
        getUrl(`/characters/${characterId}`).then((data)=>{
          data.data.results.map((res)=>{
            //console.log(res);
            setCharacter(res);
          });
            //setCharacter(data.results);
                      
        });
    },[characterId])

    if(!character){
        return null;
    }

    const imgUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`
    return(
        
        <div className="container-fluid align-content-center" id="characterbox">
            <div className="row">
                <div className="col">
                    <img src={imgUrl} className="img card-img" id="imgCharacter" alt={character.name} />  
                </div>
                <div className="col" id="characterdata">
                    <p className="mt-2 text-white">
                        <strong className="text-red">Nombre: </strong>
                        {character.name}
                    </p>
                    <p className="mt-2 text-white">
                        <strong className="text-red">Descripcion: </strong>                    
                        {character.description} 
                    </p>
                    <p className="mt-2 text-white">
                        <a className="text-red text-decoration-none" href={`https://www.marvel.com/comics/characters/${characterId}/${character.name}?utm_campaign=apiRef&utm_source=03f40b98fbcfc98e13bf46e48a93c89e`}>
                            <strong>Cómics</strong>
                        </a><br></br>
                        {character.comics.items.map((item)=>item.name).join(" - ")}                    
                    </p>
                    
                </div>          
            </div>
        </div>
        
    );
};