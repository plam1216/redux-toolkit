import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'

const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)

    const onTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const onContentChange = (event) => {
        setContent(event.target.value)
    }

    const onAuthorChange = (event) => {
        setUserId(event.target.value)
    }

    const onSavedPostClick = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )

            setTitle('')
            setContent('')
        }
    }

    // if all true, we can enable or disable form button
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOptions = users.map(user => (
        <option
            key={user.id}
            value={user.id}
        >
            {user.name}
        </option>
    ))

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label>Post Title: </label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange}
                />

                <label>Author: </label>
                <select
                    type="text"
                    id="postAuthor"
                    name="postAuthor"
                    value={userId}
                    onChange={onAuthorChange}
                >
                    <option value=""></option>
                    {usersOptions}
                </select>

                <label>Content: </label>
                <input
                    type="text"
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChange}
                />

                <button
                    type="button"
                    onClick={onSavedPostClick}
                    disabled={!canSave}
                >
                    Submit
                </button>
            </form>
        </section>
    )
}

export default AddPostForm