import Image from "next/image";
import Link from "next/link";
import styles from "./member_details.module.css";

const pillBadgeColor = [
    "dark",
    "warning text-dark",
    "info text-dark",
    "danger text-white",
    "primary",
    "secondary",
    "success",
    "light text-dark",
];

const MemberDetail = ({member}) => {
    let department = [];
    department.push(`${"Gen " + member.generation}`);
    let temp = member.department.split(",");
    department = department.concat(temp);
    const roleBadge = department.map((e, index) => (
        <span
            key={index}
            className={"mr-2 mr-lg-3 mb-3 badge rounded-pill bg-" + pillBadgeColor[department.indexOf(e)]}>
            {e}
        </span>
    ));

    const role = member.role.split(",");
    const roleSection = role.map((e, index) => (
        <li key={index} className={styles.role}>
            {e}
        </li>
    ));
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <figure className={"col-12 col-sm-5 col-lg-4 mb-3"}>
                    <img
                        className={`${styles.member_image}`}
                        src={member.avatarUrl}
                        // width={400}
                        // height={600}
                        // objectFit="cover"
                        style={{height: '500px', width: '400px', objectFit: 'cover'}}
                        alt={member.name}
                    />
                    <div className={styles.social_links + " d-flex flex-row flex-wrap justify-content-center "}>
                        <span className={`${styles.fa} ${styles.fa_facebook} m-2 ${styles.grow}`}>
                            <a href={member.memberExtraInfo[3].value} target="_blank" rel={"noreferrer"}>
                                <i className="fab fa-facebook-f"/>
                            </a>
                        </span>
                        <span className={`${styles.fa} ${styles.fa_instagram} m-2 ${styles.grow}`}>
                            <a href={member.memberExtraInfo[4].value} target="_blank" rel={"noreferrer"}>
                                <i className="fab fa-instagram"/>
                            </a>
                        </span>
                        <span className={`${styles.fa} ${styles.fa_github} m-2 ${styles.grow}`}>
                            <a href={member.memberExtraInfo[5].value} target="_blank" rel={"noreferrer"}>
                                <i className="fab fa-github"/>
                            </a>
                        </span>
                    </div>
                </figure>
                <article className={`${styles.member_body} col-sm-7 col-lg-8 d-flex flex-column`}>
                    <div className="flex-wrap">{roleBadge}</div>
                    <h1 className={`${styles.member_name}`}>{member.name}</h1>
                    <blockquote className={`${styles.member_slogan}`}>
                        {member.memberExtraInfo[2].value}
                    </blockquote>
                    <ul className={`d-flex flex-wrap`}>
                        {roleSection}
                    </ul>
                    <div>
                        <hr/>
                    </div>
                    <article className={`d-flex flex-wrap justify-content-between`}>
                        <div className={`${styles.information_key} text-uppercase mb-2 mb-lg-4`}>
                            {member.memberExtraInfo[0].key}
                        </div>
                        <div className={`${styles.information_value} mb-4`}>
                            {member.memberExtraInfo[0].value}
                        </div>
                        <div className={`${styles.information_key} text-uppercase mb-2 mb-lg-4`}>
                            {member.memberExtraInfo[1].key}
                        </div>
                        <div className={`${styles.information_value} mb-4`}>
                            {member.memberExtraInfo[1].value}
                        </div>
                        <div className={`${styles.information_key} text-uppercase mb-2 mb-lg-4`}>
                            ABOUT ME
                        </div>
                        <div className={`${styles.information_value} mb-4`}>
                            {member.memberExtraInfo[6].value}
                        </div>
                    </article>
                </article>
            </div>
        </div>
    );
};
export default MemberDetail;
