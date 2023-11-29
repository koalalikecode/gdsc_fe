import Badge from "../blogs/badge";
import styles from "./post.module.css"
import {useState} from "react";
import TableOfContents from "./table_of_contents";

const Post = ({data}) => {
    const {
        rawContent,
        authorName,
        timeCreate,
        title,
        subTitle,
        coverImgUrl,
        thumbnailImgUrl,
        blogTag
    } = data;

    const time = new Date(timeCreate)

    const [copy, setCopy] = useState(false);

    const blogTags = blogTag.map((tag) => {
        return (<a key={tag} href='#'><Badge name={tag}/></a>);
    });

    const blogMeta = () => {
        return (
            <div className="d-flex flex-column flex-sm-row justify-content-between mb-3">
                    <span className={styles.author}>
                        <img src={coverImgUrl} className={styles.author_img} alt="Blog author"/>
                        <div className="d-flex flex-column">
                            <span className={styles.author_name}>{authorName}</span>
                            <span>Đăng lúc {time.toUTCString().replaceAll(" GMT", "")}</span>
                        </div>
                    </span>
                <span className="share mt-3">
                        <div className="d-none d-sm-block">Chia sẻ bằng:</div>
                        <div>
                            <button type="button" className="btn btn-primary mr-2"
                            >
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location}`}>
                                    <i className="fab fa-facebook-f"/>      Share
                                </a>
                            </button>
                            <button type="button" className="btn btn-light"
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location).then(r => setCopy(true))
                                    }}>
                                    <i className="fas fa-link"/>    Copy
                            </button>
                        </div>
                    </span>
            </div>
        )
    }

    return (
        <article className="d-flex flex-column">
            <div className={`${styles.blog_tags} mb-3`}>
                {blogTags}
            </div>
            <div className="d-flex flex-column mb-3">
                <h1 className={`${styles.title} mb-3`}>{title}</h1>
                {blogMeta()}
                <div className={styles.subtitle}>{subTitle}</div>
            </div>
            <div className="d-block d-lg-none">
                <h1 style={{color: "black", fontSize: "x-large", marginBottom: "1rem"}}>Nội dung chính</h1>
                <TableOfContents rawContent={data ? data.rawContent : ""}/>
            </div>
            <div dangerouslySetInnerHTML={{__html: rawContent}}/>
            {blogMeta()}
        </article>
    );
};
export default Post;