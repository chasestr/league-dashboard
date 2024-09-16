import { Box } from "@mui/material";
import React from "react";
import "./PageHeader.css";

const PageHeader = () => {
  return (
    <Box className="page-header-container">
      <a href="/" className="page-header-text">
        League Dashboard
      </a>
    </Box>
  );
};

export default PageHeader;
