
function goldRing()
{
    let ring = [
        {name : "hello",img : "..",price :  "₹49,900"},
        {name : "hello1",img : "..",price : "₹59,900"},
        {name : "hello2",img : "..",price : "₹69,900"}
    ]
    const element = document.getElementById('product-card-id');
    const existingProduct = document.getElementById("product");
    for(var i = 0; i < ring.length; i++){
        const newProduct = existingProduct.cloneNode(true);
        newProduct.querySelector(".product-name").textContent = ring[i].name;
        newProduct.querySelector(".product-price").textContent = ring[i].price;
        newProduct.querySelector(".product-image").src = `Assets/Image/Img_${i+2}.jpg`;
        newProduct.querySelector(".product-image").alt = ring[i].name;
        element.appendChild(newProduct);
    }
}

window.onload = goldRing();