
 export function Menu(){

let menuContainer = document.querySelector(".menuContainer");


let popular = document.createElement("div");
let itemsContainer = document.createElement("div");
let items_Child_container1 = document.createElement("div");
let items_img1 = document.createElement("img");
let items_name1 = document.createElement("span");
let items_RS1 = document.createElement("span");
let items_order1 = document.createElement("div");

let items_Child_container2 = document.createElement("div");
let items_img2 = document.createElement("img");
let items_name2 = document.createElement("span");
let items_RS2 = document.createElement("span");
let items_order2 = document.createElement("div");

let items_Child_container3 = document.createElement("div");
let items_img3 = document.createElement("img");
let items_name3 = document.createElement("span");
let items_RS3 = document.createElement("span");
let items_order3 = document.createElement("div");

let items_Child_container4 = document.createElement("div");
let items_img4 = document.createElement("img");
let items_name4 = document.createElement("span");
let items_RS4 = document.createElement("span");
let items_order4 = document.createElement("div");

let items_Child_container5 = document.createElement("div");
let items_img5 = document.createElement("img");
let items_name5 = document.createElement("span");
let items_RS5 = document.createElement("span");
let items_order5= document.createElement("div");


let popular2 = document.createElement("div");
let itemsContainer2 = document.createElement("div");
let items_Child_container6 = document.createElement("div");
let items_img6 = document.createElement("img");
let items_name6 = document.createElement("span");
let items_RS6 = document.createElement("span");
let items_order6 = document.createElement("div");

let items_Child_container7 = document.createElement("div");
let items_img7 = document.createElement("img");
let items_name7 = document.createElement("span");
let items_RS7 = document.createElement("span");
let items_order7 = document.createElement("div");

let items_Child_container8 = document.createElement("div");
let items_img8 = document.createElement("img");
let items_name8 = document.createElement("span");
let items_RS8= document.createElement("span");
let items_order8 = document.createElement("div");

let items_Child_container9 = document.createElement("div");
let items_img9 = document.createElement("img");
let items_name9 = document.createElement("span");
let items_RS9 = document.createElement("span");
let items_order9 = document.createElement("div");



popular.setAttribute("class","popular");
itemsContainer.setAttribute("class","itemsContainer");
items_Child_container1.setAttribute("class","items_Child_container");
items_img1.setAttribute("class","items_img");
items_img1.setAttribute("src","image/cheese-burger.png");
items_name1.setAttribute("class","items_name");
items_RS1.setAttribute("class","items_RS");
items_order1.setAttribute("class","items_order");

items_Child_container2.setAttribute("class","items_Child_container");
items_img2.setAttribute("class","items_img");
items_img2.setAttribute("src","image/toffes-cake.png");
items_name2.setAttribute("class","items_name");
items_RS2.setAttribute("class","items_RS");
items_order2.setAttribute("class","items_order");

items_Child_container3.setAttribute("class","items_Child_container");
items_img3.setAttribute("class","items_img");
items_img3.setAttribute("src","image/dancake.png");
items_name3.setAttribute("class","items_name");
items_RS3.setAttribute("class","items_RS");
items_order3.setAttribute("class","items_order");

items_Child_container4.setAttribute("class","items_Child_container");
items_img4.setAttribute("class","items_img");
items_img4.setAttribute("src","image/crispy-sandwitch.png");
items_name4.setAttribute("class","items_name");
items_RS4.setAttribute("class","items_RS");
items_order4.setAttribute("class","items_order");

items_Child_container5.setAttribute("class","items_Child_container");
items_img5.setAttribute("class","items_img");
items_img5.setAttribute("src","image/thai-soup.png");
items_name5.setAttribute("class","items_name");
items_RS5.setAttribute("class","items_RS");
items_order5.setAttribute("class","items_order");


popular2.setAttribute("class","popular");
itemsContainer2.setAttribute("class","itemsContainer");
items_Child_container6.setAttribute("class","items_Child_container");
items_img6.setAttribute("class","items_img");
items_img6.setAttribute("src","image/discount-item-1.png");
items_name6.setAttribute("class","items_name");
items_RS6.setAttribute("class","items_RS");
items_order6.setAttribute("class","items_order");

items_Child_container7.setAttribute("class","items_Child_container");
items_img7.setAttribute("class","items_img");
items_img7.setAttribute("src","image/discount-item-2.png");
items_name7.setAttribute("class","items_name");
items_RS7.setAttribute("class","items_RS");
items_order7.setAttribute("class","items_order");

items_Child_container8.setAttribute("class","items_Child_container");
items_img8.setAttribute("class","items_img");
items_img8.setAttribute("src","image/discount-item-3.png");
items_name8.setAttribute("class","items_name");
items_RS8.setAttribute("class","items_RS");
items_order8.setAttribute("class","items_order");

items_Child_container9.setAttribute("class","items_Child_container");
items_img9.setAttribute("class","items_img");
items_img9.setAttribute("src","image/discount-item-4.png");
items_name9.setAttribute("class","items_name");
items_RS9.setAttribute("class","items_RS");
items_order9.setAttribute("class","items_order");



popular.innerText = "Popular items";

items_name1.innerText = "Cheese Burger";
items_RS1.innerText = "$3.88";
items_order1.innerText = "Order now";

items_name2.innerText = "Toffe's Cake";
items_RS2.innerText = "$4.00";
items_order2.innerText = "Order now";

items_name3.innerText = "Dancake";
items_RS3.innerText = "$1.99";
items_order3.innerText = "Order now";

items_name4.innerText = "Crispy Sandwitch";
items_RS4.innerText = "$3.00";
items_order4.innerText = "Order now";

items_name5.innerText = "Thai Soup";
items_RS5.innerText = "$2.79";
items_order5.innerText = "Order now";


popular2.innerText = "Breakfast items";
items_name6.innerText = "Vegetables Salad";
items_RS6.innerText = "$2.50";
items_order6.innerText = "Order now";

items_name7.innerText = "Simple Green Salad";
items_RS7.innerText = "$4.00";
items_order7.innerText = "Order now";

items_name8.innerText = "Potato Curry";
items_RS8.innerText = "$6.00";
items_order8.innerText = "Order now";

items_name9.innerText = "Mix Dryfruit";
items_RS9.innerText = "$5.27";
items_order9.innerText = "Order now";



menuContainer.appendChild(popular);
menuContainer.appendChild(itemsContainer);
itemsContainer.appendChild(items_Child_container1);
items_Child_container1.appendChild(items_img1);
items_Child_container1.appendChild(items_name1);
items_Child_container1.appendChild(items_RS1);
items_Child_container1.appendChild(items_order1);


itemsContainer.appendChild(items_Child_container2);
items_Child_container2.appendChild(items_img2);
items_Child_container2.appendChild(items_name2);
items_Child_container2.appendChild(items_RS2);
items_Child_container2.appendChild(items_order2);


itemsContainer.appendChild(items_Child_container3);
items_Child_container3.appendChild(items_img3);
items_Child_container3.appendChild(items_name3);
items_Child_container3.appendChild(items_RS3);
items_Child_container3.appendChild(items_order3);

itemsContainer.appendChild(items_Child_container4);
items_Child_container4.appendChild(items_img4);
items_Child_container4.appendChild(items_name4);
items_Child_container4.appendChild(items_RS4);
items_Child_container4.appendChild(items_order4);

itemsContainer.appendChild(items_Child_container5);
items_Child_container5.appendChild(items_img5);
items_Child_container5.appendChild(items_name5);
items_Child_container5.appendChild(items_RS5);
items_Child_container5.appendChild(items_order5);


menuContainer.appendChild(popular2);
menuContainer.appendChild(itemsContainer2);
itemsContainer2.appendChild(items_Child_container6);
items_Child_container6.appendChild(items_img6);
items_Child_container6.appendChild(items_name6);
items_Child_container6.appendChild(items_RS6);
items_Child_container6.appendChild(items_order6);


itemsContainer2.appendChild(items_Child_container7);
items_Child_container7.appendChild(items_img7);
items_Child_container7.appendChild(items_name7);
items_Child_container7.appendChild(items_RS7);
items_Child_container7.appendChild(items_order7);


itemsContainer2.appendChild(items_Child_container8);
items_Child_container8.appendChild(items_img8);
items_Child_container8.appendChild(items_name8);
items_Child_container8.appendChild(items_RS8);
items_Child_container8.appendChild(items_order8);

itemsContainer2.appendChild(items_Child_container9);
items_Child_container9.appendChild(items_img9);
items_Child_container9.appendChild(items_name9);
items_Child_container9.appendChild(items_RS9);
items_Child_container9.appendChild(items_order9);


 }




