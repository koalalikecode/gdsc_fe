import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import styles from "./member_item.module.css";
import {nameShortener} from "../../utils/name_shortener"

const MAX_NAME_LENGTH = 15;
const MemberItem = (props) => {
    useEffect(() => {
        AOS.init({});
    }, []);
    let formatName = nameShortener(props.data.name, MAX_NAME_LENGTH);

    const formatRole = () => {
        return (
            <div className={`${"d-flex flex-wrap mb-1 mb-md-2"}`}>
                  <span className={`${"badge badge-pill badge-warning mr-1 mb-1 " + styles.badge}`}>
                    {props.data.department.length >= 2 ? props.data.department.split(",")[0] : props.data.department}
                  </span>
                {props.data.department.length >= 2 ?
                    <span className={`${"badge badge-pill badge-info mr-1 mb-1 " + styles.badge}`}>
                    {props.data.department.split(",")[1]}
                  </span> : <span/>
                }
            </div>
        );
    };

    return (
        <div data-aos="zoom-in" data-aos-offset={100}>
            <Link href={"/members/details/" + props.data.id} passHref={true}>
                <div className={`${styles.member_card} ${"d-flex flex-column mb-3 mb-lg-4"} ${styles.grow}`}>
                    <img
                        className={styles.member_image}
                        src={props.data.avatarUrl}
                        alt={props.data.name}
                    />
                    <div className={`${styles.information} ${"justify-content-around"}`}>
                        {formatRole()}
                        <h1 className={styles.name}>{formatName}</h1>
                    </div>
                </div>
            </Link>
        </div>
    );
};
export default MemberItem;
