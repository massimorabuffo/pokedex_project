import { useState, useEffect } from "react";
import { PokeCard } from "./PokeCard";

export function PokemonList() {
    const [pokemonData, setPokemonData] = useState([]);

    const fetchData = async () => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=400&offset=0")
        const dataJson = await data.json()
        
        dataJson.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const responseJson = await response.json();
            setPokemonData(prev=>[...prev, responseJson])
        }
        )
        return dataJson;
    }

    console.log(pokemonData);

    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
            console.error(error);
        }
    }, [])

    return (
        <div className="container">
            {!pokemonData ? <h1>Catching Pokemons...</h1> : pokemonData.map(pokemon=>
                <div>
                    <PokeCard key={pokemon.id} name={pokemon.name} img={pokemon.sprites.front_default} details={pokemon}/>
                </div>)
            }
        </div>
    )
}