import React, { useState, useEffect } from 'react';
import PostList from './PostList';
import PostFilter, { Loader } from "./PostFilter";

import FetchPosts from './Fetch';
import BasicGrid from './Title';
import { usePosts } from './hook/useHook';

import "../Components/BoxLine.css";
import { getPageCount, getPagesArray } from './utils/page';
import MyButton from './MyButton';
import { Container } from '@mui/material';


const MainPage = () => {
  const [post, setPost] = useState([]);

  const [filter, setFilter] = useState({
    sort: "", query: ""
  })
  const [isPostLoading, setIsPostLoading] = useState(false);
  const sortedAndSearchedPosts = usePosts(post, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts()
  }, [page])

  let pagesArray = getPagesArray(totalPages);

  async function fetchPosts() {
    setIsPostLoading(true);
    const response = await FetchPosts.getAll(limit, page);
    setPost(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
    setIsPostLoading(false);
  }

  console.log(totalPages)
  const createPost = (newPost) => {
    setPost([...post, newPost]);
  };

  const removePost = (posts) => {
    setPost(post.filter((p) => p.id !== posts.id));
  };

  return (
    <>
      <BasicGrid create={createPost} />
      <div className='Line' />
      <PostFilter post={sortedAndSearchedPosts} filter={filter} setFilter={setFilter} />
      {
        isPostLoading ? <Loader /> :
          <PostList remove={removePost} post={sortedAndSearchedPosts} />
      }

      <Container style={{ marginTop: "10px", justifyContent: "space-around", paddingBottom: "5px" }}>
        {
          pagesArray.map((p) => (
            <MyButton style={{ left: "20%", marginLeft: "8px" }} onClick={() => setPage(p)} key={p}>{p}</MyButton>
          ))
        }
      </Container>
    </>
  );
};

export default MainPage;
