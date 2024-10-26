
export function Home(){
let home = document.querySelector("#home")

let Container = document.querySelector(".Container");

let box = document.createElement("div");
let h2 = document.createElement("h2");
let h3 = document.createElement("h3");
let deliverbox = document.createElement("div");
let deliverboxChild = document.createElement("div");
let span1  = document.createElement("span");
let img1 = document.createElement("img");
let span2  = document.createElement("span");
let img2 = document.createElement("img");
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let line = document.createElement("div");
let deliverboxChild2 = document.createElement("deliverboxChild2");
let deliver = document.createElement("div");
let img3 = document.createElement("img");
let input = document.createElement("input");
let findFood = document.createElement("div");
let boximg = document.createElement("div");
let mainimg= document.createElement("img");



box.setAttribute("class","box");
deliverbox.setAttribute("class","deliverbox");
deliverboxChild.setAttribute("class","deliverboxChild");
img1.setAttribute("src","image/pngwing.com (10).png");
img1.setAttribute("height","40");
img2.setAttribute("src","image/pngwing.com (11).png");
img2.setAttribute("height","40");
line.setAttribute("class","line")
deliverboxChild2.setAttribute("class","deliverboxChild2");
deliver.setAttribute("class","deliver");
img3.setAttribute("src","image/pngwing.com (9).png");
img3.setAttribute("id","Locimg")
img3.setAttribute("height","40")
input.setAttribute("id","text");
input.setAttribute("placeholder","Enter Your Address");
findFood.setAttribute("id","findFood");
mainimg.setAttribute("id","mainimg");
mainimg.setAttribute("src","image/hero-header.png");



h2.innerText = "Are you starving?";
h3.innerText = "Within a few clicks, find meals that are accessible near you";
p1.innerText = "Delivery";
p2.innerText = "Pickup";
findFood.innerText = "Find food";



Container.prepend(box);
box.appendChild(h2);
box.appendChild(h3);
box.appendChild(deliverbox);
deliverbox.appendChild(deliverboxChild);
deliverboxChild.appendChild(span1);
span1.appendChild(img1);
span1.appendChild(p1);
deliverboxChild.appendChild(span2);
span2.appendChild(img2);
span2.appendChild(p2);
deliverbox.appendChild(line);
deliverbox.appendChild(deliverboxChild2);
deliverboxChild2.appendChild(deliver);
deliver.appendChild(img3);
deliver.appendChild(input);
deliverboxChild2.appendChild(findFood);
Container.appendChild(boximg);
boximg.appendChild(mainimg);
  

}