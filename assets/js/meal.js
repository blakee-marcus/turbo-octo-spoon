var randomButtonEl = document.getElementById("random");
var searchMeal = function (){
  
  // random pic shows up after each web refreash
  var apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
    // search meal
    fetch(apiUrl).then(function(response) {
      if (response.ok) {
        return response.json().then(function(data) {
          displayMealInfo(data);
          save(data.meals[0].strMeal, data.meals[0].strInstructions, data.meals[0].strYoutube)
        });
        };
      }); 
    }

var displayMealInfo = function(data) {
  var mealInfo = data.meals[0];
  var test = document.querySelector("#ingredients");

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
// local storage 
// localStorage.setItem('searchMeal',JSON.stringify(user));
// var user = JSON.parse(localStorage.getItem('user'));
// window.localStorage

function save(name, instructions, youtubeLink){
  var savedHistory = [];

  if(localStorage.getItem("dataMeals")){
    savedHistory = JSON.parse(localStorage.getItem("dataMeals"))
  }

  var mealObj = {
    mealName: name,
    mealInstructions: instructions,
    mealLink: youtubeLink
  }

  // console.log(mealObj)
  savedHistory.push(mealObj);

  localStorage.setItem("dataMeals", JSON.stringify(savedHistory));
  // function to save value from local stroage
}
  
//displayMealInfo();
      getMealIngredients();
      searchMeal();

randomButtonEl.addEventListener("click", searchMeal)
