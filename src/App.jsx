import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css'

import {Routes, Route} from "react-router-dom"

import NavBar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";


function App() {
  return (
    <div className="App">

      <NavBar />

        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<AllBeersPage />} />
          <Route path="/random-beer" element={<RandomBeerPage />} />
          <Route path="/new-beer" element={<AddBeerPage />} />
          <Route path="/beers/:beerId" element={<BeerDetailsPage />} />

        </Routes>

    </div>
  );
}

export default App;
