import { Box } from "@mui/material";
import React from "react";
import "./PageHeader.css";
import SearchBar from "../SearchBar/SearchBar";

const PageHeader = () => {
  return (
    <Box className="page-header-container">
      <a href="/" className="page-header-text">
        LoLDash
      </a>
      <SearchBar/>
    </Box>
  );
};

export default PageHeader;
