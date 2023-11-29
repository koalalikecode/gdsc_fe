import Comment from "./comment_item";
import styles from "./comment.module.css"

const CommentCard = ({data}) => {
    const childComments = () => {
        if (data.childComments)
            return (
                <div className="child-comments border-left border-primary ml-4 pl-4">
                    {data.childComments.map(childComment => <Comment key={childComment.id} data={childComment}/>)}
                </div>
            )
    }
    return (
        <section className={styles.comment_group}>
            <Comment data={data}/>
            {childComments()}
        </section>
    )
}

export default CommentCard