import { ServerEndPoint } from "../constants/server";

export const get = ({url, header}, callback) => {
    return fetch(ServerEndPoint+url)
        .then((response) => {
            if(callback) callback();
            return response.json();
        })
        .catch(err => {
            return err
        })
};