import Post from "./Post"

const Posts = () => {
    let posts = [];
    for (let i=0; i<4; i++){
        posts.push(<Post/>)
    }
    return (
        <div>
            {posts}
        </div>
        
    )
}

export default Posts;