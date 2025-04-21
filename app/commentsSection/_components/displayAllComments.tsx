import React from 'react'
import { useAlldataContext } from '../_provider/dataProvider'
import CommentBox from './CommentBox';

const DisplayAllComments = () => {

  const { AllComments } = useAlldataContext();

  const handleAddReply = (id: number | string) => {
    console.log("a new comment under the id: ", id);
  }

  return (
    <div className='grid gap-2 mt-8'>
      {AllComments.comments.map(comment => (
        <>
          {/* <p>{comment.content}</p> */}
          <CommentBox comment={comment} reply={false} handleReply={handleAddReply} />
          {comment.replies && (
            comment.replies.map((reply) => (
              // <p className='ml-4'>{reply.content}</p>
              <CommentBox comment={reply} reply={true} handleReply={handleAddReply} />
            ))
          )}
        </>
      ))}
    </div>
  )
}

export default DisplayAllComments