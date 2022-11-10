var randomButtonEl = document.getElementById("random");

var recentRecipesArray = [];

var searchMeal = function () {
    var deleteUlEl = document.getElementById("test");
    deleteUlEl.textContent = "";
    // random pic shows up after each web refresh
    var apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
    // search meal
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            return response.json().then(function (data) {
                mealData = data;
                displayMealInfo(data);
                recentRecipes(data);
            });
        }
    });
};

var displayMealInfo = function (data) {
    var mealInfo = data.meals[0];
    console.log(data);
    var test = document.querySelector("#test");

    // display the image of the meal
    $("#meal-image").attr("src", mealInfo.strMealThumb);
    $("#meal-image").attr("alt", mealInfo.strMeal);

    //display dish name
    $("#meal-name").text(mealInfo.strMeal);

    // display instructions
    $("#recipe").html(mealInfo.strInstructions).text();

    // youTube video link
    $("#meal-video").attr("href", mealInfo.strYoutube);

    //display Ingredient List
    for (var i = 1; i < 20; i++) {
        // If there are ingredients in JSON response
        if (mealInfo["strIngredient" + i].length > 0) {
            var ingredientEl = document.createElement("li");
            var ingredientName = mealInfo["strIngredient" + i];
            var ingredientMeasure = mealInfo["strMeasure" + i];
            ingredientEl.textContent = ingredientMeasure + " " + ingredientName;
            test.appendChild(ingredientEl);
        } else {
            break;
        }
    }
};

var saveBtn = document.getElementById("save-name");

var recentRecipes = function(data) {
    var mealInfo = data.meals[0];
    console.log(mealInfo);
    var recentRecipe = {
        mealId:  mealInfo.idMeal,
        mealSource: mealInfo.strSource,
        mealName: mealInfo.strMeal,
        mealThumbnail: mealInfo.strMealThumb
    };
    recentRecipesArray.push(recentRecipe);
    console.log(recentRecipe);
    localStorage.setItem("savedRecipes", JSON.stringify(recentRecipesArray));
};

searchMeal();
randomButtonEl.addEventListener("click", searchMeal);
saveBtn.addEventListener("click", displayMealInfo);