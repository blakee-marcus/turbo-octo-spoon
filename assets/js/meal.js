var searchMeal = function () { 
    var apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood&a=Canadian&i=list&a=list&c=list/images/media/meals/llcbn01574260722.jpg/preview"
    fetch(apiUrl).then(function(response) {
        if (response.ok)then(response => response.json())
        .then(data => {
            console.log(data)
          displayInfo(data);
     });
    });

    };


  var displayInfo = function(data) {
      var meal =data.data[0];

      $("#Dishname").text(dishName);
      
      $("#Ingredients").text(ingredients);

      $("#origin").text(origin);







  }
      searchMeal();