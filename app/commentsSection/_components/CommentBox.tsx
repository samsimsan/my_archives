import Image from "next/image";
import { comments, Reply, User } from "../_interfaces/allInterfaces"
import { Button } from "@/components/ui/button";
import { Dot, ThumbsDown, ThumbsUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface CommentBoxProps {
    comment: comments;
    reply: boolean;
    handleReply: (id: number | string) => void;
}


const CommentBox = ({ comment, reply, handleReply }: CommentBoxProps) => {



    return (
        <>
            <Separator className={`${reply ? "hidden" : "mb-2 mt-6"}`} />
            <div className={`text-sm text-justify grid grid-cols-[auto_1fr] gap-x-4 gap-2 mr-4 ${reply && "ml-10 mt-2"}`}>
                <Image
                    src={"/" + comment.user.image.png}
                    alt='userImage'
                    width={reply ? 30 : 37}
                    height={reply ? 30 : 37}
                    className='row-span-2'
                />
                <div className="flex items-center">
                    <h2 className="font-semibold text-gray-800">{comment.user.username}</h2>
                    <Dot className="text-gray-500 h-4 w-4" />
                    <p className="text-gray-400 font-medium text-sm">{comment.createdAt}</p>
                </div>
                <p className=" text-gray-600">
                    {comment.content}
                </p>
                <div className="text-sm font-medium text-gray-500 flex col-start-2 items-center">
                    <p className="p-0 text-gray-500 hover:text-slate-600 active:text-slate-800" onClick={() => handleReply(comment.id)}>Reply</p>
                    <Dot className="text-gray-500 h-4 w-4" />
                    <p className="p-0 text-gray-500 hover:text-slate-600">Share</p>
                    <Dot className="text-gray-500 h-4 w-4" />
                    <p className="text-sm">100 Likes</p>
                    <Dot className="text-gray-500 h-4 w-4" />
                    <p className="p-0 text-gray-500 hover:text-slate-600"><ThumbsUp className="h-4 w-4" /></p>
                    <Dot className="text-gray-500 h-4 w-4" />
                    <p className="p-0 text-gray-500 hover:text-slate-600"><ThumbsDown className="h-4 w-4" /></p>
                </div>
            </div>
        </>
    );
}

export default CommentBox