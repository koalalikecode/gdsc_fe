import styles from './member_gen_section.module.css';
import MemberItem from './member_item';

const MemberFilteredByGen = (props) => {
    const renderItem = props.member?.map((e, index) => {
        return <MemberItem key={index} data={e}/>;
    });

    return (
        <div className={`${"container"}`}>
            <h1 className={styles.gen + " my-4 my-lg-5"}>Gen {props.gen}</h1>
            <div className={`${styles.member_section} ${"d-flex flex-wrap justify-content-between"}`}>
                {renderItem}
            </div>
        </div>
    );
};
export default MemberFilteredByGen;
