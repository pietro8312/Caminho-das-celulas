let largura = window.innerWidth;

window.addEventListener('resize', () => {
    resize();
});

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

const headerNavDesk = document.querySelector('#header-nav')
let links = document.querySelectorAll('#header-nav a').length

function resize(){
    if(window.screen.width > 800){
        headerNavDesk.style.gridTemplateColumns = `repeat(${links},13dvw)`;
    }else{
        headerNavDesk.style.gridTemplateColumns = `repeat(${1},12dvw)`;
    }
}
resize()

let click = false

const feedBack = document.querySelector('#feedback')
const msg = document.querySelector('#msgFeedback')

feedBack.addEventListener('click', () => {
    if(click === false){
        msg.classList.add('move');
        click = !click
    }else{
        msg.classList.remove('move');
        click = !click
    }
})

const btnReturn = document.querySelector('#return')
btnReturn.addEventListener('click', () => {
    msg.classList.remove('move');  
    click = !click
})
// terminar isso aqui pqpqpqppqpqpq