import { CREATE_PLAYER } from "../actions/player";

export const createPlayerMiddlware = store => next => action => {

    if (action.type !== CREATE_PLAYER) {
        return next(action)
    }

    fetch("http://192.168.1.146:8080/player", {
        method: "POST",
        body: JSON.stringify({
            name: "test"
        })
    }).then(data => {
        return data.json()
    }).then(data => {
        console.log(data)
    })

    return next(action)
}