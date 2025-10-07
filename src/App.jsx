import "./App.css";
import { Routes, Route } from "react-router-dom";
import UIMain from "./uimain/uimain.jsx";
import Destinations from "./pages/destinations.jsx";
import DestinationDetails from "./pages/deets.jsx";
import Itinerary from "./pages/itinerary.jsx";
import Favorites from "./pages/favorites.jsx";
import About from "./pages/about.jsx";
import Fallback from "./pages/fallback.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<UIMain />}>
        <Route index element={<Destinations />} />
       <Route path="destinations/:id" element={<DestinationDetails />}>
  <Route path="itinerary" element={<Itinerary />} />
        </Route>
        <Route path="*" element={<Fallback />} />
      </Route>
    </Routes>
  );
}
export default App;
