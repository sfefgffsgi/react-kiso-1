import { useNavigate } from "react-router-dom"

export const ThreadListContainer = ({threadList}) => {
    const navigate = useNavigate();
    if (threadList === undefined){
        return <></>
    }

    if (threadList.length === 0){
        return <></>
    }

    return (
        <ul id="thread-list">
            {threadList.map((thread) => (
                <li id={thread.id}>
                    <div onClick={() => {navigate(`/threads/${thread.id}`, {state: {title: thread.title}})}}>
                        {thread.title}
                    </div>
                </li>
            ))}
        </ul>
    )
  }
  
  export default ThreadListContainer