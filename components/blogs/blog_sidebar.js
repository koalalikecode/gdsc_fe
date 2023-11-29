import Tags from './blog_sidebar/Tags'
import LatestBlogs from './blog_sidebar/LatestBlogs';
import RecentEvent from './blog_sidebar/RecentEvents';
import SearchBar from './blog_sidebar/SearchBar'
import {useEffect, useState} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const BlogSideBar = ({onChange}) => {
    useEffect(() => {
        AOS.init({});
    }, []);
    const handleSubmit = (val) => onChange(val);

    return (
        <div className="sidebar d-flex flex-row flex-lg-column mw-100" data-aos='fade'>
            {/*<SearchBar onSubmit={handleSubmit}/>*/}
            <LatestBlogs/>
            <RecentEvent/>
            <div className="d-none d-lg-block">
                <Tags/>
            </div>
        </div>
    );
};
export default BlogSideBar;
