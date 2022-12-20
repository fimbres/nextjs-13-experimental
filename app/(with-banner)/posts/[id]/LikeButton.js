'use client'

import React, { useState } from 'react'

const LikeButton = ({ id }) => {
  const [liked, setLiked] = useState(false)
  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? '♥️' : '♡'}
    </button>
  )
}

export default LikeButton
