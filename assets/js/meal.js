// const mealImg = document.getElementById('meal');
// const mealDetails = document.getElementById('ingredients');


var searchMeal = function (){
  var apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood&a=Canadian/images/media/meals/llcbn01574260722.jpg/preview';
    // search meal
    fetch(apiUrl).then(function(response) {
      if (response.ok) {
        return response.json().then(function(data) {
          displayInfo(data);
        });
        };
      }); 
    }


      var displayMealInfo = function(data) {
        var meal = data.meals[0].strMeal;

        // display the image of the meal
        $("#mealimg").attr("src", meal.meals);
      }

      

    
      // displayMealInfo();
      searchMeal();