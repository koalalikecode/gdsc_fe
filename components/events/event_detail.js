import Image from "next/image";
import styles from "./event.module.css"
import React from "react";

const EventDetail = ({event}) => {
    const role = {
        "speaker": "Diễn giả",
        "guest": "Khách mời",
        "judge": "Giám khảo",
        "moderator": "Điều phối",
        "host": "MC"
    }

    const eventMeta = () => {
        return (
            <div className={styles.event_sidebar}>
                <ul className="clt">
                    <li>
                        <img src="/assets/img/cir3.png" alt=""/>
                        <div className="clt-info">
                            <h3>{event.location.name + " " + event.location.address}</h3>
                        </div>
                    </li>
                    <li>
                        <img src="/assets/img/cir4.png" alt=""/>
                        <div className="clt-info">
                            <h3>{event.time.split("T")[0]}
                                <span>{event.time.split("T")[1].replace("Z", "").split(":").slice(0, 2).join("h")}</span>
                            </h3>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <div className="page-content ">
            <div className="container">
                <div className="row post-body mx-2">
                    <h1 style={{color: "#F05B5B"}}>{event.title}</h1>
                    {/*<Image
                                src={event.imageUrl}
                                height={450}
                                width={900}
                                objectFit={"cover"}
                                alt={event.title}
                            />*/}
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-8">
                        <img
                            className={styles.event_img + " mb-3"}
                            src={event.imageUrl}
                            alt={event.title}/>
                        <div className={"clt d-block d-md-none"}>
                            <div className={"mb-3"}>
                                <a href={event.eventUrl.info}>
                                    <button type="button" className={styles.event_button} style={{fontSize: "large"}}>
                                        Chi tiết sự kiện trên Facebook
                                    </button>
                                </a>
                            </div>
                            {event.eventUrl.register.length === 0 ? <div/> : <div>
                                <a href={event.eventUrl.register ? event.eventUrl.register : "#"}>
                                    <button type="button"
                                            className={styles.event_button_primary}  style={{fontSize: "x-large"}}>
                                        Đăng ký ngay
                                    </button>
                                </a>
                            </div>}
                        </div>
                        {event.description.includes("h2") ?
                            <div dangerouslySetInnerHTML={{__html: event.description}}/> :
                            <p style={{
                                fontSize: "medium",
                                textAlign: "justify",
                                color: "black",
                                wordWrap: "break-word",
                                whiteSpace: "pre-wrap",
                                lineHeight: "2rem"
                            }}>{event.description}</p>}
                        <div className="clt d-flex justify-content-between">
                    <span className="my-3">
                        <a href={event.eventUrl.info}>
                            <button type="button" className={styles.event_button}>
                                Chi tiết sự kiện trên Facebook
                            </button>
                        </a>
                    </span>
                            {event.eventUrl.register.length === 0 ? <div/> : <span className="my-3">
                        <a href={event.eventUrl.register ? event.eventUrl.register : "#"}>
                            <button type="button"
                                    className={styles.event_button_primary}>
                                Đăng ký ngay
                            </button>
                        </a>
                    </span>}
                        </div>
                    </div>
                    <div className="col-lg-4 order-first order-md-last">
                        {eventMeta()}
                        <div className={styles.event_sidebar + " order-first order-md-2"}>
                            <p className={styles.guest_title}>Khách mời</p>
                            <hr className={styles.line}/>
                            <ul className="d-flex flex-column">
                                {event.guests.map(guest =>
                                    <li className={"d-flex mb-3 " + styles.guestWidget} key={guest.id}>
                                        <img
                                            className={styles.guest_img}
                                            src={guest.avatarUrl}
                                            alt={guest.name}
                                        />
                                        <div className="flex flex-column flex-wrap justify-content-center">
                                            <p style={{fontSize: "large", fontWeight: "bold"}}>{guest.name}</p>
                                            <p>{role[guest.role]}</p>
                                            <p>{guest.company ? guest.company : ""}</p>
                                        </div>
                                    </li>)
                                }
                            </ul>
                        </div>
                        <div className={"clt sticky-top pt-5 d-none d-md-block"}>
                            <img
                                className={styles.event_img}
                                src={event.imageUrl}
                                alt={event.title}/>
                            <div className={"my-3"}>
                                <a href={event.eventUrl.info}>
                                    <button type="button" className={styles.event_button} style={{fontSize: "larger"}}>
                                        Chi tiết sự kiện trên Facebook
                                    </button>
                                </a>
                            </div>
                            {event.eventUrl.register.length === 0 ? <div/> : <div>
                                <a href={event.eventUrl.register ? event.eventUrl.register : "#"}>
                                    <button type="button"
                                            className={styles.event_button_primary}  style={{fontSize: "x-large"}}>
                                        Đăng ký ngay
                                    </button>
                                </a>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetail;
