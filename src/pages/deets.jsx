import { useParams, Outlet, Link } from "react-router-dom";
import destinationsData from "../data/destinations.json";
import itineraryData from "../data/itinerarydetails.json";

export default function DestinationDetails() {
  const { id } = useParams();
  const destination = destinationsData.find(dest => dest.id === id);
  if (!destination) return <p>Destination not found.</p>;

 const itinerary = itineraryData[destination.name] || {};
  console.log("Destination name:", destination?.name);
  return (
    <div className="details-page">
    
      <div className="top-section">
        <div className="image-box">
          <img src={destination.image} alt={destination.name} />
        </div>

        <div className="info-box">
          <h2>{destination.name}</h2>
          <p><strong>Region:</strong> {destination.region}</p>
          <p>{destination.description}</p>
          <Link to="itinerary" className="itinerary-button">Show Itinerary</Link>
        </div>
      </div>

     <Outlet context={{ itinerary }} />
    </div>
  );
}