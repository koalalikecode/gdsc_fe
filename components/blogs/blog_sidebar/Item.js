import Link from 'next/link';
import Image from 'next/image';
import {removeVietnameseTokens} from '../../../utils/remove_vie_token';

const Item = ({id, imageUrl, title, subtitle}) => {
    return (
        <div className="wd-post d-flex flex-wrap">
            <div className="wd-thumb">
                <Image
                    src={imageUrl}
                    width={50}
                    height={50}
                    objectFit={"cover"}
                    alt={`${title} thumbnail`}
                />

            </div>
            <div className="wd-info">
                <h3>
                    <Link
                        href={`/blogs/${encodeURI(removeVietnameseTokens(title).toLowerCase().replaceAll(" ", "-"))}?pid=${id}`}>
                        {title}
                    </Link>
                </h3>
                <span>{subtitle}</span>
            </div>
        </div>
    )
}

export default Item;