
                                                                                                                 
var firstName;
var lastName;
var address = "3415 saddle blvd";
var name;

function getName(){
    var url = "https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyDJCpCj0C6xd_ucZHhLQ7_W6nJNGDi5Sjc&address="+ address;
    fetch(url)
    .then(function (response) {
        //console.log("google", response);
        return response.json();
    })
    .then(function (data) {
        console.log("google", data);
        wikiAPI(data.officials[2].name);
        getInfo(data);

        
    })
}

function getInfo(data) {
    for (i=2; 1<i<5; i++){
    var party = data.officials[i].party;
    var name = data.officials[i].name;
    $("#congressman-name"+i).html(name);
    $("#party"+i).append(party);
    }
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