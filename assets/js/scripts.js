
                                                                                                                 
var firstName;
var lastName;
var address = document.location.search.split('=');
var name;

function getName(){
    var url = "https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyDJCpCj0C6xd_ucZHhLQ7_W6nJNGDi5Sjc&address="+ address;
    fetch(url)
    .then(function (response) {
        //console.log("google", response);
        return response.json();
    })
    .then(function (data) {
        wikiAPI(data.officials[2].name);
        console.log("google", data)
        displayData(data);
    })

}

function displayData(data) {
    
    for (i=2; 1<i<5; i++){
        var name = data.officials[i].name;
        var party = data.officials[i].party;
        var photo = data.officials[i].photoUrl;
        var links = data.officials[i].urls[0];
        var contact = data.officials[i].phones[0];

        //fills in info
        $("#name"+i).html(name);
        $("#party"+i).append(party);
        $("#img"+i).html("<img src=" + photo + ">");
        $("#link"+i).append("<a href=" + links + ">");
        $("#link"+i).append(links);
        $("#contact"+i).append(contact);
    }
    var rep = data.offices[3].name;
    console.log("rep", rep);
    var sen = data.offices[2].name;
    $("#office-rep").append(rep);
    $("#office-sen").append(sen);
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