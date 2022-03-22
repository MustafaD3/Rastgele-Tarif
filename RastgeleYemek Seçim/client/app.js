
//selector start
const foodName = document.getElementById("foodname")
const urlImage = document.getElementById("img")
const recipeFood = document.getElementById("recipe")
const recipeItemList = document.getElementById("list")
//selector end
const recipeButon = document.getElementById("Degistir")
let datajs;
let count = 0
recipeButon.addEventListener("click",function(){
    if(count > 0){
        console.log("Normal data")
        random(datajs)
    }
    else{
        console.log("fetch")
        recipeFETCH()
    }
})
const url = "http://localhost:3000/"



async function recipeFETCH() { 
    const data = await fetch(url)
    const jsonData = await data.json()
    random(jsonData)
    datajs = jsonData
    count++
}

function random(data){
    const randomIndex = Math.floor(Math.random()*data.length)
    recipeWriteUI(data[randomIndex])
}

function recipeWriteUI(food){
    foodName.innerHTML = food.foodName
    urlImage.setAttribute("src",food.imgURL)
    recipeFood.innerHTML = food.recipe
    const items = food.recipeITEM.split("-")
    recipeItemWriteUI(items)
}

function recipeItemWriteUI(items){
    recipeItemList.innerHTML = "Malzemeler"
    for(const x of items){
        const li = document.createElement("li")
        li.innerHTML = x
        recipeItemList.append(li)
        
    }
}