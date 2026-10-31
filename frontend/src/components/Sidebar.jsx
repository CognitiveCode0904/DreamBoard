
import { LayoutDashboard, Sparkles, Heart } from "lucide-react";

function Sidebar({ activePage, setActivePage }) {
    return (
        <aside className="sidebar">
            <h2><Sparkles /> DreamBoard</h2>

            <nav>
                <div
                    className={`nav-item ${activePage === "dashboard" ? "active" : ""}`}
                    onClick={() => setActivePage("dashboard")}
                >
                    <LayoutDashboard size={20} />
                    Dashboard
                </div>

                <div
                    className={`nav-item ${activePage === "dreams" ? "active" : ""}`}
                    onClick={() => setActivePage("dreams")}
                >
                    <Heart size={20} />
                    My Dreams
                </div>
            </nav>

            <p className="sidebar-footer">Dream big. Start small. ✨</p>
        </aside>
    );
}

export default Sidebar;


