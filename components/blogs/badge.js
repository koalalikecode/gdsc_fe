const styleEnum = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']

const Badge = ({name}) => {
    let style;
    if (name === "Đang diễn ra")
        style = 'badge badge-pill badge-danger'
    else
        style = 'badge badge-pill badge-' + styleEnum[((name.charCodeAt(0) + name.charCodeAt(name.length - 1))) % styleEnum.length]

    return (
        <span className={style}>{name}</span>
    );
};
export default Badge;