const itemElements = document.querySelectorAll(".tab-item");
const paneElements = document.querySelectorAll(".tab-pane");
const activeElement = document.querySelector(".active");
const line = document.querySelector(".line");
const luxuryElement = document.querySelector("#luxury")
const gamingElement = document.querySelector("#gaming")
const graphicElement = document.querySelector("#graphic")
const officeElement = document.querySelector("#office")
const lightElement = document.querySelector("#light")
const tabPaneElements = document.querySelectorAll(".tab-pane")
const gamingProduct = document.querySelector("#gaming .product-container")

for (let i = 1; i <= 6; ++i) {
    gamingProduct.innerHTML += `<div class="product">
    <img class="product-image" src="https://m.media-amazon.com/images/I/61mE1Le8ceL._AC_SX480_SY360_.jpg"/>
    <h3 class="product-title">Dell Inspiron 7610 16-inch</h3>
    <p class="product-config">CPU Intel Core i7-11800H<br/>Hard Disk Size: 512GB<br/>RAM Size: 16GB<br/>Graphics Description: RTX 3050<br/>Giá: 38.999.999đ</p>
</div>`
}
title_image = [
    'gaming_title',
    'luxury_title',
    'office_title',
    'graphic_title',
    'light_title'
]

funcElements = document.querySelectorAll(".func")
for (let i = 1; i < 5; ++i) {
    funcElements[i].innerHTML += `<div class="intro">
    <img src="./assets/img/${title_image[i]}.jpg" alt="">
</div>
<div class="product-container">
    ${gamingProduct.innerHTML}
                            </div>` 
}

line.style.width = activeElement.offsetWidth + "px";
line.style.left = activeElement.offsetLeft + "px";
itemElements.forEach((item, index) => {
    item.onclick = () => {
        document.querySelector(".tab-item.active").classList.remove("active");
        document.querySelector(".tab-pane.active").classList.remove("active");
        item.classList.add("active");
        line.style.width = item.offsetWidth + "px";
        line.style.left = item.offsetLeft + "px";
        paneElements[index].classList.add("active");
    }
})
