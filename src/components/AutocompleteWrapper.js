import React from "react";
import {Autocomplete, TextField} from "@mui/material";

const AutocompleteWrapper = () => {
    return (
    <Autocomplete
        renderInput={(params) =>
            <TextField {...params} label="Color model" size="small" />
        }
        options={options}
        getOptionLabel={(option) =>
            (`${option.colorModel1}-${option.colorModel2}-${option.colorModel3}`)
        }
        sx={{ width: 250, height: 10, textAlign: "center", flex: 0.5 }}
    />
    );
}

export default React.memo(AutocompleteWrapper);