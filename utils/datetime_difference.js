export const datetimeDifference = (dateString) => {
    const date = new Date(dateString);
    const timeEnum = [60, 60, 24, 30, 12]
    const timeVie = ["phút", "giờ", "ngày", "tháng", "năm"]

    let secondsDifference = Math.floor(Math.abs(date - Date.now()) / 1000);

    let time, difference;
    for (let i = 0; i < timeEnum.length; i++) {
        const temp = Math.floor(secondsDifference / timeEnum[i]);
        if (i <= timeEnum.length && temp >= timeEnum[i + 1])
            secondsDifference = temp;
        else {
            [time, difference] = [i, Math.floor(secondsDifference / timeEnum[i])];
            break;
        }
    }

    if (difference === 0)
        return "Đang diễn ra";
    else if (date <= Date.now())
        return difference + " " + timeVie[time] + " trước";
    return "Còn " + difference + " " + timeVie[time];
}