import { useSearchParams, useOutletContext } from "react-router-dom";

export default function Itinerary() {
  const [searchParams, setSearchParams] = useSearchParams();
  const day = searchParams.get("day") || "1";
  const outletContext = useOutletContext();
  const itinerary = outletContext?.itinerary || {};
  const dayData = itinerary[day]; 

    const handleDayChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("day", e.target.value);
    setSearchParams(newParams);
  };


  return (
    <div className="itinerary-box">
      <h3>Day {day} Itinerary</h3>
      <select value={day} onChange={handleDayChange}>
        <option value="1">Day 1</option>
        <option value="2">Day 2</option>
        <option value="3">Day 3</option>
      </select>


      {dayData ? (
        ["Travel", "Foodtrip", "Hotels"].map(category => (
          <div key={category} className="itinerary-category">
            <h4>{category}</h4>
            <ul>
              {dayData[category].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

          </div>
        ))
      ) : (
        <p>No itinerary found for Day {day}.</p>
      )}
    </div>
  );
}

