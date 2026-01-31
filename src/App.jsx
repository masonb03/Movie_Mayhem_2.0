import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import { Movie } from "./pages/Movie/Movie"
import Footer from "./components/Footer/Footer"


function App() {

  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Movie />} />
      </Routes>
        <Footer />
    </div>
  )
}

export default App
