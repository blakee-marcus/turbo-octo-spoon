var mealData

var randomButtonEl = document.getElementById("random");
var searchMeal = function (){
  var deleteUlEl = document.getElementById("test");
  deleteUlEl.textContent = ""
  // random pic shows up after each web refreash
  var apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
    // search meal
    fetch(apiUrl).then(function(response) {
      if (response.ok) {
        return response.json().then(function(data) {
          mealData = data
          displayMealInfo(data);
          save(data.meals[0].strMeal, data.meals[0].strInstructions, data.meals[0].strYoutube)
    // local storage
  
        });
        };
      }); 
    }

var displayMealInfo = function(data) {
  var mealInfo = data.meals[0];
  console.log(data);
  var test = document.querySelector("#test");

  // display the image of the meal
  $("#meal-image").attr("src", mealInfo.strMealThumb);
  $("#meal-image").attr("alt", mealInfo.strMeal);

  //display dish name
  $("#meal-name").text(mealInfo.strMeal);
  // save btn
  // var saveBtn = data.strMeal;
  // saveBtn.addEventListener('click', strMeal)
  // console.log(saveBtn);

  // display instructions
  $("#recipe").html(mealInfo.strInstructions).text();

  // youTube video link
  $("#meal-video").attr("href", mealInfo.strYoutube);

  //display Ingredient List
  for (var i = 1; i < 20; i++) {
    // console.log(mealInfo['strIngredient' +i]);
     if(mealInfo['strIngredient' +i].length > 0) {
      var ingredientEl = document.createElement("li");
      var ingredientName = mealInfo['strIngredient' + i];
      var ingredientMeasure = mealInfo['strMeasure' + i];
      ingredientEl.textContent = ingredientMeasure + " " + ingredientName;
      test.appendChild(ingredientEl);
    }
    else {
      break
    }
  }
}

var saveBtn = document.getElementById("save-name");
var localContainer = document.getElementById("saved-combination");
var localSave = document.getElementById("onclick-save");
saveBtn.onclick = function () {
  
  // searchMeal();
  // var mealInfo = data.meals[0];
  //$("save-name").text(fetch(apiUrl))
  //console.log(localStorage.getItem(mealData.meals[0].strMeal));
  console.log(localStorage.getItem(mealData.meals[0].strMeal));

  localStorage.setItem(mealData.meals[0].strMeal, mealData.meals[0].strMeal);
  $("#saved-combination").html(mealData.meals[0].strMeal);
  localStorage.getItem(mealData.meals[0].strMeal);
  $("#saved-combination").append("<ul>", mealData.meals[0].strMeal, "</ul>");
  // localSave.append(mealData.meals[0].strMeal);
  // var localSavedItems = document.createElement("li");
  // $("#onclick-save").html(mealData.meals[0].strMeal).text();
  // $("li").append(mealData.meals[0].strMeal);


}
//   for (var i=1; i < 53; i++) {
//     if (saveBtn['strMeal'].length > 0 ) {
//       $("#meal-name").text(mealInfo.strMeal);
//       var setLocal = localStorage.setItem.text(saveBtn + localContainer)
  
//     }   
//     return
//   }
// }

// local storage 
// localStorage.setItem('searchMeal',JSON.stringify(user));
// var user = JSON.parse(localStorage.getItem('user'));
// window.localStorage

// function save(name, instructions, youtubeLink){
  // var savedHistory = [];

  //if(localStorage.getItem("dataMeals")){
   // savedHistory = JSON.parse(localStorage.getItem("dataMeals"))
 // }

 // var mealObj = {
  //   mealName: name,
  //   mealInstructions: instructions,
  //   mealLink: youtubeLink
  // }

  // console.log(mealObj)
 // savedHistory.push(mealObj);

 // localStorage.setItem("dataMeals", JSON.stringify(savedHistory));
  // function to save value from local stroage
// }
// suggetion to create a history.js and have local storage and saved data show there 
//function show(){
  //this is an array!!!!
 // var dataToShow = JSON.parse(localStorage.getItem("dataMeals"));
  // alert("saved value is =" + dataToShow);
  // console.log(data)

  // var myObj ={"#meal-name":" ","#recipe":" ","meal-video":" "};
  // var myJson = JSON.stringify(myObj);

  // window.location ="demo_json.php?x=" + myJson;

  // text = localStorage.getItem("testJSON", myJson);
  // obj = JSON.parse(text);
  // document.getElementById("demo").innerHTML = obj.name;
  
// }



     
searchMeal();
randomButtonEl.addEventListener("click", searchMeal);
saveBtn.addEventListener("click", displayMealInfo);