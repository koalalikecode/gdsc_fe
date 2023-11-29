import Head from "next/head";
// import FooterItem from "../../../components/footer/footer_item";
// import HeaderItem from "../../../components/header/header_item";
// import ResponsiveMenu from "../../../components/header/response_menu";
// import MemberDetail from "../../../components/members_page/member_detail";
import PagerSection from "../../../components/utils/pager_section";
import MemberFilteredByGen from "../../../components/members_page/member_gen_section";
import {BaseHost} from "../../../utils/url";
import {MEMBER_META_DESCRIPTION, MEMBER_META_THUMBNAIL} from "../../../utils/string";

const GenerationPage = ({member}) => {
    return (
        <>
            <Head>
                <title>Thành viên Gen {member[0].generation} | GDSCxHUST</title>
                <meta name="description"
                      content={MEMBER_META_DESCRIPTION}
                      key="desc"/>
                <meta property="og:title" content={`Thành viên Gen ${member[0].generation} | GDSCxHUST`}/>
                <meta property="og:description"
                      content={MEMBER_META_DESCRIPTION}/>
                <meta property="og:image"
                      content={MEMBER_META_THUMBNAIL}/>
            </Head>
            <PagerSection title={`Thành viên Gen ${member[0].generation}`}/>
            <MemberFilteredByGen gen={member[0].generation} member={member}/>
        </>
    );
};

export const getStaticPaths = async () => {
    const res = await fetch(`${BaseHost}/members/gen?page=0&size=400`);
    const data = await res.json();

    const array = data?.result.map((e) => e.generation);
    const paths = array.map((e) => {
        return {
            params: {genID: e.toString()},
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const gen = context.params.genID;
    const res = await fetch(
        `${BaseHost}/members/gen-` + gen + "?page=0&size=400"
    );
    const data = await res.json();
    return {
        props: {member: data.result},
    };
};

export default GenerationPage;
