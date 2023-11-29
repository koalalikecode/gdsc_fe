import Head from "next/head";
import AboutPageContent from "../../components/about_page/about_page_content";
import PagerSection from "../../components/utils/pager_section";
import {ABOUT_META_DESCRIPTION, DEFAULT_THUMBNAIL} from "../../utils/string";

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>Giới thiệu | GDSCxHUST</title>
                <meta name="description"
                      content={ABOUT_META_DESCRIPTION}
                      key="desc"/>
                <meta property="og:title" content={"Trang chủ | GDSCxHUST"}/>
                <meta property="og:description"
                      content={ABOUT_META_DESCRIPTION}/>
                <meta property="og:image"
                      content={DEFAULT_THUMBNAIL}/>
            </Head>
            <PagerSection title={"about"}/>
            <AboutPageContent/>
        </>
    );
};

export default AboutPage;
