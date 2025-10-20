import { arvore } from "./tree.js";

function addLevel(no, nivel = 0) {
  no.nivel = nivel; // adiciona a propriedade 'nivel' no nó atual
  no.filhos.forEach(filho => addLevel(filho, nivel + 1));
}
addLevel(arvore)

const section = document.querySelector('div#tree')

//create divs for the separation of the nodes
function createLevels(qntDivs){
    for(let i = 1; i <= qntDivs; i++){
        const div = document.createElement('div')
        section.appendChild(div)
    }
}

function createNode(tree){
    const array = [{node: arvore, nivel: 0, parentId: null}]

    let id = 0;

    while(array.length > 0){
        const AttArray = array.shift()
        const { node, nivel = 0, parentId } = AttArray

        const divs = document.querySelectorAll('div#tree div');
        const visualElement = document.createElement('button');

        const myId = String(id++)

        visualElement.classList.add('node');
        visualElement.textContent = node.nome;

        visualElement.dataset.id = myId;
        visualElement.dataset.clicked = 0;

        if(parentId !== null && parentId !== undefined){
            visualElement.dataset.parentId = parentId - 1;
        }

            // click visualElements
        visualElement.addEventListener('click', () => {
            if(Number(visualElement.dataset.clicked) === 0){
                if(tree.filhos.length > 0){
                    const filhosDireto = Array.from(divs[nivel+1].querySelectorAll('button')).filter(filho => filho.dataset.parentId === visualElement.dataset.id)
                    
                    filhosDireto.forEach(filho => {filho.classList.remove('hidden')})
                    if(filhosDireto.length === 0){
                        last()
                        hideAll()
                    }
                }

                if(visualElement.dataset.id > 0){
                    const qntIrmaos = Array.from(visualElement.parentElement.children);

                    qntIrmaos.forEach(el => {
                        //check if o 'irmao' is the element clicked
                        if(el.dataset.id !== visualElement.dataset.id && !el.classList.contains('hidden')){
                            el.classList.add('hidden')
                        }
                    })
                }

                visualElement.dataset.clicked = 1;
            }
        });

        divs[nivel].appendChild(visualElement);
        
        node.filhos.forEach(filho => {array.push({node: filho, nivel: nivel + 1, parentId: id})});
    }

    hideAll();
}

createLevels(9);
createNode(arvore);

function hideAll(){
    const visualElements = document.querySelectorAll('div#tree button');
    visualElements.forEach(Element => {Element.classList.add('hidden'), Element.dataset.clicked = 0 });

    const root = document.querySelector(`div#tree div button[data-id='0']`);
    if(root !== null && root !== undefined) root.classList.remove('hidden');
}


const btnReset = document.querySelector('button#btn-tree');
btnReset.addEventListener('click', () => {
    hideAll();
})