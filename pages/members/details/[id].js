import Head from 'next/head';

import MemberDetail from '../../../components/members_page/member_detail';
import PagerSection from '../../../components/utils/pager_section';
import {BaseHost} from '../../../utils/url';
import {MEMBER_META_DESCRIPTION, MEMBER_META_THUMBNAIL} from "../../../utils/string";

const MemberPage = ({member}) => {
    return (
        <>
            <Head>
                <title>{member.name + " @ GDSCxHUST"}</title>
                <meta name="description"
                      content={member.memberExtraInfo[6].value}
                      key="desc"/>
                <meta property="og:title" content={member.name + " @ GDSCxHUST"}/>
                <meta property="og:description"
                      content={member.memberExtraInfo[6].value}/>
                <meta property="og:image"
                      content={member.avatarUrl}/>
            </Head>
            <PagerSection title={member.name} nav={[{name: "Trang chủ", href: "/"}, {
                name: "Thành viên Gen " + member.generation,
                href: "/members/gen/" + member.generation
            }]}/>
            <MemberDetail member={member}/>
        </>
    );
};

export const getStaticPaths = async () => {
    const res = await fetch(`${BaseHost}/members/?page=0&size=400`);
    const data = await res.json();

    const paths = data.result.map((member) => {
        return {
            params: {id: member.id.toString()},
        };
    });
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`${BaseHost}/members/` + id);
    const data = await res.json();
    return {
        props: {member: data.result},
        revalidate: 3600 * 24 * 3,
    };
};

export default MemberPage;
