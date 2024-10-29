import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const URL = "https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-MT-WEB-PT/players";

function PlayerDetails() {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        const fetchPlayerDetails = async () => {
            const result = await fetch(`${URL}/${id}`);
            const json = await result.json();
            setPlayer(json.data.player);
        };
        fetchPlayerDetails();
    }, [id]);

    if (!player) return <div>Loading...</div>;

    return (
        <div>
            <h2>{player.name}</h2>
            <img src={player.imageUrl} alt={player.name} />
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
            <p>Owner: {player.owner}</p>
            <p>Team: {player.team}</p>
        </div>
    );
}

export default PlayerDetails;
