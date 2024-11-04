const categories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => showCatagories(data)).catch((err)=>console.log("Error"))
    
};

const showCatagories = (data) => {
  for(let it of data.categories){
    console.log(it.category);
    let button=document.createElement("button")
    button.innerHTML=`<button class="p-[25px] border-[1px] border-[black] border-solid rounded-[10px]">${it.category}</button>`
    document.getElementById("categories").appendChild(button)
  }
};
categories()