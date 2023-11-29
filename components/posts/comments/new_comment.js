import styles from "./comment.module.css"
import axios from "axios";
import {BaseHost} from "../../../utils/url";
import {useState} from "react";

const NewComment = ({postId, replyTo}) => {
    const [notification, setNotification] = useState();

    const addComment = async event => {
        event.preventDefault();
        if (event.target.authorName.value !== "" && event.target.rawContent.value !== "")
            await axios.post(`${BaseHost}/blogs/${postId}/comments`, {
                authorName: event.target.authorName.value,
                blogId: postId,
                rawContent: event.target.rawContent.value
            })
                .then(() => setNotification(<div className="alert alert-success" role="alert">Đã thêm bình luận!</div>))
                .catch(error => alert(error));
        else
            setNotification(<div className="alert alert-danger" role="alert">Bạn chưa nhập thông tin!</div>);
    }

    return (
        <form id="new-comment" className={styles.comment_group} onSubmit={addComment}>
            <div className="mb-3">
                <label htmlFor="authorName" className={styles.comment_form_label}>Tên hiển thị</label>
                <input type="text" className="form-control" id="authorName"
                       aria-describedby="Tên bạn muốn hiển thị khi bình luận"
                       required/>
            </div>
            <div className="mb-3">
                <label htmlFor="rawContent" className={styles.comment_form_label}>Nội dung</label>
                <input type="text" className="form-control" id="rawContent"
                       placeholder="Nhấn tổ hợp [Windows + .] để nhập emoji"
                       required/>
            </div>
            {notification}
            <button type="submit" className="btn btn-primary">Bình luận</button>
        </form>
    )
}

export default NewComment