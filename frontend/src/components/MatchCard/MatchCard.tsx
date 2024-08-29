import React from "react";
import { MatchData } from "../../types/MatchData";
import { ParticipantDto } from "../../types/ParticipantDto";
import { Avatar, Box } from "@mui/material";
import "./MatchCard.css";

interface MatchCardProps {
  data: MatchData;
}

const MatchCard = (props: MatchCardProps) => {
  return (
    <Box className="match-card-container">
      <Box className="team-container">
        {props.data.info.participants
          .filter((p) => p.teamId === 100)
          .map((p: ParticipantDto) => {
            let championName = p.championName;
            /* This is only here because there seems to be an issue with the ddragon route name with Fiddlesticks specifically */
            if (championName === "FiddleSticks") {
              championName = "Fiddlesticks";
            }
            return (
              <Box className="player-container" key={`${props.data.metadata.matchId}+${p.riotIdGameName}+${p.riotIdTagline}`}>
                <Avatar
                  src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/champion/${championName}.png`}
                />
                <Box className="match-player-name">{p.riotIdGameName}</Box>
                <Box className="player-kda">{p.kills}/{p.deaths}/{p.assists}</Box>
              </Box>
            );
          })}
      </Box>
      <Box className="team-container">
        {props.data.info.participants
          .filter((p) => p.teamId === 200)
          .map((p: ParticipantDto) => {
            let championName = p.championName;
            /* This is only here because there seems to be an issue with the ddragon route name with Fiddlesticks specifically */
            if (championName === "FiddleSticks") {
              championName = "Fiddlesticks";
            }
            return (
              <Box className="player-container" key={`${props.data.metadata.matchId}+${p.riotIdGameName}+${p.riotIdTagline}`}>
                <Avatar
                  src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/champion/${championName}.png`}
                />
                <Box className="match-player-name">{p.riotIdGameName}</Box>
                <Box className="player-kda">{p.kills}/{p.deaths}/{p.assists}</Box>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default MatchCard;
