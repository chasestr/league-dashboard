import React from "react";
import { PlayerData } from "../../types/PlayerData";
import { MatchData } from "../../types/MatchData";
import MatchCard from "../MatchCard/MatchCard";

const MatchHistory: React.FC<PlayerData> = (p) => {
  return (
    <div>
      {p.matchData.map((d: MatchData) => (
        <MatchCard key={d.metadata.matchId} data={d}/>
      ))}
    </div>
  );
};

export default MatchHistory;
