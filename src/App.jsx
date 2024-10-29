import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PlayerDetails from "./components/PlayerDetails";
import AddPlayerForm from "./components/AddPlayerForm";
import { useState } from "react";

function App() {
    const [puppies, setPuppies] = useState([]);

    const handleAddPlayer = (newPlayer) => {
        setPuppies((prevPuppies) => [...prevPuppies, newPlayer]);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home puppies={puppies} />} />
                <Route path="/details/:id" element={<PlayerDetails />} />
                <Route path="/add-player" element={<AddPlayerForm onAdd={handleAddPlayer} />} />
            </Routes>
        </Router>
    );
}

export default App;
