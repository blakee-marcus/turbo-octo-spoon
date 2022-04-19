
var searchMeal = function (){
  
  // random pic shows up after each web refreash
  var apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
    // search meal
    fetch(apiUrl).then(function(response) {
      if (response.ok) {
        return response.json().then(function(data) {
          displayMealInfo(data);
        });
        };
      }); 
    }

var displayMealInfo = function(data) {
  var mealInfo = data.meals[0];
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
  for (var i = 1; i < 21; i++) {
    var ingredientEl = document.createElement("li");
    var ingredientName = mealInfo['strIngredient' + i];
    var ingredientMeasure = mealInfo['strMeasure' + i];
    ingredientEl.textContent = ingredientMeasure + " " + ingredientName;
    test.appendChild(ingredientEl);
  }
}


     
searchMeal();