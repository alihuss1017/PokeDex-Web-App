import { Link } from "react-router-dom";

const typeColors = {
  bug: "bg-lime-200 text-lime-900",
  dark: "bg-gray-800 text-white",
  dragon: "bg-indigo-200 text-indigo-900",
  electric: "bg-yellow-200 text-yellow-900",
  fairy: "bg-pink-200 text-pink-900",
  fighting: "bg-orange-300 text-orange-900",
  fire: "bg-red-200 text-red-900",
  flying: "bg-sky-200 text-sky-900",
  ghost: "bg-purple-300 text-purple-900",
  grass: "bg-green-200 text-green-900",
  ground: "bg-yellow-300 text-yellow-900",
  ice: "bg-cyan-100 text-cyan-900",
  normal: "bg-gray-200 text-gray-800",
  poison: "bg-purple-200 text-purple-900",
  psychic: "bg-rose-200 text-rose-900",
  rock: "bg-yellow-500 text-white",
  steel: "bg-slate-200 text-slate-800",
  water: "bg-blue-200 text-blue-900",
};

function PokemonCard({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.dex}`} className="block hover:opacity-80 transition">
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-md rounded-xl p-4 text-center hover:scale-105 transition">
        <h2 className="text-xl font-bold mb-2">{pokemon.name}</h2>
        <div className="flex justify-center mb-2">
          <img
            src={pokemon.name === 'Nidoran♀' ? "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-f.gif"
                : pokemon.name === 'Nidoran♂' ? "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-m.gif"
                : pokemon.name === 'Mr. Mime' ? "https://img.pokemondb.net/sprites/black-white/anim/normal/mr-mime.gif"
             : `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name.toLowerCase()}.gif`}
            alt={pokemon.name}
            className="h-16"
          />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
          #{pokemon.dex.toString().padStart(4, "0")}
        </p>
        <div className="flex justify-center gap-2 mb-2">
          <span className={`px-2 py-1 rounded text-xs font-semibold ${typeColors[pokemon.type1?.toLowerCase()]}`}>
            {pokemon.type1}
          </span>
          {pokemon.type2 && pokemon.type2 !== "None" && (
            <span className={`px-2 py-1 rounded text-xs font-semibold ${typeColors[pokemon.type2?.toLowerCase()]}`}>
              {pokemon.type2}
            </span>
          )}
        </div>
        <p className="text-sm font-medium">Abilties: {pokemon.abilities}</p>
      </div>
    </Link>
  );
}

export default PokemonCard;
