import { Routes, Route } from "react-router-dom";
import "./App.css";

import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";
import Home from "./screens/Home";
import Vent from "./screens/Vent";
import Education from './screens/Education';
import Depression from "./screens/Depression";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Lobby" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/vent" element={<Vent />} />
        <Route path="/education" element={<Education />} />
        <Route path="/depression" element={<Depression />} />
      </Routes>
    </div>
  );
}

export default App;
