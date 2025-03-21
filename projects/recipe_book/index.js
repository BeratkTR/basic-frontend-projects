const fetchData = async() => {
    const result = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await result.json();
    return data;
}

const displayMeal = async() => {
    const data = await fetchData();
    console.log(data)

    const main = document.getElementsByTagName("main")[0];

    const container = document.createElement("div");
    container.classList.add("recipe");
    main.appendChild(container);

    const img = document.createElement("img");
    img.src = data.meals[0].strMealThumb;
    img.alt = "image photo";
    container.appendChild(img);

    const h2 = document.createElement("h2");
    h2.innerHTML = data.meals[0].strMeal;
    container.appendChild(h2);

    const p = document.createElement("p");
    p.innerHTML = `<span>Instructions:</span> ` + getIngredients(data);

    container.appendChild(p);
    
    const a = document.createElement("a");
    a.href = "#"
    a.innerHTML = "VIEW RECIPE";
    container.appendChild(a);
}

const getIngredients = (data) => {
    let text = "";
    let i=1;
    while(data.meals[0]["strIngredient"+i]){
        text += data.meals[0]["strMeasure"+i]  + " " + data.meals[0]["strIngredient"+i] + ", ";
        i++;
    }
    return text;
}


for (let i = 0; i < 10; i++) {
    displayMeal();
}