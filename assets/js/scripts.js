
                                                                                                                 
var firstName;
var lastName;
var address = "3415 saddle blvd";
var name;

function getName(){
    var url = "https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyDJCpCj0C6xd_ucZHhLQ7_W6nJNGDi5Sjc&address="+ address;
    fetch(url)
    .then(function (response) {
        //console.log(response);
        return response.json();
    })
    .then(function (data) {
        //console.log(data.officials[2], data.officials[3]);
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
                })
            }
            else{
                console.log("failed")
            }
    })
}
getName();