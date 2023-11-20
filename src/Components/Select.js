import React from "react";
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MySelect = ({ option, defaultValue, value, onChange }) => {

    return (

        <FormControl style={{ width: "15%" }} >
            <InputLabel id="demo-simple-select-label">{defaultValue}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label="value"
                onChange={e => onChange(e.target.value)}
            >
                <MenuItem disabled={true} value={defaultValue}>{defaultValue}</MenuItem>
                {
                    option.map(option =>
                        <MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>
                    )
                }
            </Select>
        </FormControl>
    )
}

export default MySelect;


