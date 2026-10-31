
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import DreamCard from "./components/DreamCard";
import "./App.css";

function App() {
  const [dreams, setDreams] = useState([]);
  const [activePage, setActivePage] = useState("dashboard");

  const addDream = (dream) => {
    setDreams((prev) => [...prev, dream]);
  };

  const deleteDream = (id) => {
    setDreams((prev) => prev.filter((dream) => dream.id !== id));
  };

  return (
    <div className="app">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {activePage === "dashboard" ? (
        <Dashboard
          dreams={dreams}
          onAddDream={addDream}
          onDeleteDream={deleteDream}
        />
      ) : (
        <main className="dashboard">
          <h1>My Dreams 💜</h1>
          <p>All the beautiful things you're working towards.</p>

          <div className="dream-grid" style={{ marginTop: 30 }}>
            {dreams.map((dream) => (
              <DreamCard
                key={dream.id}
                {...dream}
                onDelete={() => deleteDream(dream.id)}
              />
            ))}
          </div>

          {dreams.length === 0 && (
            <p className="empty-message">
              No dreams yet. Head to Dashboard and add one! ✨
            </p>
          )}
        </main>
      )}
    </div>
  );
}

export default App;


