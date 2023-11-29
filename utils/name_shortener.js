/**
 * Shorten name by abbreviating long tokens
 * @param name Name string to be shortened
 * @param length Max length
 * @return name Shortened name
 */
export const nameShortener = (name, length) => {
    if (name.length > length) {
        name = name.replace("Lương", "Lg.");
        name = name.replace("Nguyễn", "Ng.");
        name = name.replace("Lưu", "L.");
        name = name.replace("Thị", "T.");
        name = name.replace("Trần", "Tr.");
        name = name.replace("Phạm", "Ph.");
        name = name.replace("Nhật", "N.");
        name = name.replace("Ngọc H", "N. H");
        name = name.replace("Thanh Hương", "Th. Hương");
    }
    return name;
}
