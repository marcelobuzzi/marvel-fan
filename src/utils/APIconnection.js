
const API = "https://gateway.marvel.com:443/v1/public";
const params ="?ts=1&apikey=03f40b98fbcfc98e13bf46e48a93c89e&hash=bd49779228355e83f9cc484fd64b28f6&limit=100&offset=1100";
export const getUrl = (path) => {
    return fetch(API+path+params, {
        params:{
            "limit":"100",
            "apikey":"03f40b98fbcfc98e13bf46e48a93c89e",
            "ts":"1",
            "hash":"bd49779228355e83f9cc484fd64b28f6",
            "Content-type": "application/json;charset=utf-8"
        }
        
    }).then((results) => results.json());
};
