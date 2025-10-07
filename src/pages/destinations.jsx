import destinationsData from "../data/destinations.json";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function Destinations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";
  const region = searchParams.get("region") || "";
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return destinationsData.filter(dest =>
      dest.name.toLowerCase().includes(query) &&
      (region ? dest.region === region : true)
    );
  }, [query, region]);

  const handleSearchChange = (e) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set("q", e.target.value);
      return newParams;
    });
  };

    const handleRegionChange = (e) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set("region", e.target.value);
      return newParams;
    });
  };

return (
    <div>
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search destinations..."
          value={query}
          onChange={handleSearchChange}
        />
        <select value={region} onChange={handleRegionChange}>
          <option value="">All Regions</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
        </select>
      </div>

    <div className="destinations-grid">
  {filtered.map(dest => (
    <div
      key={dest.id}
      className="card"
      onClick={() => navigate(`/destinations/${dest.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img src={dest.image} alt={dest.name} />
      <h3>{dest.name}</h3>
      <p>{dest.region}</p>
      <p>{dest.description}</p>
    </div>
  ))}
</div>     
    </div>
  );
}
