export const PostListContainer = ({postList}) => {
    if (postList === undefined){
        return <></>
    }

    if (postList.length === 0){
        return <>投稿なし</>
    }

    return (
        <ul id="post-list">
            {postList.map((post, i) => (
                <li id={post.id} style={{order: -i}}>
                    {post.post.split('\n').map(t => (
                        t !== '' ? <div>{t}</div> : <br/>
                    ))}
                </li>
            ))}
        </ul>
    )
  }
  
  export default PostListContainer