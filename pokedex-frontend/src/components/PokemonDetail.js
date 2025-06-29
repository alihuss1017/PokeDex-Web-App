import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import { Tooltip } from "recharts";

function PokemonDetail() {
  const { dex } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/pokemon/${dex}`)
      .then(res => res.json())
      .then(data => setPokemon(data));
  }, [dex]);

  if (!pokemon) return <div className="text-white">Loading...</div>;

  const stats = [
    { stat: "HP", value: pokemon.hp },
    { stat: "Attack", value: pokemon.atk },
    { stat: "Defense", value: pokemon.def },
    { stat: "Sp. Atk", value: pokemon.sp_atk },
    { stat: "Sp. Def", value: pokemon.sp_def },
    { stat: "Speed", value: pokemon.speed },
  ];

  return (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
    <h1 className="text-4xl font-bold mb-8">{pokemon.name}</h1>

    {/* Side-by-side layout */}
    <div className="flex flex-row items-center justify-center w-full max-w-5xl gap-16">
      
      {/* Left: Larger Sprite */}
      <div className="flex justify-center">
        <img
          className="w-64 h-64 object-contain"
            src={pokemon.name === 'Nidoran♀' ? "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-f.gif"
                : pokemon.name === 'Nidoran♂' ? "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-m.gif"
                : pokemon.name === 'Mr. Mime' ? "https://img.pokemondb.net/sprites/black-white/anim/normal/mr-mime.gif"
             : `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name.toLowerCase()}.gif`}
          alt={pokemon.name}
        />
      </div>

      {/* Right: Enlarged Radar Chart */}
    <RadarChart outerRadius={150} width={500} height={400} data={stats}>
      <PolarGrid />
      <PolarAngleAxis dataKey="stat" stroke="#ccc" />
      <PolarRadiusAxis angle={30} domain={[0, 200]} />
      <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
      <Tooltip />
    </RadarChart>
    </div>
  </div>
);

}

export default PokemonDetail;
