import React from "react";
import { ParticipantDto } from "../../types/ParticipantDto";
import Box from "@mui/material/Box";
import { MetadataDto } from "../../types/MetadataDto";
import Avatar from "@mui/material/Avatar";
import "./TeamContainer.css";

interface TeamContainerProps {
  participants: ParticipantDto[];
  teamId: number;
  className: string;
  mainPlayerName: string;
  metadata: MetadataDto;
  region: string;
}

const TeamContainer = (props: TeamContainerProps) => {
  return (
    <Box className={props.className}>
      {props.participants
        .filter((p) => p.teamId === props.teamId)
        .map((p: ParticipantDto) => {
          let championName = p.championName;
          const isMainPlayer = p.riotIdGameName === props.mainPlayerName;
          /* This is only here because there seems to be an issue with the ddragon route name with Fiddlesticks specifically */
          if (championName === "FiddleSticks") {
            championName = "Fiddlesticks";
          }
          return (
            <Box
              className="player-container"
              key={`${props.metadata.matchId}+${p.riotIdGameName}+${p.riotIdTagline}`}
            >
              <Avatar
                src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/champion/${championName}.png`}
              />
              <a
                className="match-player-name"
                style={{ color: isMainPlayer ? "yellow" : "#fff" }}
                color={isMainPlayer ? "yellow" : "#fff"}
                href={`/player/${props.region}/${p.riotIdGameName}/${p.riotIdTagline}`}
              >
                {p.riotIdGameName}
              </a>
              <Box className="player-kda" color={isMainPlayer ? "yellow" : ""}>
                {p.kills}/{p.deaths}/{p.assists}
              </Box>
            </Box>
          );
        })}
    </Box>
  );
};

export default TeamContainer;
