export const shortenText = (text, maxLength) => {
    const sentence = text.split(".")[0];
    return sentence.length <= maxLength ? sentence : sentence.substr(0, text.substr(0, maxLength).lastIndexOf(" ")) + "...";
}