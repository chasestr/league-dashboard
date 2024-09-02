import React from "react";
import { MatchData } from "../../types/MatchData";
import { ParticipantDto } from "../../types/ParticipantDto";
import { Avatar, Box } from "@mui/material";
import "./MatchCard.css";

interface MatchCardProps {
  data: MatchData;
  playerName: string;
  playerTagline: string;
}

const MatchCard = (props: MatchCardProps) => {
  const player = props.data.info.participants.filter(
    (p) =>
      p.riotIdGameName === props.playerName &&
      p.riotIdTagline === props.playerTagline
  );
  let playerChampion = player[0].championName;
  if (playerChampion === "FiddleSticks") {
    playerChampion = "Fiddlesticks";
  }

  return (
    <Box className="match-card-container">
      <Box className="main-player-container">
        <Avatar
          src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/champion/${playerChampion}.png`}
          style={{width: "7vw", height: "7vw"}}
        />
      </Box>
      <Box className="team-container-1">
        {props.data.info.participants
          .filter((p) => p.teamId === 100)
          .map((p: ParticipantDto) => {
            let championName = p.championName;
            const isMainPlayer = p.riotIdGameName === props.playerName;
            /* This is only here because there seems to be an issue with the ddragon route name with Fiddlesticks specifically */
            if (championName === "FiddleSticks") {
              championName = "Fiddlesticks";
            }
            return (
              <Box
                className="player-container"
                key={`${props.data.metadata.matchId}+${p.riotIdGameName}+${p.riotIdTagline}`}
              >
                <Avatar
                  src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/champion/${championName}.png`}
                />
                <Box className="match-player-name" color={isMainPlayer ? "yellow" : ""}>{p.riotIdGameName}</Box>
                <Box className="player-kda" color={isMainPlayer ? "yellow" : ""}>
                  {p.kills}/{p.deaths}/{p.assists}
                </Box>
              </Box>
            );
          })}
      </Box>
      <Box className="team-container-2">
        {props.data.info.participants
          .filter((p) => p.teamId === 200)
          .map((p: ParticipantDto) => {
            let championName = p.championName;
            const isMainPlayer = p.riotIdGameName === props.playerName;
            /* This is only here because there seems to be an issue with the ddragon route name with Fiddlesticks specifically */
            if (championName === "FiddleSticks") {
              championName = "Fiddlesticks";
            }
            return (
              <Box
                className="player-container"
                key={`${props.data.metadata.matchId}+${p.riotIdGameName}+${p.riotIdTagline}`}
              >
                <Avatar
                  src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/champion/${championName}.png`}
                />
                <Box className="match-player-name" color={isMainPlayer ? "yellow" : ""}>{p.riotIdGameName}</Box>
                <Box className="player-kda" color={isMainPlayer ? "yellow" : ""}>
                  {p.kills}/{p.deaths}/{p.assists}
                </Box>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default MatchCard;
