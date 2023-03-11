import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'

import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'

const PostsList = () => {
    // const posts = useSelector(state => state.posts)
    const posts = useSelector(selectAllPosts)

    // localeCompare returns -1, 1, or 0 based on if one is greater than the other
    // slice returns shallow copy of array
    // store shallow copy into orderedPosts
    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article>
            <h3>{post.title}</h3>

            <p>{post.content.substring(0, 100)}</p>

            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date}/>
            </p>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}

export default PostsList