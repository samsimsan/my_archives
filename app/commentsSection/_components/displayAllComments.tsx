import React from 'react'
import { useAlldataContext } from '../_provider/dataProvider'

const DisplayAllComments = () => {

  const {AllComments} = useAlldataContext();

  return (
    <div className='grid gap-2'>
      {AllComments.comments.map(comment => (
        <p key={comment.id}>{comment.content}</p>
      ))}
    </div>
  )
}

export default DisplayAllComments