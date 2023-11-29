import Comment from "./comment_item";

const CommentSection = ({comments}) => {
    const renderedComments = comments.map(({comment}) => {
        return (
            <>
                <Comment key={comment.id} data={comment}/>
                {comment.childComments.length !== 0? comment.childComments.map((childComment) =>
                    <Comment key={childComment.id} data={childComment}/>
                ) : <div/>}
            </>
        )
    });
}