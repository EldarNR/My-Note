import React from "react"
import Note from "./Note";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

const PostList = ({ post, remove }) => {
    return (
        <>
            <Container>
                <Grid container>
                    {post.map((post, index) =>
                        <Grid key={post.id} item xs={12} sm={6} md={4} lg={3} style={{ "padding": "15px" }}>
                            <Note remove={remove} number={index + 1} post={post} />
                        </Grid>)
                    }
                </Grid>
            </Container>
        </>
    )
}

export default PostList;