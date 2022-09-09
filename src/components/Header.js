import React from "react";
import { Box } from "@mui/material";

const Header = () => {
    const options = [
        {
            colorModel1: "RGB",
            colorModel2: "HEX",
            colorModel3: "CMYK",
        },
    ]
    return (
    <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{flex: 1}}>
           Colors converter
        </h1>
    </Box>
    );
}

export default React.memo(Header);