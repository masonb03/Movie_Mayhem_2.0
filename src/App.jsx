import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import { Movie } from "./pages/Movie/Movie"


function App() {

  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Movie />} />
      </Routes>
    </div>
  )
}

export default App
