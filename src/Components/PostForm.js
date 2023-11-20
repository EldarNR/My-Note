import React, { useState } from "react";
import MyInput from "./MyInput";
import MyButton from "./MyButton";

import { Card, Typography } from "@mui/material";


const PostForm = ({ create }) => {
    const [posts, setPosts] = useState({
        title: "", body: ""
    })

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...posts, id: Date.now()
        }
        create(newPost);
        setPosts({ title: "", body: "" })

    };

    return (

        <form>
            <h3>Create new Note!</h3>
            <MyInput
                type="text"
                value={posts.title}
                onChange={(e) => setPosts({ ...posts, title: e.target.value })}
                placeholder="Title post"
            />
            <p />
            <MyInput
                style={{ width: "220px" }}
                type="text"
                multiline
                rows={2}
                value={posts.body}
                onChange={(e) => setPosts({ ...posts, body: e.target.value })}
                placeholder="Description post"
            />
            <p />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>

    )
}
export default PostForm;