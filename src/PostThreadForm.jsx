import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export const PostThreadForm = ( {fetchPostList} ) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = 'threads/'
  const threadId = location.pathname.substring(location.pathname.indexOf(path) + path.length)

  const postNewThread = (e) => {
    e.preventDefault();

    let apiUrl = `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`;
    let post = document.getElementById('post-content').value;

    if (post == ''){
      return;
    }

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"post": post})
    })
    .then(res => res.json())
    .then(data => {
      if (data.id != void 0) {
        document.postForm.reset();
        fetchPostList();
      } else {
        console.error('Failed to post:', data.ErrorMessageJP);
      }
    })
    .catch(error => {
      console.error('Error fetching threads:', error);
    })
  }
  
  return (
      <div id='post-form-container' className='half'>
        <form name="postForm" method="post" onSubmit={postNewThread}>
          {/* <input type="hidden" id="thread-id" name="thread-id" value={threadId} /> */}
          <label htmlFor="post-content">投稿内容：</label>
          <textarea id="post-content" name="post-content" required />
          <button type="submit">投稿</button>
        </form>
      </div>
  )
}

export default PostThreadForm