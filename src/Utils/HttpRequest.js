import {ServerEndPoint, ServerEndPoint2} from "../Constants/server";

export const get = ({url, header}, callback) => {
    return fetch(ServerEndPoint + url)
        .then((response) => {
            if (callback) callback();
            return response.json();
        })
        .catch(err => {
            return err
        })
};

export const post = ({url, headers, body}, callback) => {
    return fetch(ServerEndPoint2 + url, {
        method: 'POST',
        headers: headers,
        body: body,
    }).then(response => {
        if (callback) callback();
        return response.json();
    })
        .catch(err => {
            return err;
        });
};