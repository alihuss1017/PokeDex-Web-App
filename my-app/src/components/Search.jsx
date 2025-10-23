export default function Search({ query, setQuery }) {
    return <form>
            <div className = "search-container">
            <input placeholder = "Enter Pokémon name..." className = "search-item" type = "text" 
                value = {query} onChange = {(e) => setQuery(e.target.value)}/>
            </div>
          </form>
}