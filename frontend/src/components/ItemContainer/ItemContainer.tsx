import { Avatar, Box } from "@mui/material";
import React from "react";
import "./ItemContainer.css";

interface ItemContainerProps {
  id?: number;
}

const ItemContainer = (props: ItemContainerProps) => {
  if (props.id) {
    return (
      <Avatar
        src={`https://ddragon.leagueoflegends.com/cdn/14.16.1/img/item/${props.id}.png`}
        style={{ width: "3vw", height: "3vw", borderRadius: "0.5vw" }}
        className="item-container"
      />
    );
  }
  return (<Box className="empty-item-container"></Box>);
};

export default ItemContainer;
