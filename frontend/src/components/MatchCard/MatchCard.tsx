import React from "react";
import { MatchData } from "../../types/MatchData";
import { ParticipantDto } from "../../types/ParticipantDto";
import { Avatar, Box } from "@mui/material";

interface MatchCardProps {
  data: MatchData;
}

const MatchCard = (props: MatchCardProps) => {
  return (
    <Box display="flex" justifyContent={"space-between"} border={2}>
      <Box display="flex" flexDirection="column">
        {props.data.info.participants
          .filter((p) => p.teamId === 100)
          .map((p: ParticipantDto) => {
            let championName = p.championName;
            /* This is only here because there seems to be an issue with the ddragon route name with Fiddlesticks specifically */
            if (championName === "FiddleSticks") {
              championName = "Fiddlesticks";
            }
            return (
              <Box display={"flex"} m={"2vw"} alignItems="center" key={`${props.data.metadata.matchId}+${p.riotIdGameName}+${p.riotIdTagline}`}>
                <Avatar
                  src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/champion/${championName}.png`}
                />
                <Box marginLeft={2}>{p.riotIdGameName}</Box>
              </Box>
            );
          })}
      </Box>
      <Box display="flex" flexDirection="column">
        {props.data.info.participants
          .filter((p) => p.teamId === 200)
          .map((p: ParticipantDto) => {
            let championName = p.championName;
            /* This is only here because there seems to be an issue with the ddragon route name with Fiddlesticks specifically */
            if (championName === "FiddleSticks") {
              championName = "Fiddlesticks";
            }
            return (
              <Box display={"flex"} m={"2vw"} alignItems="center" key={`${props.data.metadata.matchId}+${p.riotIdGameName}+${p.riotIdTagline}`}>
                <Avatar
                  src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/champion/${championName}.png`}
                />
                <Box marginLeft={2}>{p.riotIdGameName}</Box>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default MatchCard;
