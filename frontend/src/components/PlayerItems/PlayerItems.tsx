import React from "react";
import { ParticipantDto } from "../../types/ParticipantDto";
import { Avatar, Box } from "@mui/material";
import "./PlayerItems.css";

interface PlayerItemsProps {
    player: ParticipantDto;
}

const PlayerItems = (props: PlayerItemsProps) => {
  return (
    <Box className="main-player-items-container">
      {props.player.item0 ? (
        <Avatar
          src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/item/${props.player.item0}.png`}
          style={{ width: "3vw", height: "3vw", borderRadius: "0.5vw" }}
        />
      ) : (
        <></>
      )}

      {props.player.item1 ? (
        <Avatar
          src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/item/${props.player.item1}.png`}
          style={{ width: "3vw", height: "3vw", borderRadius: "0.5vw" }}
        />
      ) : (
        <></>
      )}

      {props.player.item2 ? (
        <Avatar
          src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/item/${props.player.item2}.png`}
          style={{ width: "3vw", height: "3vw", borderRadius: "0.5vw" }}
        />
      ) : (
        <></>
      )}

      {props.player.item3 ? (
        <Avatar
          src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/item/${props.player.item3}.png`}
          style={{ width: "3vw", height: "3vw", borderRadius: "0.5vw" }}
        />
      ) : (
        <></>
      )}

      {props.player.item4 ? (
        <Avatar
          src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/item/${props.player.item4}.png`}
          style={{ width: "3vw", height: "3vw", borderRadius: "0.5vw" }}
        />
      ) : (
        <></>
      )}

      {props.player.item5 ? (
        <Avatar
          src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/item/${props.player.item5}.png`}
          style={{ width: "3vw", height: "3vw", borderRadius: "0.5vw" }}
        />
      ) : (
        <></>
      )}

      {props.player.item6 ? (
        <Avatar
          src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/item/${props.player.item6}.png`}
          style={{ width: "3vw", height: "3vw", borderRadius: "0.5vw" }}
        />
      ) : (
        <></>
      )}
    </Box>
  );
};

export default PlayerItems;