import HeaderItem from "../../header/header_item";
import ResponsiveMenu from "../../header/response_menu";
import MainBanner from "./main_banner";

const MainSection = () => {
  return (
    <div className="main-section">
      <ResponsiveMenu />
      <MainBanner />
    </div>
  );
};
export default MainSection;
