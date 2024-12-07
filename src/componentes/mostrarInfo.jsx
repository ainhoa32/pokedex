import BarraBusqueda from "./barraBusqueda"
import PokemonInfo from "./pokemonInfo"
import { useState } from "react"

const MostrarInfo = () => {
    
    const [pokemon, setPokemon] = useState(undefined)
    const[error, setError] = useState(undefined)

    function fetchPokemon (nombre){

        fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then(response => response.json())
        .then(data => {
            setPokemon(data)
            setError(undefined)
        } )
        .catch(error => setError("No se ha encontrado el pokemon"))
    }

    let content

    if(error){
        content = <p>{error}</p>
    }else{
        content = <PokemonInfo pokemon={pokemon}/>
    }

    return (
        <div>
        <BarraBusqueda callback={fetchPokemon} />
        {content}
        </div>
    )

}

export default MostrarInfo