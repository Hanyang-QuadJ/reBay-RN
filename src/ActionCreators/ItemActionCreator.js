import {ServerEndPoint, ServerEndPoint2} from "../Constants/server";
import {AsyncStorage} from 'react-native';

//Define Type

export const START_TO_POST_ITEM = "START_TO_POST_ITEM";
export const FAILED_TO_POST_ITEM = "FAILED_TO_POST_ITEM";
export const SUCCEED_TO_POST_ITEM = "SUCCEED_TO_POST_ITEM";

const ACCESS_TOKEN = "ACCESS_TOKEN";


export const postItem = (token,
                         pic_list,
                         item_name,
                         price,
                         brand_id,
                         size,
                         season,
                         category_1,
                         category_2,
                         item_status,
                         fullbox,
                         warantee,
                         domestic,
                         refund,
                         content,
                         sub_content,
                         tags) => {
    return async (dispatch) => {
        try {
            console.log("^^^^^");
            console.log(token);
            console.log(price);
            dispatch({type: START_TO_POST_ITEM});
            let response = await fetch(
                ServerEndPoint2 + 'api/item/sell', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'x-access-token': token
                    },
                    body: JSON.stringify({
                        pic_list: pic_list,
                        item_name: item_name,
                        price: price,
                        brand_id: brand_id,
                        size: size,
                        season: season,
                        category_1: category_1,
                        category_2: category_2,
                        item_status: item_status,
                        fullbox: fullbox,
                        warantee: warantee,
                        domestic: domestic,
                        refund: refund,
                        content: content,
                        sub_content: sub_content,
                        tags: tags
                    })
                }
            );
            let responseJson = await response.json();
            console.log(responseJson);
            await dispatch({type: SUCCEED_TO_POST_ITEM, payload: responseJson});
        } catch (error) {
            dispatch({type: FAILED_TO_POST_ITEM, payload: {data: "NETWORK_ERROR"}});
            console.error(error);
        }

    }

};