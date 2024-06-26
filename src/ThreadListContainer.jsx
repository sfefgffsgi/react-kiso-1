export const ThreadListContainer = ({threadList}) => {
    if (threadList === undefined){
        return <></>
    }
    return (
        <ul id="thread-list">
            {threadList.map((thread) => (
                <li id={thread.id}>
                    {thread.title}
                </li>
            ))}
        </ul>
    )
  }
  
  export default ThreadListContainer