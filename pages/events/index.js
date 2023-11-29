import 'aos/dist/aos.css';
import {useEffect} from 'react';
import AOS from 'aos';
import Head from 'next/head';
import useSWR from 'swr';
import EventCard from '../../components/events/event_item';
import EventLoading from '../../components/loading/event_loading';
import PagerSection from '../../components/utils/pager_section';
import {BaseHost} from '../../utils/url';
import {EVENT_META_DESCRIPTION, EVENT_META_THUMBNAIL} from "../../utils/string";

const fetcher = (url) => fetch(url).then((res) => res.json());

const EventPage = (props) => {
    useEffect(() => {
        AOS.init({});
    }, []);

    const {data, error} = useSWR(`${BaseHost}/events?sort=time,desc`, fetcher);

    if (error) return <div>Error</div>;

    const renderItems = (eventStatus) => data?.result.map((item, index) => {
        if (item.status === eventStatus)
            return (
                <div className="col-lg-6" key={index}>
                    <div data-aos={`zoom-out-${index % 2 === 0 ? "right" : "left"}`}>
                        <EventCard
                            content={item.title}
                            name={item.location.name}
                            image={item.imageUrl}
                            time={item.time}
                            address={item.location.address}
                            id={item.id}
                            register={item.status === "PAST" || item.status === "HAPPENING" ? "" : item.eventUrl.register}
                            status={item.status}
                        />
                    </div>
                </div>
            );
    });

    return (
        <>
            <PagerSection title={"Sự kiện"}/>
            <section className="page-content">
                <Head>
                    <title>Sự kiện | GDSCxHUST</title>
                    <meta name="description"
                          content={EVENT_META_DESCRIPTION}
                          key="desc"/>
                    <meta property="og:title" content={"GDSCxHUST Latest Events"}/>
                    <meta property="og:description"
                          content={EVENT_META_DESCRIPTION}/>
                    <meta property="og:image"
                          content={EVENT_META_THUMBNAIL}/>
                </Head>
                <div className="container mt-0">
                    <div className="row mb-5">
                        <h1 style={{fontSize: "xx-large", fontWeight: "bold", color: "#2F4858"}}>Sự kiện Sắp diễn
                            ra</h1>
                    </div>
                    <div className="row">
                        {!data ? <EventLoading/> : renderItems("UPCOMING")}
                    </div>
                    <div className="row mb-5">
                        <h1 style={{fontSize: "xx-large", fontWeight: "bold", color: "#2F4858"}}>Sự kiện Đã diễn ra</h1>
                    </div>
                    <div className="row">
                        {!data ? <EventLoading/> : renderItems("PAST")}
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventPage;
