

var getRandomAnime = function() {
    var apiUrl = "https://api.aniapi.com/v1/random/anime";

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            return response.json().then(function(data) {
                console.log(data);
                displayInfo(data);
            });
        };
    });

};

var displayInfo = function(data) {
    var anime = data.data[0];

    // if there is no english title to display then display romanji of title
    if (anime.titles.en === null) {
        $("#title").text(anime.titles.rj);
    } else {
        $("#title").text(anime.titles.en);
    }

    //Display No Genre Listed if there are none provided otherwise,
    if (anime.genres.length === 0) {
        $("#genre1").text("No Genre Listed");
    } else {
        // Display top 3 Genre of Anime
        $("#genre1").text(anime.genres[0] + " ");
        $("#genre2").text(anime.genres[1] + " ");
        $("#genre3").text(anime.genres[2]);
    }
    
    //Splits Start Date data at date because api includes time in string
    var baseStartDate = anime.start_date;
    var splitStartDate = baseStartDate.split('T');
    startDate = splitStartDate[0];

    //display start date
    $("#start-date").text(startDate);
    
    //Display Run Length if it is a movie otherwise display episode count
    if (anime.episodes_count === 1) {
        $("#length-type").text("Run Length:");
        $("#episode-count").text(anime.episode_duration + " minutes");
    } else {
        $("#episode-count").text(anime.episodes_count);
    }
    

    //Display Score
    $("#score").text(anime.score);

    //Display English Description if it exist
    if (anime.descriptions.en === null || anime.descriptions.en === undefined) {
        $("#anime-description").text("No English Description Given")
    } else {
        $("#anime-description").html(anime.descriptions.en).text();
    }
    

    //Display Cover Image of Anime
    $("#anime-cover").attr("src", anime.cover_image);

    // Change background color based on API's chosen color
    $("#anime").css("background-color", anime.cover_color);

    //if there is a trailer display a watch trailer button otherwise hide trailer container
    if (anime.trailer_url === null || anime.trailer_url === undefined) {
        $("#trailer-container").addClass("hide");
    } else {
        $("#trailer").attr("href", anime.trailer_url);
    }
};


getRandomAnime();