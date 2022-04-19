
var searchMeal = function (){
  
  // random pic shows up after each web refreash
  var apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
    // search meal
    fetch(apiUrl).then(function(response) {
      if (response.ok) {
        return response.json().then(function(data) {
          displayMealInfo(data);
          console.log(data);
        });
        };
      }); 
    }

    // search meal info
  var getMealIngredients = function() {

    var apiUrlIng = 'https://www.themealdb.com/api/json/v1/1/lookup.php';
    fetch(apiUrlIng).then(function(response) {
      if (response.ok) {
        return response.json().then(function(data) {
          displayMealInfo(data);
          console.log("apiUrlIng")
        });
      };
    });
  }

      // diplaying meal picture
      var displayMealInfo = function(data) {
        var meal = data.meals[0].strMealThumb;
        var mealIngr = data.meals[0].strInstructions;
        var mealVideo = data.meals[0].strYoutube;
        var mealName = data.meals[0].strMeal;
        console.log(mealIngr);

        // display the image of the meal
        $("#mealimg").attr("src", meal);

        // display ingredients
        $("#ingredients").text(mealIngr);

        // youTube video link
        $("#meal-video").attr("href", mealVideo);

        // display the meal name
        $("#dish-name").text(mealName);
      }

  
//displayMealInfo();
      getMealIngredients();
      searchMeal();