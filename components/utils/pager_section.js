import Link from "next/link";

/**
 * Quick links shown below navigation bar and above page content
 * @param {string} title - Title of current page
 * @param {Object[]} nav - Link objects which have two fields href and name
 * @returns {JSX.Element}
 */
const PagerSection = ({title, nav}) => {

    if (typeof nav === 'undefined')
        nav = [
            {
                name: "Trang chủ",
                href: "/"
            },
            {
                name: "Về chúng tôi",
                href: "/about"
            }
        ];

    return (
        <section className="pager-section">
            <div className="container">
                <div className="pager-content text-center">
                    <h2>{title}</h2>
                    <ul>
                        {nav.map((option, index) => {
                            return (
                                <li key={index}>
                                    <Link href={option.href}>
                                        {option.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {/*pager-content end*/}
                <h2 className="page-titlee">GDSC</h2>
            </div>
        </section>
    );
};
export default PagerSection;