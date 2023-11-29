import MemberFilteredByGen from "./member_gen_section";
const MemberSection = (props) => {
  return (
    <>
      <MemberFilteredByGen gen={props.id} member={props.gen} />
    </>
  );
};

export default MemberSection;
