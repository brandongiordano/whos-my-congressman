var url = "https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyDJCpCj0C6xd_ucZHhLQ7_W6nJNGDi5Sjc&address=4081%20BRANTLEY%20CIR";

fetch(url)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
<<<<<<< HEAD
        console.log(data);
    })
=======
        wikiAPI(data.officials[2].name);
    })

}


function wikiAPI( name){
    
    var apiURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+name+"&format=json&origin=*";


    fetch(apiURL)
    .then(function(response){
            if(response.ok){
                response.json().then(function(data){
                    console.log(data);
                    console.log(data.query.search[0].snippet);
                    displayInfo(data);
                })
            }
            else{
                console.log("failed")
            }
    })
}

function displayInfo(data) {
   $("#congressman-name").html(data.query.search[0].title);
   console.log("test", data);
}
getName();
>>>>>>> 9512305 (populate politicians name)
