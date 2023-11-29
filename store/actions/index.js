import ApiPlaceHolder from '../../apis/ApiPlaceHolder';
import {
    FETCH_EVENTS,
    FETCH_MEMBERS,
    MENU_RESPONSE,
} from '../../utils/string';

export const menuResponse = (status) => {
    return {
        type: MENU_RESPONSE,
        payload: status,
    };
};

export const GetEvent = () => {
    return async (dispatch) => {
        const response = await ApiPlaceHolder.get("/events");
        dispatch({
            type: FETCH_EVENTS,
            payload: response,
        });
    };
};

export const GetMembers = (gen) => {
    return async (dispatch) => {
        const response = await ApiPlaceHolder.get(`/members/gen-${gen}`);
        if (response.data.status === 200) {
            const nameGen = "gen" + gen;
            return dispatch({
                type: FETCH_MEMBERS,
                payload: {
                    [nameGen]: response.data.result
                },
            });
        }

    };
};