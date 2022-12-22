var searchFormEl = document.querySelector("#search-form");

function submitForm(event) {
    event.preventDefault();
    var address = document.querySelector("#search-input").value;
    //prevent empty search
    if (!address) {
        console.error('You need a search input value!');
        return;
      }

    var queryString = './result.html?q=' + address;

    location.assign(queryString);
}

searchFormEl.addEventListener('submit', submitForm);