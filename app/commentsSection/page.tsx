"use client"
import React, { useState } from 'react'

import { data } from './data';
import { comments, User } from './_interfaces/allInterfaces';
import { AllDataContext } from './_provider/dataProvider';
import TopComponent from './_components/topComponent';
import CommentsDisplay from './_components/commentsDisplay';

const CommentSectionPage = () => {

  const [AllComments, setAllComments] = useState<{ totalComments: number; comments: comments[] }>(data.comments);
  const [currentUser, setCurrentUser] = useState<User>(data.currentUser);


  return (
    <main className='mt-24 mx-8 md:mx-auto md:w-1/2 max-sm:mx-4  mb-8'>
      <AllDataContext.Provider value={{ AllComments, setAllComments, currentUser, setCurrentUser }}>
        <TopComponent />
        <CommentsDisplay />
      </AllDataContext.Provider>
    </main>
  )
}

export default CommentSectionPage