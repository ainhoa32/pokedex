import { useState } from "react"


const  BarraBusqueda = ({ callback }) => {

    const [searchQuery, setSearchQuery] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        callback(searchQuery.toLocaleLowerCase())
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="pokemon">Introduce el nombre del pokemon: </label>
            <input value={searchQuery} type="text" name="pokemon" id="pokemon" onChange={(event) => setSearchQuery(event.target.value)} />
            <input type="submit" value="enviar"/>
        </form>
    )
}

export default BarraBusqueda