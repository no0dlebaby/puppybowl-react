import { useEffect, useState } from "react";

const URL = "https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-MT-WEB-PT/players";

function Home() {
    const [puppies, setPuppies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL);
            const json = await result.json();
            setPuppies(json.data.players);
        };
        fetchData();
    }, []);

    const filteredPuppies = puppies.filter(puppy => 
        puppy.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <h1>Puppy Bowl Players</h1>
            <input
                className="searchBar"
                type="search"
                placeholder="Search for puppies"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <br />
            <button onClick={() => window.location.href = "/add-player"}>Add a Puppy</button>
            <ul>
                {filteredPuppies.map((puppy) => (
                    <li key={puppy.id}>
                        <h2>{puppy.name}</h2>
                        <img src={puppy.imageUrl} alt={puppy.name} />
                        <p>Breed: {puppy.breed}</p>
                        <p>Status: {puppy.status}</p>
                        <button onClick={() => window.location.href = `/details/${puppy.id}`}>See Details</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
