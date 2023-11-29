import Link from "next/link";
import styles from "./blog.module.css";
import Badge from "./badge";
import {shortenText} from "../../utils/text_shortener";
import {encodeURIVie} from "../../utils/encodeURIVie";
import {datetimeDifference} from "../../utils/datetime_difference";

const BlogItem = ({data, isChild}) => {
    if (typeof isChild === 'undefined')
        isChild = false;
    const {
        id,
        authorName,
        timeCreate,
        title,
        subTitle,
        coverImgUrl,
        thumbnailImgUrl,
        blogTag
    } = data;

    const blogTags = blogTag.map((tag) => {
        return (<a key={tag} href='#'><Badge name={tag}/></a>);
    });

    const postUrl = {
        pathname: '/blogs/[slug]',
        query: {
            pid: id,
            slug: encodeURIVie(title)
        }
    };

    return (
        <div className={styles.blog}>
            {<Link href={postUrl} passHref={true} replace={isChild}>
                <a>
                    <img src={thumbnailImgUrl} alt="Blog thumbnail"
                         className={styles.blog_img}/>
                </a>
            </Link>}
            <div className={styles.blog_body}>
                <div className={styles.blog_header}>
                    <div className={styles.author}>
                        <img src={coverImgUrl} className={styles.author_img} alt="Author image"/>
                        <span className={styles.author_name}>{authorName}</span>
                    </div>
                    <div className={styles.blog_tags}>
                        {blogTags}
                    </div>
                </div>
                {<Link href={postUrl} passHref={true}>
                    <a>
                        <h2 className={styles.blog_title}>{shortenText(title, 50)}</h2>
                    </a>
                </Link>}
                <div className={styles.blog_subtitle}>{shortenText(subTitle, 120)}</div>
                <div className={styles.blog_footer}>
                    {datetimeDifference(timeCreate)}
                </div>
            </div>
        </div>
    );
};
export default BlogItem;
