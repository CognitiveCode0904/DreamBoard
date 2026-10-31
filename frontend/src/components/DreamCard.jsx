
import { Trash2, Heart } from "lucide-react";

function DreamCard({ title, description, category, onDelete }) {
    return (
        <div className="dream-card">
            <div className="dream-card-top">
                <span className="dream-category">{category}</span>
                <Heart size={20} color="#a78bfa" />
            </div>

            <h3>{title}</h3>
            <p>{description || "A beautiful dream worth chasing!"}</p>

            <div className="dream-card-bottom">
                <span>✨ Keep going!</span>

                <button className="delete-btn" onClick={onDelete}>
                    <Trash2 size={17} />
                </button>
            </div>
        </div>
    );
}

export default DreamCard;

