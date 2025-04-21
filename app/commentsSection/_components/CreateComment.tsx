import { useAlldataContext } from '../_provider/dataProvider'
import Image from 'next/image';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';
import { comments } from '../_interfaces/allInterfaces';

const CreateComment = () => {

    const { currentUser, setAllComments } = useAlldataContext();
    const [newComment, setNewComment] = useState<string>("");

    const handleNewComment = () => {
        if (newComment.length == 0) return;

        let commentToAdd: comments = {
            id: uuidv4(),
            content: newComment,
            createdAt: "today",
            score: 0,
            user: currentUser,
            replies: []
        };

        setAllComments(prev => (
            {
                totalComments: prev.totalComments + 1,
                comments: [
                    ...prev.comments,
                    commentToAdd
                ]
            }
        ));

        setNewComment("");
    }

    return (
        <div className='grid grid-cols-[auto_1fr] gap-x-4 gap-2'>
            <Image
                src={"/" + currentUser.image.png}
                alt='userImage'
                width={37}
                height={37}
                className='row-span-2'
            />
            <Textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className=' text-gray-800 border-2 border-gray-300 bg-white/50 placeholder:text-gray-400 placeholder:font-medium focus-visible:border-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0'
                placeholder='Add a comment...'
            />
            <Button onClick={handleNewComment} variant="secondary" className='col-start-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 sm:text-lg sm:px-10 sm:py-6  text-gray-700 font-medium tracking-wide'>Post</Button>
        </div>
    )
}

export default CreateComment