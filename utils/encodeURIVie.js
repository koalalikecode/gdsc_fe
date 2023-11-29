import {removeVietnameseTokens} from "./remove_vie_token";

export const encodeURIVie = (string) => {
    return encodeURI(removeVietnameseTokens(string).toLowerCase().replace(/\s\s+/g, ' ').replaceAll(" ", "-"))
}