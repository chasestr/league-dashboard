import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { REGION_MAPPING } from "../../regionMapping";
import "./SearchBar.css";

const SearchBar: React.FC = () => {
  const [region, setRegion] = useState("North America");
  const [gameName, setGameName] = useState("");
  const [tagLine, setTagLine] = useState("");
  let history = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    history(`/player/${region}/${gameName}/${tagLine}`);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="search-bar__region"
      >
        {Object.keys(REGION_MAPPING).map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Game Name"
        value={gameName}
        onChange={(e) => setGameName(e.target.value)}
        className="search-bar__game-name"
      />
      <div className="search-bar__tagline-container">
        <span className="search-bar__tagline-hash">#</span>
        <input
          type="text"
          placeholder="Tagline"
          value={tagLine}
          onChange={(e) => setTagLine(e.target.value)}
          className="search-bar__tagline"
        />
      </div>
      <button type="submit" className="search-bar__button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
