const getHeadings = (source) => {
    const regex = /<h[1-2](.*?)<\/h[1-2]>/g;
    let headings = [];

    if (source.match(regex)) {
        source.match(regex).forEach((heading) => {
            const name = heading.includes("h1") ? "h1" : "h2";
            const temp = heading.replace(`<${name} `, "").replace(`</${name}>`, "");
            const id = temp.split(">")[0].replaceAll("\"", "").slice(3)
            const text = temp.split(">")[1]

            if (name === "h1") {
                headings.push({id, text, items: []});
            } else if (name === "h2" && headings.length > 0) {
                headings[headings.length - 1].items.push({id, text});
            }
        });
    }

    return headings;
};

const Headings = ({headings}) => (
    <ul>
        {headings.length > 0 ? headings.map((heading) => (
            <li key={heading.id} className="mb-4">
                <a href={`#${heading.id}`} style={{fontSize: "x-large"}}>{heading.text}</a>
                {heading.items.length > 0 && (
                    <ul>
                        {heading.items.map((child) => (
                            <li key={child.id} className="mb-2" style={{fontSize: "large"}}>
                                <a href={`#${child.id}`}>{"- " + child.text}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        )) : <div/>}
    </ul>
);

const TableOfContents = ({rawContent}) => {
    const nestedHeadings = getHeadings(rawContent);

    return (
        <nav aria-label="Table of contents">
            <Headings headings={nestedHeadings}/>
        </nav>
    );
};

export default TableOfContents;