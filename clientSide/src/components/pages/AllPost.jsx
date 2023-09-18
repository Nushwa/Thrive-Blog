import React from 'react'
import Post from "../Post"
import "../../stylesheets/posts.css"

export default function AllPost({posts}) {
  return (
    <div className="container posts row">
        {posts.map((p) => (
          <Post post={p} />
        ))}
    </div>
  )
}
