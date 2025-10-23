import { useState } from "react"
import pokeBallImg from "../assets/pokeball.png"

export default function Header() {
    let [darkMode, setDarkMode] = useState(false)

    function screenMode() {
        setDarkMode((prevDarkMode) => !prevDarkMode)
    }
    
    if (darkMode) document.body.classList.add("dark-mode")

    else document.body.classList.remove("dark-mode")

    return (
            <header>
                <img src = {pokeBallImg}/>
                <span>Pokédex</span>
                <button className = {darkMode ? "dark-mode" : "light-mode"}
                        onClick = {screenMode}>{darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
            </header>)
}