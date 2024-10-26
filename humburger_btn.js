import {Home}from "./home.js";
import {Menu} from "./menu.js";
import {Team} from "./team.js";

let clear_humburger = true;
let active = document.querySelector(".active");
let Container = document.querySelector(".Container");
let menuContainer = document.querySelector(".menuContainer");
let team_container = document.querySelector(".team_container");
let humburger_container = document.querySelector(".humburger_container");
   

     export function humburger(){

        $(document).ready(function(){
            $(".menu_toggle").click(function(){
                $(".menu_toggle").toggleClass('active');

                if(clear_humburger==true){
                
               clear_humburger = false;

                let section = document.querySelector("section");
                let div1 = document.createElement("div");
                let ul  = document.createElement("ul");
                let li1 = document.createElement("li");
                let li2 = document.createElement("li");
                let li3 = document.createElement("li");
                 
                div1.setAttribute("class","humburger_menu");
                ul.setAttribute("id","humUL");
              
                li1.innerText = "HOME";
                li2.innerText = "MENU";
                li3.innerText = "TEAM";
                  
                humburger_container.prepend(div1);
                div1.appendChild(ul);
                ul.appendChild(li1);
                ul.appendChild(li2);
                ul.appendChild(li3);

                li1.addEventListener("click",()=>{
                        Container.innerHTML = "";
                        Home();
                        menuContainer.innerHTML ="";
                        team_container.innerHTML = "";
                    });
                    
                    li2.addEventListener("click",()=>{
                    menuContainer.innerHTML = "";
                    Menu();
                    Container.innerHTML ="";
                    team_container.innerHTML = "";
                    }); 
                    
                    li3.addEventListener("click",()=>{
                    team_container.innerHTML = "";
                    Team();
                    menuContainer.innerHTML = "";
                    Container.innerHTML = "";
                    });

                }else{
                    humburger_container.innerHTML = "";
                    clear_humburger = true;
                }
        });

        });

}

