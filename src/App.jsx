import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import { Movie } from "./pages/Movie/Movie"
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer"
import Browse from "./pages/Browse/Browse"


function App() {

  return (
    <div className="App">
      <Navbar />
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
