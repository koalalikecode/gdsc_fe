import {
    useEffect,
    useState,
} from 'react';

import axios from 'axios';
import Image from 'next/image';

import {ERROR_NOTIFICATIONS} from '../../../utils/string';
import {BaseHost} from '../../../utils/url';

const RecentEvent = () => {
    const limit = 3;
    const [event, setEvent] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => await axios.get(BaseHost + `/events?size=${limit}&sort=time,desc`);

        fetchData()
            .then((response) => {
                setEvent(response.data.result);
            })
            .catch(() => setError(true));
    }, []);

    return (
        <div className="widget widget-posts">
            <h3 className="widget-title">Recent Events</h3>
            <div className="wd-posts">
                {error
                    ? ERROR_NOTIFICATIONS
                    : event.map((item, index) => {
                        return (
                            <div className="wd-post d-flex flex-wrap" key={index}>
                                <div className="wd-thumb">
                                    <Image
                                        src={item.imageUrl}
                                        width={50}
                                        height={50}
                                        objectFit={'cover'}
                                        alt={`${item.title} thumbnail`}
                                    />
                                </div>
                                <div className="wd-info">
                                    <h3>
                                        <a href="">{item.title}</a>
                                    </h3>
                                    <span>{item.time.split('T')[0]}</span>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default RecentEvent;
