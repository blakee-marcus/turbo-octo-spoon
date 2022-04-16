// const mealImg = document.getElementById('meal');
// const mealDetails = document.getElementById('ingredients');


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


      var displayMealInfo = function(data) {
        var meal = data.meals[0].strMealThumb;
        console.log(meal);

        // display the image of the meal
        $("#mealimg").attr("src", meal);
      }

      

  
//displayMealInfo();
      searchMeal();
      
// var apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood&a=Canadian/images/media/meals/llcbn01574260722.jpg/preview';  
