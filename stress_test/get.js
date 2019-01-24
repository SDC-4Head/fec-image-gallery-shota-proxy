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

    let res = http.get(`http://localhost:3000/rooms/${Math.floor((Math.random() * 1000000))}/photos`);
    check(res, {
        'status is 200': r => r.status === 200,
    })
};