import "../styles/globals.css";
import "../public/assets/css/posts.css";
import FooterItem from "../components/footer/footer_item";
import HeaderItem from "../components/header/header_item";
import ResponsiveMenu from "../components/header/response_menu";
import initStore from "../store";
import { Provider } from "react-redux";
import useSWR from "swr";
import { BaseHost } from "../utils/url";
import MemberLoading from "../components/loading/member_loading";

const fetcher = (url) => fetch(url).then((res) => res.json());

function MyApp({ Component, pageProps }) {
  // const { data, error } = useSWR(`${BaseHost}/members/gen`, fetcher);
  // if (error) return <div>Error</div>;
  // if (!data) return <MemberLoading />;
  // const generationList = data?.result
  //   ? data?.result.map((e) => e.generation)
  //   : [];
  return (
    <Provider store={initStore()}>
      <div className="wrapper">
        <HeaderItem />
        <ResponsiveMenu />
        <Component {...pageProps} />
        <FooterItem />
      </div>
    </Provider>
  );
}
export default MyApp;
