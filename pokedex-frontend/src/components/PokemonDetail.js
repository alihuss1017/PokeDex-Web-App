import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

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
    { stat: "Attack", value: pokemon.attack },
    { stat: "Defense", value: pokemon.defense },
    { stat: "Sp. Atk", value: pokemon.sp_atk },
    { stat: "Sp. Def", value: pokemon.sp_def },
    { stat: "Speed", value: pokemon.speed },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">{pokemon.name}</h1>
      <img
        className="w-24 h-24"
        src={`https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/${pokemon.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.png`}
        alt={pokemon.name}
      />
      <RadarChart outerRadius={90} width={400} height={300} data={stats}>
        <PolarGrid />
        <PolarAngleAxis dataKey="stat" stroke="#ccc" />
        <PolarRadiusAxis angle={30} domain={[0, 200]} />
        <Radar name="Stats" dataKey="value" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
}

export default PokemonDetail;
