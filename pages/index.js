import Head from "next/head";
import useSWR from "swr";
import JoinUs from "../components/helper/join_us";
import AboutSection from "../components/home_page/about_section/about_section";
import MainSection from "../components/home_page/main_section";
import MemberLoading from "../components/loading/member_loading";
import { BaseHost } from "../utils/url";
import CoreTeamSection from "../components/home_page/core_team/coreteam_section";
import { DEFAULT_THUMBNAIL, HOME_META_DESCRIPTION } from "../utils/string";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  // const {data, error} = useSWR(`${BaseHost}/members/core-team`, fetcher);
  // if (error) return <div>Error</div>;
  // if (!data) return <MemberLoading/>;
  return (
    <>
      <Head>
        <title>Trang chủ | GDSCxHUST</title>
        <meta name="description" content={HOME_META_DESCRIPTION} key="desc" />
        <meta property="og:title" content={"Trang chủ | GDSCxHUST"} />
        <meta property="og:description" content={HOME_META_DESCRIPTION} />
        <meta property="og:image" content={DEFAULT_THUMBNAIL} />
      </Head>
      <MainSection />
      <AboutSection />
      <CoreTeamSection />
      <JoinUs />
    </>
  );
}
