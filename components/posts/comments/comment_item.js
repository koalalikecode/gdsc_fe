import styles from "./comment.module.css"
import NewComment from "./new_comment";
import Tooltip from "../../utils/tooltip";

const Comment = ({data}) => {
    const {
        authorName,
        rawContent,
        timeCreate
    } = data

    const time = new Date(timeCreate)
    return (
        <div className="mb-1">
            <div className="d-flex justify-content-between">
                <h2 className={styles.comment_author}>{authorName}</h2>
                <small className={styles.comment_muted}>{time.toUTCString().replace(" GMT", "")}</small>
            </div>
            <p className={styles.comment_content}>{rawContent}</p>
            {data.parentCommentId ? <div/> :
                <div>
                    <span>{data.childComments.length + " câu trả lời\t"}</span>
                    <button className="btn btn-light" disabled={true}>Trả lời</button>
                </div>
            }
        </div>
    )
}

export default Comment;