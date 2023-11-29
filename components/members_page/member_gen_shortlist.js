import MemberItem from "./member_item";
import Link from "next/link";
import styles from "./member_gen_section.module.css";

const MemberFilteredByGenShortList = (props) => {
    const renderItem = props.member?.slice(0, 4).map((e, index) => {
        return <MemberItem key={index} data={e}/>;
    });

    return (
        <div className={`${"container mb-5"}`}>
            <div className={`${"d-flex my-4 my-md-5 justify-content-between"}`}>
                <h1 className={styles.gen}>Gen {props.gen}</h1>
                <Link href={"/members/gen/" + props.gen}>
                    <a className={styles.see_more}>Xem thêm</a>
                </Link>
            </div>
            <div className={`${styles.member_section}`}>
                {renderItem}
            </div>
        </div>
    );
};
export default MemberFilteredByGenShortList;
