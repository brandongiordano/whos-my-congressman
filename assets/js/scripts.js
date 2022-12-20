var url = "https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyDJCpCj0C6xd_ucZHhLQ7_W6nJNGDi5Sjc&address=4081%20BRANTLEY%20CIR";

fetch(url)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
