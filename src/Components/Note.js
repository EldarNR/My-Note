import React from "react";
import MyButton from "./MyButton";

import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {
    const { title, body, isFavorite } = props.post;

    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant="body2" component="p">
                        ID: {props.post.id}
                    </Typography>
                    <Typography className="Title" variant="h5" gutterBottom>
                        {title}
                    </Typography>
                    <Typography color={"#424242"} className="text" variant="body2" gutterBottom>
                        {body}
                    </Typography>
                    <MyButton onClick={() => props.remove(props.post)} style={{ marginRight: 10 }}>
                        <DeleteIcon />
                    </MyButton>
                </CardContent>
            </Card>
        </>
    );
};

export default Note;
