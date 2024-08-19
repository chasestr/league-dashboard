import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { Box } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Box>
      <h1>League Dashboard</h1>
      <SearchBar />
    </Box>
  );
};

export default Home;
