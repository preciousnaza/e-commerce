let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = function(){
    if(navbar.id == "nav-display"){
        navbar.id = "";
        menu.setAttribute("name","menu-outline")
    }else{
        navbar.id ="nav-display";
        menu.setAttribute("name","close-outline");
}
}
