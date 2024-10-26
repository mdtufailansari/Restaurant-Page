 export function  Team(){

let team_container = document.querySelector(".team_container");
let Specialtie = document.createElement("div");
let our_team   = document.createElement("div");
let img_box   = document.createElement("div");
let team_box1  = document.createElement("div");
let team_box2  = document.createElement("div");
let team_box3  = document.createElement("div");
let img1    = document.createElement("img");
let img2   = document.createElement("img");
let img3  =  document.createElement("img");
let team_name_box1 = document.createElement("div");
let team_name1 = document.createElement("strong");
let team_specialties1 = document.createElement("p");


let team_name_box2 = document.createElement("div");
let team_name2 = document.createElement("strong");
let team_specialties2 = document.createElement("p");


let team_name_box3 = document.createElement("div");
let team_name3 = document.createElement("strong");
let team_specialties3 = document.createElement("p");



Specialtie.setAttribute("class","Specialtie");
our_team.setAttribute("class","our_team");
img_box.setAttribute("class","img_box");
team_box1.setAttribute("class","team_box");
team_box2.setAttribute("class","team_box");
team_box3.setAttribute("class","team_box");
img1.setAttribute("class","image");
img1.setAttribute("src","image/chef-1.jpg");
img2.setAttribute("class","image");
img2.setAttribute("src","image/chef-2.jpg");
img3.setAttribute("class","image");
img3.setAttribute("src","image/chef-3.jpg");
team_name_box1.setAttribute("class","team_name_box");
team_name1.setAttribute("class","team_name");
team_specialties1.setAttribute("class","team_specialties");


team_name_box2.setAttribute("class","team_name_box");
team_name2.setAttribute("class","team_name");
team_specialties2.setAttribute("class","team_specialties");


team_name_box3.setAttribute("class","team_name_box");
team_name3.setAttribute("class","team_name");
team_specialties3.setAttribute("class","team_specialties");


Specialtie.innerText = "Specialties";
our_team.innerText =   "Our Team";
team_name1.innerText = "Aaron Patel";
team_specialties1.innerText = "CEO";
team_name2.innerText = "Denial Tebas";
team_specialties2.innerText = "CHEF";
team_name3.innerText = "Jon Snow";
team_specialties3.innerText = "CHEF";


team_container.appendChild(Specialtie);
team_container.appendChild(our_team);
team_container.appendChild(img_box);
img_box.appendChild(team_box1);
team_box1.appendChild(img1);
team_box1.appendChild(team_name_box1);
team_name_box1.appendChild(team_name1);
team_name_box1.appendChild(team_specialties1);

img_box.appendChild(team_box2);
team_box2.appendChild(img2);
team_box2.appendChild(team_name_box2);
team_name_box2.appendChild(team_name2);
team_name_box2.appendChild(team_specialties2);

img_box.appendChild(team_box3);
team_box3.appendChild(img3);
team_box3.appendChild(team_name_box3);
team_name_box3.appendChild(team_name3);
team_name_box3.appendChild(team_specialties3);



}




