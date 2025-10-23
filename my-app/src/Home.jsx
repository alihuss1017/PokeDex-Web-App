import PokeData from "./poke_data.json";
import React from "react"
import Header from "./components/Header"
import GalleryCard from "./components/Card"
import Search from "./components/Search"
import "./home.css"
export default function Home() {

  let [query, setQuery] = React.useState("")

  let filteredPokeData = PokeData.filter((pokemon) => 
                            pokemon.name.toLowerCase().startsWith(query.toLowerCase()) && 
                            parseInt(pokemon.dex.slice(1)) < 650)

  return <> 
          <Header />
          <Search query = {query} setQuery = {setQuery}/>
          <GalleryCard pokeData = {filteredPokeData}/>
         </>
}