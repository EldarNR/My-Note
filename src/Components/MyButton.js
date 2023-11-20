import React, { useState } from "react";
import Button from '@mui/material/Button';


const MyButton = ({ children, ...props }) => {

    return (
        <Button style={{ "margin": "5px" }
        } variant="contained" {...props} >
            {children}
        </Button >
    )

}

export default MyButton;