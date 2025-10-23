import {Link} from "react-router-dom"
import typeColors from "./typeColors"

function Card({ pokemon }) {

    let style1 = {
                  backgroundColor: typeColors[pokemon.type1.toLowerCase()].background,
                  color: typeColors[pokemon.type1.toLowerCase()].color,
                }
                
    let style2 = {
                  backgroundColor: pokemon.type2 ? typeColors[pokemon.type2.toLowerCase()].background : "",
                  color: pokemon.type2 ? typeColors[pokemon.type2.toLowerCase()].color : "",      
                  marginLeft: "5px"
                }

    return (
            
            <div id = "card">
              <p id = "name"><b>{pokemon.name}</b></p>
              <div id = "sprite-container">
                <img className = "sprite-item"
                     src = {`https://img.pokemondb.net/sprites/black-white/normal/${pokemon.name.toLowerCase()}.png`}
                     alt={pokemon.name}/>
              </div>
              <span id = "dex">{pokemon.dex}</span>
              <div id = "types">
                <span style = {style1}>{pokemon.type1}</span>
                <span style = {pokemon.type2 ? style2 : null}>{pokemon.type2}</span>
              </div>
            </div>
    )
    }

export default function GalleryCard({pokeData}) {
  return (
      <div id = "gallery">
        {pokeData.map((pokemon) =>
        <Link key = {parseInt(pokemon.dex.slice(1))} to = {`/pokemon/${pokemon.name}`}><Card pokemon = {pokemon}/></Link>)}
      </div>
)}