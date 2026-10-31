
import DreamCard from "./DreamCard";
import AddDream from "./AddDream";

function Dashboard({ dreams, onAddDream, onDeleteDream }) {
    return (
        <main className="dashboard">
            <header className="dashboard-header">
                <div>
                    <span className="welcome">WELCOME TO YOUR SPACE ✨</span>
                    <h1>My Dream Board</h1>
                    <p>Every big achievement starts with a little dream.</p>
                </div>
            </header>

            <div className="stats-card">
                <h2>{dreams.length}</h2>
                <p>Total Dreams Added</p>
            </div>

            <AddDream onAddDream={onAddDream} />

            <h2 className="section-title">Your Dreams 💜</h2>

            <div className="dream-grid">
                {dreams.map((dream) => (
                    <DreamCard
                        key={dream.id}
                        {...dream}
                        onDelete={() => onDeleteDream(dream.id)}
                    />
                ))}
            </div>

            {dreams.length === 0 && (
                <p className="empty-message">
                    Your dream journey starts here! Add your first dream 🌸
                </p>
            )}
        </main>
    );
}

export default Dashboard;

