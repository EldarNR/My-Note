import React from 'react'
import TextField from '@mui/material/TextField';

const MyInput = (props) => {
    return (
        <TextField style={{ props }}  {...props} id="outlined-basic"
            variant="outlined" />
    )
}

export default MyInput;