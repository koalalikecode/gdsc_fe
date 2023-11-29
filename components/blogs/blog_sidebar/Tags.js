import axios from 'axios';
import {useState, useEffect} from 'react';
import {BaseHost} from '../../../utils/url';
import Badge from "../badge";

const Tags = () => {
    const limit = 5;
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetcher = async () => await axios.get(BaseHost + `/blogs/tag/filters?page=0&size=${limit}`);

        fetcher()
            .then(response => setTags(response.data.result))
            .catch(error => alert(error))
    }, [])

    return (
        <div className="widget widget-tags">
            <h3 className="widget-title">Tags</h3>
            <ul>
                {
                    tags.map((item, index) => {
                            return (
                                <li key={index} className="m-1" style={{fontSize: "larger"}}>
                                    {<Badge name={item.name}/>}
                                </li>
                            )
                        }
                    )}
            </ul>
        </div>
    )
}

export default Tags;