import 'aos/dist/aos.css';
import React, {useEffect} from 'react';
import AOS from 'aos';
import Link from 'next/link';
import Image from "next/image";
import styles from './event.module.css';
import {shortenText} from "../../utils/text_shortener";
import {encodeURIVie} from "../../utils/encodeURIVie";
import {datetimeDifference} from "../../utils/datetime_difference";
import Badge from "../blogs/badge";

const EventCard = (props) => {
    useEffect(() => {
        AOS.init({});
    }, []);

    const eventUrl = {
        pathname: 'events/[slug]',
        query: {
            pid: props.id,
            slug: encodeURIVie(props.content)
        }
    };

    return (
        <div className={`${styles.event_card} wow fadeInLeft mb-5 mr-2`} data-wow-duration="1500ms"
             data-wow-delay="400ms">
            <div className={styles.grow}>
                <Link href={eventUrl} passHref={true}>
                    {/*<Image
                        src={props.image}
                        width={500}
                        height={300}
                        layout={"responsive"}
                        objectFit={"cover"}
                        className={styles.event_thumbnail}
                        alt={props.content}
                    />*/}
                    <img
                        src={props.image}
                        className={styles.event_thumbnail}
                        alt={props.content}
                    />
                </Link>
            </div>

            <div className={styles.event_body}>
                <div className={styles.event_date}>
                    <div>
                        📅 {props.time.split("T")[1].split(":").slice(0, 2).join("h") + " " + props.time.split("T")[0].split("-").reverse().join("-")}
                    </div>
                    {props.status === "HAPPENING"? <Badge name={"Đang diễn ra"}/> : <div>
                    {datetimeDifference(props.time)}
                        </div>}

                </div>
                <h2 className={styles.event_title}>{shortenText(props.content, 75)}</h2>
                <div className={styles.event_date}>
                    <div>
                        🏢 {props.name}
                    </div>
                    <div>
                        🌏 {props.address}
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>
                        <Link href={eventUrl} passHref>
                            <button type="button" className={styles.event_button}>
                                Xem thêm
                            </button>
                        </Link>
                    </div>
                    {props.register.length === 0 ? <div/> : <div>
                        <a href={props.register ? props.register : "#"}>
                            <button type="button"
                                    className={styles.event_button_primary}>
                                Đăng ký ngay
                            </button>
                        </a>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default EventCard;
