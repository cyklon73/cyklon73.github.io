const apiKey = 'AIzaSyDp7yGuiPR8uBd-7d1Eq_3I1KDMzsfjoaE';

let getSubscribers = (channelID) => {

fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelID}&key=${apiKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data["items"][0]["statistics"]["subscriberCount"]);
    })

}

getSubscribers('UCmHvJbGLTcggDAlsyYyY_wQ');
