import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import PokemonDetail from "./components/PokemonDetail";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/pokemon")
      .then((res) => res.json())
      .then((data) => setPokemonList(data));
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white p-8 transition-colors duration-300">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-bold text-center w-full">Pokédex</h1>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="absolute right-8 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded hover:opacity-80 transition"
                >
                  {darkMode ? "☀ Light" : "🌙 Dark"}
                </button>
              </div>

              <div className="max-w-md mx-auto mb-8">
                <input
                  type="text"
                  placeholder="Search Pokémon by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {pokemonList
                  .filter((pokemon) =>
                    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                  ))}
              </div>
            </div>
          }
        />
        <Route path="/pokemon/:dex" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
