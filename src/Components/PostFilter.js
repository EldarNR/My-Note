import React, { useState } from "react";
import MyInput from "./MyInput";
import MySelect from "./Select";

import { Container } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const PostFilter = ({ post, filter, setFilter }) => {
    const [show, setShow] = useState(false);

    if (!post.length) {
        return (
            <h1>
                Note not finded...
            </h1>
        )
    }

    return (
        <Container>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="Sort"
                option={[
                    {
                        value: "title",
                        name: "By Title",
                    },
                    {
                        value: "body",
                        name: "By Description",
                    },
                ]}
            />
            <MyInput onClick={() => setShow(!show)} style={{ width: show ? "79%" : "4.4%", position: "relative" }}
                value={filter.query}
                onChange={(e) => setFilter({ ...filter, query: e.target.value })}
                label={<SearchIcon />}
                variant="outlined"
            />
        </Container >
    )



}

export default PostFilter;

export const Loader = () => {
    return (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
    )
}
