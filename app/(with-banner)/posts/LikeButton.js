'use client'

import React, { useState } from 'react'

import styles from '../../../styles/home.module.css'

const LikeButton = ({ id }) => {
  const [liked, setLiked] = useState(false)
  return (
    <button onClick={() => setLiked(!liked)} className={styles.likebutton}>
      {liked ? '♥️' : '♡'}
    </button>
  )
}

export default LikeButton
