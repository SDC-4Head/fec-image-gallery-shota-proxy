import http from "k6/http";
import {
    check,
    sleep
} from "k6";


export let options = {
    vus: 100,
    duration: "300s"
};

export default function () {

    // let res = http.post(`http://localhost:1337/rooms/${Math.floor((Math.random() * 1000000))}/photos`);
    let formdata = {
        photo_id: Math.floor((Math.random() * 1000000)) * -1,
        url: "test",
        caption: "test"
    };
    let res = http.post(`http://localhost:1337/rooms/${Math.floor((Math.random() * 1000000))}/photos`, formdata);
    check(res, {
        'status is 200': r => r.status === 200,
    })
};