const bntHam = document.querySelector("#hamburger");
var turn = false;

const sideMenu = document.querySelector("section#side-menu");

function showSideMenu (flag){
    if(flag === false){
        sideMenu.classList.remove("some")
        sideMenu.style.transform = "translateX(-100%)";
    }else{
        sideMenu.classList.add("some")
        sideMenu.style.transform = "translateX(100%)";
    }
}

bntHam.addEventListener("mousedown", function(){
    if(turn === false){
        bntHam.style.rotate = "90deg";

        showSideMenu(turn);

        turn = !turn;
    }else{
        bntHam.style.rotate = "0deg";
        
        showSideMenu(turn);
        
        turn = !turn;
    }
});