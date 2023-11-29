import styles from "../../members_page/member_gen_section.module.css";
import MemberItem from "../../members_page/member_item";

const CoreTeamSection = () => {
  //   const renderItem = props.gen?.map((e, index) => {
  //     return <MemberItem key={index} data={e} />;
  //   });

  return (
    <div className={`${"container"}`}>
      <h1 className={styles.gen + " my-4"}>Core Team</h1>
      <div
        className={`${
          styles.member_section
        } ${"d-flex flex-wrap justify-content-between"}`}
      >
        {/* {renderItem} */}
      </div>
    </div>
  );
};
export default CoreTeamSection;
