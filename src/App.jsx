import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Header } from './Header'
import { PaginationPart } from './PaginationPart'
import { ThreadListContainer } from './ThreadListContainer'


function App() {
  const [threadList, setThreadList] = useState([]);
  const [offset, setOffset] = useState(0);

  const fetchThreadList = () => {
    let apiUrl = `https://railway.bulletinboard.techtrain.dev/threads?offset=${offset}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        if (data.ErrorCode === void 0) {
          setThreadList(data);
        } else {
          console.error('Failed to fetch threads:', data.ErrorMessageJP);
        }
      })
      .catch(error => {
        console.error('Error fetching threads:', error);
      })
  }

  useEffect(() => {
    fetchThreadList();
  }, []);
  
  return (
    <>
      <Header />
      <main>
        <h1>新着スレッド</h1>
        <div className="card">
          <PaginationPart
            offset={offset}
            setOffset={setOffset}
            onClickFunction={fetchThreadList}
            retData={threadList}
          />
          <ThreadListContainer
            threadList={threadList}
          />
          <PaginationPart
            offset={offset}
            setOffset={setOffset}
            onClickFunction={fetchThreadList}
            retData={threadList}
          />
        </div>
      </main>
    </>
  )
}

export default App
