import axios from 'axios';
import {useEffect, useState} from 'react';
import {BaseHost} from '../../../utils/url';
import Item from './Item';
import {ERROR_NOTIFICATIONS} from "../../../utils/string";

const LatestBlogs = () => {
    const limit = 3;
    const [latestBlog, setLatestBlog] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => await axios.get(BaseHost + `/blogs?size=${limit}&sort=timeCreate,desc`);

        fetchData()
            .then(response => {
                setLatestBlog(response.data.result)
            })
            .catch(() => {
                setError(true)
            })
    }, []);

    return (
        <div className="widget widget-posts">
            <h3 className="widget-title">Latest Blogs</h3>
            <div className="wd-posts">
                {
                    error ? ERROR_NOTIFICATIONS : latestBlog.map((item, index) => {
                        return (
                            <Item id={item.id} imageUrl={item.thumbnailImgUrl} title={item.title}
                                  subtitle={item.authorName}
                                  key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default LatestBlogs;