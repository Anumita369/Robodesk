import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  return showDashboard ? (
    <div className="min-h-screen bg-gradient-to-br from-[#f7fdff] to-[#cfe9ff]">
      {/* Dashboard screen */}
      <Dashboard
        robotId="deskbot_001"
        token="test"
        onLogout={() => setShowDashboard(false)}
      />
    </div>
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-[#f7fdff] to-[#cfe9ff]">
      {/* Landing / hero screen with Services button */}
      <NavBar onServicesClick={() => setShowDashboard(true)} />
    </div>
  );
};

export default App;
