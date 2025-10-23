import Home from "./Home"
import PokePage from "./PokePage"
import {Routes, Route} from "react-router-dom"
export default function App() {

  return <> 
          <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route path = "/pokemon/:name" element = {<PokePage />} />
          </Routes>
         </>
}