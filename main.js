const bntHam = document.querySelector("#hamburger");
var turn = false;

bntHam.addEventListener("mousedown", function(){
    if(turn === false){
        bntHam.style.rotate = "90deg";

        //showSideMenu(turn);       adicionar quando fazer a function

        turn = !turn;
    }else{
        bntHam.style.rotate = "0deg";
        
        //showSideMenu(turn);       adicionar quando fazer a function
        
        turn = !turn;
    }
});