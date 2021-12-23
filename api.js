function connect (){
fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
.then(res=> res.json())
.then(data=>showMeals(data.meals));


}

connect();

function showMeals (arrayData){
    console.log(arrayData)
    
    for (var a = 0; a< arrayData.length; a++){

        console.log("food item -", arrayData[a].strMeal );
    }

}