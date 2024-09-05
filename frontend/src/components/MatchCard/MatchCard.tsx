import React from "react";
import { MatchData } from "../../types/MatchData";
import { ParticipantDto } from "../../types/ParticipantDto";
import { Avatar, Box } from "@mui/material";
import "./MatchCard.css";
import { fetchSummonerSpellName } from "../../fetchSummonerSpellName";
import PlayerItems from "../PlayerItems/PlayerItems";

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

  let playerSpell1 = fetchSummonerSpellName(player[0].summoner1Id);
  let playerSpell2 = fetchSummonerSpellName(player[0].summoner2Id);

  return (
    <Box className="match-card-container">
      <Box className="main-player-container">
        <Avatar
          src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/champion/${playerChampion}.png`}
          style={{ width: "7vw", height: "7vw" }}
        />
        <Box className="main-player-summoner-spell-container">
          <Avatar
            src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/spell/${playerSpell1}.png`}
            style={{
              width: "3vw",
              height: "3vw",
              borderRadius: "0.5vw",
              marginBottom: "1vw",
            }}
          />
          <Avatar
            src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/spell/${playerSpell2}.png`}
            style={{ width: "3vw", height: "3vw", borderRadius: "0.5vw" }}
          />
        </Box>
        <PlayerItems player={player[0]}/>
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
                <Box
                  className="match-player-name"
                  color={isMainPlayer ? "yellow" : ""}
                >
                  {p.riotIdGameName}
                </Box>
                <Box
                  className="player-kda"
                  color={isMainPlayer ? "yellow" : ""}
                >
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
                <Box
                  className="match-player-name"
                  color={isMainPlayer ? "yellow" : ""}
                >
                  {p.riotIdGameName}
                </Box>
                <Box
                  className="player-kda"
                  color={isMainPlayer ? "yellow" : ""}
                >
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
