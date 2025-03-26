async function getData()
{
   try
   {
     let response=await fetch("https://dummyjson.com/products")
     if(!response.ok)
     {
        throw new Error("HTTP Error: ",response.status)
     }
     let result=await response.json()
     localStorage.setItem("products",JSON.stringify(result.products))
     displayData(result.products)
   }
   catch(err)
   {
    console.log(err)
   }
}
async function displayData(products)
{
    let container=document.getElementById("container")
    container.innerHTML=``
    products.forEach(obj=>
    {
        let item=document.createElement("div")
        item.className="item"
        let {title,id,category,images,price,description,brand}=obj
       
        item.innerHTML=`
        <img src="${images[0]}">
        <p>Title: ${title}  Price:${price}</p>
        <p>Brand : ${(brand!=undefined) ? brand : "Not Available"}</p>
        <p>Category: ${category}</p>
        <p class="description">Description: ${description}</p>
        <button style="padding : 5px" onclick=getMoreData(${id})>See More </button>
        
           
        `
        container.appendChild(item)
    }
    )
}
function getMoreData(id)
{
    window.location.href=`./more.html?id=${id}`
}
getData()