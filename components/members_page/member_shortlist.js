import MemberFilteredByGenShortList from "./member_gen_shortlist";
const MemberShortlist = (props) => {
  return (
    <>
      <MemberFilteredByGenShortList gen={props.id} member={props.gen} />
    </>
  );
};

export default MemberShortlist;
