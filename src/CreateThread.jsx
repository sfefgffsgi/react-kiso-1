import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { Header } from './Header'

export const CreateThread = () => {
  const navigate = useNavigate();
  const createNewThread = (e) => {
    e.preventDefault();

    let apiUrl = 'https://railway.bulletinboard.techtrain.dev/threads';
    let title = document.getElementById('thread-title').value;

    if (title == ''){
      return false;
    }

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"title": title})
    })
    .then(res => res.json())
    .then(data => {
      if (data.id != void 0) {
        navigate("/");
      } else {
        console.error('Failed to fetch threads:', data.ErrorMessageJP);
      }
    })
    .catch(error => {
      console.error('Error fetching threads:', error);
    })
  }
  
  return (
    <>
      <Header />
      <main>
        <a id='return-nav' href='/'>Home</a>
        <h1>スレッド作成</h1>
        <div className="card">
          <form method="post" onSubmit={createNewThread}>
            <label htmlFor="thread-title">スレッドタイトル：</label>
            <input type="text" id="thread-title" name="thread-title" required />
            <button type="submit">作成</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default CreateThread