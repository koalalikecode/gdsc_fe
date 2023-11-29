import {useEffect, useState} from "react";

import {BaseHost} from "../../utils/url";
import Head from "next/head";
import useSWR from "swr";
import MemberLoading from "../../components/loading/member_loading";
import PagerSection from "../../components/utils/pager_section";
import MemberShortlist from "../../components/members_page/member_shortlist";
import {MEMBER_META_DESCRIPTION, MEMBER_META_THUMBNAIL} from "../../utils/string";

const fetcher = (url) => fetch(url).then((res) => res.json());

const MemberPage = () => {
    const {data, error} = useSWR(`${BaseHost}/members/gen?page=0&size=400`, fetcher);
    if (error) return <div>Error</div>;
    if (!data) return <MemberLoading/>;
    const renderItem = data?.result.map((item, index) => (
        <MemberShortlist key={index} gen={item.data} id={item.generation}/>
    ));

    return (
        <>
            <Head>
                <title>Thành viên | GDSCxHUST</title>
                <meta name="description"
                      content={MEMBER_META_DESCRIPTION}
                      key="desc"/>
                <meta property="og:title" content={"Thành viên GDSCxHUST"}/>
                <meta property="og:description"
                      content={MEMBER_META_DESCRIPTION}/>
                <meta property="og:image"
                      content={MEMBER_META_THUMBNAIL}/>
            </Head>
            <PagerSection title={"Thành viên CLB"}/>
            {renderItem}
        </>
    );
};
export default MemberPage;