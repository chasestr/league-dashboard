import React from "react";
import { MatchData } from "../../types/MatchData";
import { Avatar, Box } from "@mui/material";
import "./MatchCard.css";
import { fetchSummonerSpellName } from "../../fetchSummonerSpellName";
import PlayerItems from "../PlayerItems/PlayerItems";
import TeamContainer from "../TeamContainer/TeamContainer";
import PlayerKDA from "../PlayerKDA/PlayerKDA";

interface MatchCardProps {
  data: MatchData;
  playerName: string;
  playerTagline: string;
  region: string;
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
    <Box
      className="match-card-container"
      bgcolor={player[0].win ? "#9acf97" : "#cf8c8a"}
    >
      {player[0].win ? (
        <Box className="victory-bar" />
      ) : (
        <Box className="loss-bar" />
      )}
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
        <PlayerItems player={player[0]} />
        <PlayerKDA kills={player[0].kills} deaths={player[0].deaths} assists={player[0].assists}/>
      </Box>
      <TeamContainer
        participants={props.data.info.participants}
        className="team-container-1"
        mainPlayerName={props.playerName}
        metadata={props.data.metadata}
        region={props.region}
        teamId={100}
      />
      <TeamContainer
        participants={props.data.info.participants}
        className="team-container-2"
        mainPlayerName={props.playerName}
        metadata={props.data.metadata}
        region={props.region}
        teamId={200}
      />
    </Box>
  );
};

export default MatchCard;
