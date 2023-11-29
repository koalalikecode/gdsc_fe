import Head from "next/head";
import EventDetail from "../../components/events/event_detail";
import PagerSection from "../../components/utils/pager_section";
import {BaseHost} from "../../utils/url";
import {ShimmerPostDetails} from "react-shimmer-effects";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import {EVENT_META_DESCRIPTION, EVENT_META_THUMBNAIL} from "../../utils/string";
import {shortenText} from "../../utils/text_shortener";

const EventDetailPage = () => {
    const router = useRouter();
    const eventId = router.query.pid;
    const [event, setEvent] = useState();

    useEffect(() => {
        const fetcher = async () => {
            await axios.get(`${BaseHost}/events/${eventId}`)
                .then(response => setEvent(response.data.result))
        }

        if (router.isReady)
            fetcher().catch(error => alert(error));
    }, [eventId, router.isReady])

    if (event)
        return (
            <>
                <PagerSection title={event.title}
                              nav={[{name: "Trang chủ", href: "/"}, {name: "Toàn bộ sự kiện", href: "/events"}]}/>
                <Head>
                    <title>{event.title}</title>
                    <meta name="description"
                          content={event? event.title : "GDSCxHUST Latest Events"}
                          key="desc"/>
                    <meta property="og:title" content={event? event.title : "GDSCxHUST Latest Events"}/>
                    <meta property="og:description"
                          content={event? `Thời gian tổ chức: ${event.time.split("T")[0]}` : EVENT_META_DESCRIPTION}/>
                    <meta property="og:image"
                          content={event? event.imageUrl : EVENT_META_THUMBNAIL}/>
                </Head>
                {!event ? <ShimmerPostDetails/> : <EventDetail event={event}/>}
            </>
        );
    else return (
        <></>
    )
};

export default EventDetailPage;