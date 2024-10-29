import { useState } from "react";

const URL = "https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-MT-WEB-PT/players";

function AddPlayerForm({ onAdd }) {
    const [formData, setFormData] = useState({
        name: "",
        breed: "",
        status: "",
        imageUrl: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const newPlayer = await response.json();
        onAdd(newPlayer.data.player);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="breed" placeholder="Breed" onChange={handleChange} />
            <input name="status" placeholder="Status" onChange={handleChange} />
            <input name="imageUrl" placeholder="Image URL" onChange={handleChange} />
            <button type="submit">Add Player</button>
        </form>
    );
}

export default AddPlayerForm;
