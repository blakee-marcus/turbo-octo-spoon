var recentRecipesArray = JSON.parse(localStorage.getItem("savedRecipes"));

var displayRecentRecipes = function() {
    for (i = 0; i < recentRecipesArray.length; i++) {
        $('<a>', {
            href: recentRecipesArray[i].mealSource,
            class: 'card',
            style: 'background-image: url(' + recentRecipesArray[i].mealThumbnail + ')',
            id: 'card' + [i],
            target: "_blank",
            rel: "noopener noreferrer"
        }).appendTo('.card-container');
        $('<div>', {
            id: 'div' + [i]
        }).appendTo('#card' + [i]);
        $('<h3>', {
            text: recentRecipesArray[i].mealName
        }).appendTo('#div' + [i]);
    }
}

displayRecentRecipes();
