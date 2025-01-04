import { comments, Reply } from "../_interfaces/allInterfaces"


interface CommentHolderProps {
    comment: comments | Reply
}

const CommentHolder = () => {
    return (
        <div>CommentHolder</div>
    )
}

export default CommentHolder