var getRandomAnime = function() {
    var apiUrl = "https://api.aniapi.com/v1/random/anime";

    fetch(apiUrl)
    .then(function() {
        if (response.ok) {
            response.json().then(function() {
                displayText();
            });
        } else {
            return;
        }
    })
    .catch(function(error) {
        alert("Unable to connect to AniapiServer")
    }) 
}