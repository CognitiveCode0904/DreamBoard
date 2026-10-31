
import { useState } from "react";
import { Plus } from "lucide-react";

function AddDream({ onAddDream }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Personal");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) return;

        onAddDream({
            id: Date.now(),
            title: title.trim(),
            description,
            category,
        });

        setTitle("");
        setDescription("");
        setCategory("Personal");
    };

    return (
        <form className="add-dream" onSubmit={handleSubmit}>
            <h2>✨ Add a New Dream</h2>

            <input
                placeholder="What is your dream?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <textarea
                placeholder="Describe your dream..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option>Personal</option>
                <option>Learning</option>
                <option>Career</option>
                <option>Travel</option>
                <option>Other</option>
            </select>

            <button type="submit">
                <Plus size={18} /> Add Dream
            </button>
        </form>
    );
}

export default AddDream;
