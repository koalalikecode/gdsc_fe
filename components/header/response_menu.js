import Link from "next/link";
import { connect } from "react-redux";

const ResponsiveMenu = ({ menuResponse }) => {
  return (
    <div className={`responsive-menu ${menuResponse ? "active" : ""}`}>
      <ul>
        <li>
          <Link href="/">Trang chủ</Link>
        </li>
        <li>
          <Link href="/about">Về chúng tôi</Link>
        </li>
        {/* <li>
          <Link href="/members">Thành viên</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/events">Sự kiện</Link>
        </li> */}
        <li>
          <Link href="/contact">Liên hệ</Link>
        </li>
      </ul>
    </div>
  );
};
const mapState = (state) => {
  return state;
};
export default connect(mapState)(ResponsiveMenu);
