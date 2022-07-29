const apiKey = 'AIzaSyDp7yGuiPR8uBd-7d1Eq_3I1KDMzsfjoaE';

let getSubscribersGreenDuck = () => {

fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCmHvJbGLTcggDAlsyYyY_wQ&key=${apiKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        document.getElementById("GreenDuck-SubCount").innerHTML = data["items"][0]["statistics"]["subscriberCount"];
    })

}

let getSubscribersEnteSuesSauer = () => {

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC5y_c2lZBrRjlRFaAZ7AyOg&key=${apiKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.getElementById("Ente-Süß-Sauer-SubCount").innerHTML = data["items"][0]["statistics"]["subscriberCount"];
        })

}

let getSubscribersDerKeller = () => {

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCLYxK7hzePWtqe3Oc8eFAlw&key=${apiKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.getElementById("Der-Keller-SubCount").innerHTML = data["items"][0]["statistics"]["subscriberCount"];
        })

}


function getSubscribers() {
    getSubscribersGreenDuck();
    getSubscribersEnteSuesSauer();
    getSubscribersDerKeller();
}

getSubscribers();
