import { useMemo } from "react";

export const useSortedPosts = (post, sort) => {
    const sortedPost = useMemo(() => {
        if (sort) {
            return [...post].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return post;
    }, [sort, post]);
    return sortedPost;
};

export const usePosts = (post, sort, query) => {
    const sortedPosts = useSortedPosts(post, sort);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) =>
            post.title.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, sortedPosts]);
    return sortedAndSearchedPosts;
};
