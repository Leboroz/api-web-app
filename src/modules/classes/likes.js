export default class Likes {
    static URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2OyBtarg4S0qFroNfHhn/likes'
    static async setLikeId() {
       const res = await fetch(this.URL,{
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer',
        })
        res.json().then(console.log)
    }

}