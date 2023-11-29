import Head from "next/head";
import PagerSection from "../../components/utils/pager_section";
import {BaseHost} from "../../utils/url";
import BlogItem from "../../components/blogs/blog_card";
import BlogSideBar from "../../components/blogs/blog_sidebar";
import BlogLoading from "../../components/loading/blog_loading";
import {useState, useEffect} from "react";
import axios from 'axios';
import {useRouter} from "next/router";
import {
    BLOG_META_DESCRIPTION,
    DEFAULT_THUMBNAIL,
} from "../../utils/string";

const BlogPage = () => {
    const router = useRouter();
    const paramPage = router.query.page ? router.query.page : 0;
    const [pageIndex, setPageIndex] = useState(paramPage);
    const [maxPage, setMaxPage] = useState(5000);
    const [data, setData] = useState();
    const pageLimit = 8;

    useEffect(() => {
        const fetchData = async () => await axios.get(`${BaseHost}/blogs?page=${pageIndex}&size=${pageLimit}&sort=timeCreate,desc`);

        router.replace({
            pathname: "/blogs",
            query: {page: pageIndex}
        }, undefined, {scroll: false})

        fetchData()
            .then(response => {
                if (response.data.result.length === 0) {
                    setMaxPage(pageIndex);
                    setPageIndex(pageIndex - 1);
                } else
                    setData(response.data)
            });

        window.scrollTo({
            top: document.querySelector(".pager-section").getBoundingClientRect().height,
            behavior: 'smooth'
        })
    }, [pageIndex]);

    const renderItems = data?.result.map((item) => {
        return <BlogItem key={item.id} data={item}/>;
    });

    return (
        <>
            <PagerSection title={"Blogs"}
                          nav={[{name: "Sự kiện", href: "/events"}, {name: "Thành viên", href: "/members"}]}/>
            <section className="page-content">
                <Head>
                    <title>Bài viết mới nhất | GDSCxHUST</title>
                    <meta name="description"
                          content={BLOG_META_DESCRIPTION}
                          key="desc"/>
                    <meta property="og:title" content={"Bài viết mới nhất | GDSCxHUST"}/>
                    <meta property="og:description"
                          content={BLOG_META_DESCRIPTION}/>
                    <meta property="og:image"
                          content={DEFAULT_THUMBNAIL}/>
                </Head>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12">
                            <div className="blog-section p-0 posts-page">
                                <div className="blog-posts">
                                    {!data ? <BlogLoading/> : renderItems}
                                </div>
                                <nav>
                                    <ul className="pagination justify-content-end">
                                        <li className={"page-item " + (pageIndex === 0 ? "disabled" : "")}>
                                            <a className="page-link"
                                               onClick={() => setPageIndex(pageIndex - 1)}>
                                                Previous Page
                                            </a>
                                        </li>
                                        <li className={"page-item " + (pageIndex === (maxPage - 1) ? "disabled" : "")}>
                                            <a className="page-link"
                                               onClick={() => setPageIndex(pageIndex + 1)}>
                                                Next Page
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <aside className="col-lg-3 d-none d-sm-block">
                            <BlogSideBar/>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPage;
