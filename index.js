import {Home}from "./home.js";
import {Menu} from "./menu.js";
import {Team} from "./team.js";
import {humburger} from "./humburger_btn.js";

Home();

let menu = document.querySelector("#menu");
let team = document.querySelector("#team");
let home = document.querySelector("#home");
let Container = document.querySelector(".Container");
let menuContainer = document.querySelector(".menuContainer");
let team_container = document.querySelector(".team_container");

home.addEventListener("click",()=>{
    Container.innerHTML = "";
    Home();
    menuContainer.innerHTML ="";
    team_container.innerHTML = "";
});

menu.addEventListener("click",()=>{
    menuContainer.innerHTML = "";
    Menu();
    Container.innerHTML ="";
    team_container.innerHTML = "";
});

team.addEventListener("click",()=>{
    team_container.innerHTML = "";
    Team();
    menuContainer.innerHTML = "";
    Container.innerHTML = "";

});


humburger();







