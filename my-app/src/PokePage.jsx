// NotePage.jsx
import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import PokeData from "./poke_data.json"
import Header from "./components/Header"
import StatChart from "./components/StatChart"
import PokeTable from "./components/PokeTable"
import typeColors from "./components/typeColors"
import "./pokepage.css"

export default function PokePage() {
  const { name } = useParams() // gets the dynamic segment
  const pokemon = PokeData.find(n => n.name === name)
  const [pokeDetails, setPokeDetails] = useState({})

  const pokeStats = pokeDetails?.stats?.map((stat) => stat.base_stat)
  const pokeTypes = pokeDetails?.types?.map((type) => type.type.name)
  const pokeAbilities = pokeDetails?.abilities?.map((ability) => ability.ability.name)

  const containerStyle = {
                          backgroundColor: typeColors?.[pokeTypes?.[0]]?.color,
                         }

  useEffect(function() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    .then(res => res.json())
    .then(data => setPokeDetails((data)))
  }, [])

  
  return <>
          <Header />
          <div style = {containerStyle} className = "poke-page-container">
          <h1>{pokemon.dex}: {pokemon.name}</h1>
          <div className = "sprite-chart-table-container">
            <div>
              <img src = {`https://img.pokemondb.net/sprites/black-white/normal/${pokemon.name.toLowerCase()}.png`}
                alt={pokemon.name}/>
            </div>
            <div>
              {pokeStats && pokeTypes && pokeAbilities && pokeDetails.height 
                && pokeDetails.weight && pokeDetails.height && pokeDetails.species &&
                <PokeTable height = {pokeDetails.height} weight = {pokeDetails.weight}
                species = {pokeDetails.species} types = {pokeTypes} stats = {pokeStats} 
                abilities = {pokeAbilities}/>}
            </div>
            <div>
              {pokeStats && pokeTypes && <StatChart types = {pokeTypes} stats = {pokeStats}/>}
            </div>
            
          </div>
          </div>
        </>
}
