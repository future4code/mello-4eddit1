import React, { useEffect, useReducer, useState } from 'react';
import { loadPosts } from './postList_services';
import { postsReducer, initialState } from './reducer';
import PostFrame from '../PostFrame/postFrame';
import { Container, SearchInput, SearchInputBox } from './postList_styles';

export default function PostList() {
    const [posts, dispatch] = useReducer(postsReducer, initialState);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        dispatch({ type: 'LOAD_POSTS', payload: await loadPosts() });
    }

    return (
        <>
            <SearchInputBox>
                <SearchInput
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Busque um post"
                />
            </SearchInputBox>
            <Container>
                {posts.map((post) => {
                    return search === '' ||
                        post.title.includes(search) ||
                        post.text.includes(search) ||
                        post.username.includes(search) ? (
                        <PostFrame {...post} dispatch={dispatch} />
                    ) : (
                        <></>
                    );
                })}
            </Container>
        </>
    );
}
