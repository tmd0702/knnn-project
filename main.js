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


title_image = [
    'gaming_title',
    'luxury_title',
    'office_title',
    'graphic_title',
    'light_title'
]
title = [
    'gaming',
    'luxury',
    'office',
    'graphic',
    'light'
]

laptopInfo = [
    `<div class="product">
    <img class="product-image" src="https://m.media-amazon.com/images/I/61mE1Le8ceL._AC_SX480_SY360_.jpg"/>
    <h3 class="product-title">Dell Inspiron 7610 16-inch</h3>
    <p class="product-config">CPU Intel Core i7-11800H<br/>Hard Disk Size: 512GB<br/>RAM Size: 16GB<br/>Graphics Description: RTX 3050<br/>Giá: 38.999.999đ</p>
    <button class="buy-btn">Mua ngay</button>
</div>`,
    `<div class="product">
    <img class="product-image" src="https://laptop88.vn/media/product/6330_hp_pavilion_15_eg0003tx_2d9c5pa_1.png"/
>
    <h3 class="product-title">HP Pavilion 15</h3>
    <p class="product-config">CPU Intel Core i5-1155G7<br/>Hard Disk Size: 512GB<br/>RAM Size: 8GB<br/>Graphic Description: Intel Iris Xe<br/>Giá: 18.290.000đ</p>
    <button class="buy-btn">Mua ngay</button>
    </div>`,
    `<div class="product">
    <img class="product-image" src="https://cdn.nguyenkimmall.com/images/detailed/784/10051503-laptop-lenovo-ideapad-3-15itl6-i3-1115g4-82h800m4vn.jpg"/
>
    <h3 class="product-title">Lenovo Ideapad 3 15ITL6</h3>
    <p class="product-config">CPU Intel Core i3-1154G4<br/>Hard Disk Size: 256GB<br/>RAM Size: 8GB<br/>Graphic Description: Intel UHD<br/>Giá: 12.590.000đ</p>
    <button class="buy-btn">Mua ngay</button>
    </div>`,
    `<div class="product">
    <img class="product-image" src="https://cdn-amz.fadoglobal.io/images/I/61Zsch37UmL._SR476,476_.jpg"/
>
    <h3 class="product-title">Samsung Galaxy Book Pro 360</h3>
    <p class="product-config">CPU Intel Core i7-1165G7<br/>Hard Disk Size: 512TB<br/>RAM Size: 16GB<br/>Graphic Description: Intel Iris Xe<br/>Giá: 40.199.999đ</p>
    <button class="buy-btn">Mua ngay</button>
    </div>`,
    `<div class="product">
    <img class="product-image" src="https://cdn.ankhang.vn/media/product/21109_laptop_asus_zenbook_14_ux425ea_ki843w.jpg"/
>
    <h3 class="product-title">ASUS ZenBook 14</h3>
    <p class="product-config">CPU Intel Core i7-1165G7<br/>Hard Disk Size: 512GB<br/>RAM Size: 16GB<br/>Graphic Description: VGA Intel Iris Xe<br/>Giá: 26.890.000đ</p>
    <button class="buy-btn">Mua ngay</button>
    </div>`,
    `<div class="product">
    <img class="product-image" src="https://dienmaythienhoa.vn/static/images/4.%20hinh%20sp/3.%20Hinh%20SP%202/Acer-Aspire-3-A315-57G-524Z-1.jpg"/
>
    <h3 class="product-title">Acer Aspire 3</h3>
    <p class="product-config">CPU Intel Core i3-1005G1<br/>Hard Disk Size: 256GB<br/>RAM Size: 4GB<br/>Graphic Description: Intel UHD<br/>Giá: 11.199.000đ</p>
    <button class="buy-btn">Mua ngay</button>
    </div>`,
    `<div class="product">
    <img class="product-image" src="https://cdn.tgdd.vn/Products/Images/44/263914/macbook-pro-14-m1-max-2021-10-core-cpu-xam-2.jpg"/
>
    <h3 class="product-title">MacBook Pro 14 M1 MAX</h3>
    <p class="product-config">CPU Intel Core i5-1155G7<br/>Hard Disk Size: 512GB<br/>RAM Size: 32GB<br/>Graphic Description: Card tích hợp<br/>Giá: 73.900.000đ</p>
    <button class="buy-btn">Mua ngay</button>
    </div>`
]

for (let i = 0; i<7;++i) {
    const gamingProduct = tabPaneElements[i].querySelector(".gaming .product-container")
    for (let j = 1; j <= 6; ++j) {
        gamingProduct.innerHTML += laptopInfo[i];
    }
    funcElements = tabPaneElements[i].querySelectorAll(".func")
    for (let k = 1; k < 5; ++k) {
        funcElements[k].innerHTML += `<div class="intro">
        <img src="./assets/img/${title_image[k]}.jpg" alt="">
    </div>
    <div class="product-container">
        ${gamingProduct.innerHTML}
                                </div>` 
    }

}

line.style.width = activeElement.offsetWidth + "px";
line.style.left = activeElement.offsetLeft + "px";
itemElements.forEach((item, index) => {
    item.onclick = () => {
        document.querySelector(".tab-item.active").classList.remove("active");
        funcActive = (document.querySelector(".tab-pane.active")).querySelectorAll(".func");
        for (let func of funcActive) {
            func.removeAttribute("id");
        }
        
        document.querySelector(".tab-pane.active").classList.remove("active");
        item.classList.add("active");

        newFuncActive = paneElements[index].querySelectorAll(".func")
        newFuncActive[0].setAttribute('id', 'gaming');
        newFuncActive[1].setAttribute('id', 'luxury');
        newFuncActive[2].setAttribute('id', 'office');
        newFuncActive[3].setAttribute('id', 'graphic');
        newFuncActive[4].setAttribute('id', 'light');
        footerElement = document.querySelector("#footer")
        switch(index) {
            case 0: footerElement.style.marginTop = 4500 + 'px'; break;
            case 1: footerElement.style.marginTop = 5150 + 'px'; break;
            case 2: footerElement.style.marginTop = 5000 + 'px'; break;
            case 3: footerElement.style.marginTop = 5000 + 'px'; break;
            case 4: footerElement.style.marginTop = 4470 + 'px'; break;
            case 5: footerElement.style.marginTop = 4800 + 'px'; break;
            case 6: footerElement.style.marginTop = 4150 + 'px'; break;
        }
        line.style.width = item.offsetWidth + "px";
        line.style.left = item.offsetLeft + "px";
        paneElements[index].classList.add("active");
    }
})

const buyBtns = document.querySelectorAll(".buy-btn");
const buySector = document.querySelector(".buy-sector");
const orderBtn = document.querySelector(".order-btn")

for (let buyBtn of buyBtns) {
    buyBtn.onclick = () => {
        buySector.style.display = "block"
    }
}

const number = document.querySelector(".number");
let quantity = 0;
number.innerHTML = quantity;
minusBtn = document.querySelector(".minus");
plusBtn = document.querySelector(".plus");
minusBtn.onclick = function() {
    if (quantity > 0) {
        --quantity;
        number.innerHTML = quantity;
    }
}
plusBtn.onclick = function() {
    ++quantity;
    number.innerHTML = quantity;
}
blackBtn = document.querySelector("#black");
greyBtn = document.querySelector("#grey");
orderBtn.onclick = function() {
    quantity = 0;
    blackBtn.checked = false;
    greyBtn.checked = false;
    number.innerHTML = quantity;
    buySector.style.display = "none"
}
closeBtn = document.querySelector(".close-btn");


closeBtn.onclick = () => {
    quantity = 0;
    blackBtn.checked = false;
    greyBtn.checked = false;
    number.innerHTML = quantity;
    buySector.style.display = "none"
}