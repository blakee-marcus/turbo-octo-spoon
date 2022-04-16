var searchMeal = function (){
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood&a=Canadian/images/media/meals/llcbn01574260722.jpg/preview')
        .then(response => response.json())
        .then(data => {
            console.log(data)
          displayInfo(data);
        };
    };
});
};
      searchMeal();