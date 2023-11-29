import Head from "next/head";
import {BaseHost} from "../../utils/url";
import BlogLoading from "../../components/loading/blog_loading";
import Post from "../../components/posts/blog_post";
import {useRouter} from "next/router";
import TableOfContents from "../../components/posts/table_of_contents";
import axios from "axios";
import {useEffect, useState} from "react";
import BlogItem from "../../components/blogs/blog_card";
import CommentCard from "../../components/posts/comments/comment_card";
import NewComment from "../../components/posts/comments/new_comment";
import {DEFAULT_THUMBNAIL} from "../../utils/string";

const BlogPost = (props) => {
    const router = useRouter()
    const postId = router.query.pid;
    const [data, setData] = useState();
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetcher = async () => {
            await axios.get(`${BaseHost}/blogs/${postId}`)
                .then(response => setData(response.data.result));
        }
        const commentsFetcher = async () => {
            await axios.get(`${BaseHost}/blogs/${postId}/comments`)
                .then(response => setComments(response.data.result));
        }

        if (router.isReady) {
            commentsFetcher().catch(() => setError(true));
            fetcher().catch(() => setError(true));
        }
    }, [postId, router.isReady])

    useEffect(() => {
        const relatedPostsFetcher = async () => {
            await axios.get(`${BaseHost}/blogs/tag?name=${data.blogTag[0]}`)
                .then(response => setRelatedPosts(response.data.result));
        }

        if (data)
            relatedPostsFetcher().catch(() => setError(true));
    }, [data])

    return (
        <>
            <section className="page-content">
                <Head>
                    <title>{data ? data.title : "GDSC HUST Blogs"}</title>
                    <meta name="description"
                          content={data ? data.subTitle : "An error happened while getting data from server!"}
                          key="desc"/>
                    <meta property="og:title" content={data ? data.title : "GDSC HUST Blogs"}/>
                    <meta property="og:description"
                          content={data ? data.subTitle : "An error happened while getting data from server!"}/>
                    <meta property="og:image"
                          content={data ? data.thumbnailImgUrl : DEFAULT_THUMBNAIL}/>
                </Head>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            {!data ? <BlogLoading/> : <Post data={data}/>}
                        </div>
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="sticky-top pt-5">
                                <TableOfContents rawContent={data ? data.rawContent : ""}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row post-body mx-1">
                        <h1>Bình luận</h1>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <NewComment postId={postId}/>
                            <hr/>
                            {comments?.map(comment => <CommentCard key={comment.id} data={comment}/>)}
                        </div>
                    </div>
                    <div className="row post-body mb-4 mx-1">
                        <h1>Bài viết liên quan</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 col-md-12">
                            {relatedPosts?.map(relatedPost => <BlogItem key={relatedPost.id} data={relatedPost} isChild={true}/>)}
                        </div>
                        <div className="col-lg-3"/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPost;
