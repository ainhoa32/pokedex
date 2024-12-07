

const PokemonInfo = ({ pokemon }) => {
    if (pokemon) {
        return (
            <div>
                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.front_default} alt="pokemone" />
            </div>
        )
    }

    return <p>Introdúcelo</p>
    
}

export default PokemonInfo