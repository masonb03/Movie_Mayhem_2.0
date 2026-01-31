import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import { Movie } from "./pages/Movie/Movie"
import Footer from "./components/Footer/Footer"
import Browse from "./pages/Browse/Browse"


function App() {

  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Movie />} />
        <Route path="/browse" element={<Browse />}/>
      </Routes>
        <Footer />
    </div>
  )
}

export default App
