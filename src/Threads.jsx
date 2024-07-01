import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from "react-router";

import { Header } from './Header'
import { PaginationPart } from './PaginationPart'
import { PostListContainer } from './PostListContainer'
import { PostThreadForm } from './PostThreadForm'

export const Threads = () => {
  const location = useLocation()

  const [postList, setPostList] = useState([]);
  const [offset, setOffset] = useState(0);
  const { thread_id } = useParams();

  const fetchPostList = () => {
    let apiUrl = `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts?offset=${offset}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        if (data.posts != void 0) {
          setPostList(data.posts);
        } else {
          console.error('Failed to fetch threads:', data.ErrorMessageJP);
        }
      })
      .catch(error => {
        console.error('Error fetching threads:', error);
      })
  }

  useEffect(() => {
    fetchPostList();
  }, []);
  
  return (
    <>
      <Header />
      <main>
        <a id='return-nav' href='/'>Home</a>
        <h1>{location.state.title}</h1>
        <div className='thread-container'>
          <div className="card half">
            <PostListContainer
              postList={postList}
            />
            <PaginationPart
              offset={offset}
              setOffset={setOffset}
              onClickFunction={fetchPostList}
              retData={postList}
              revMode={true}
            />
          </div>
          <PostThreadForm 
            fetchPostList={fetchPostList}
            />
        </div>
      </main>
    </>
  )
}

export default Threads