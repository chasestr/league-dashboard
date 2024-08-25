import React from "react";
import { MetaData, PlayerData } from "../../pages/PlayerProfile";

const MatchHistory: React.FC<PlayerData> = (p) => {
    return (
        <div>
            {p.matchData.map((d: MetaData) => (
            <div key={d.matchId}>{d.matchId}</div>
            ))}
        </div>
    );
}

export default MatchHistory;