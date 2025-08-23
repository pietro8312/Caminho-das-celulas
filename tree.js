// Agrupar nós por geração (nível da árvore)
function groupByGeneration(nodes) {
  const levels = {};
  const nodeMap = {};

  nodes.forEach(node => {
    const id = node.dataset.id;
    const parentId = node.dataset.parentId;

    nodeMap[id] = node;

    if (!parentId) {
      levels[id] = 0; // root é nível 0
    } else {
      levels[id] = (levels[parentId] || 0) + 1;
    }
  });

  return { levels, nodeMap };
}

// Inicializar árvore
function initTree() {
  const nodes = Array.from(document.querySelectorAll('.node'));
  const { levels, nodeMap } = groupByGeneration(nodes);

  // Criar containers por nível
  const maxLevel = Math.max(...Object.values(levels));
  const tree = document.getElementById('tree');
  tree.innerHTML = ''; // limpar

  for (let level = 0; level <= maxLevel; level++) {
    const generationDiv = document.createElement('div');
    generationDiv.classList.add('generation');
    generationDiv.dataset.level = level;
    tree.appendChild(generationDiv);
  }

  // Adicionar cada nó ao seu nível
  nodes.forEach(node => {
    const level = levels[node.dataset.id];
    tree.querySelector(`.generation[data-level="${level}"]`).appendChild(node);
  });

  // Esconder todos os nós com pai
  nodes.forEach(node => {
    if (node.dataset.parentId) node.classList.add('hidden');
  });

  // Adicionar eventos de clique
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const nodeId = node.dataset.id;
      const selected = node.classList.toggle('selected');
      const parentId = node.dataset.parentId;

      if (!parentId) {
        // Se for uma raiz
        const otherRoots = nodes.filter(n =>
          !n.dataset.parentId && n !== node
        );
        if (selected) {
          // Esconder outras raízes e seus descendentes
          otherRoots.forEach(root => hideAllDescendants(root));
        } else {
          // Mostrar outras raízes
          otherRoots.forEach(root => {
            root.classList.remove('hidden');
          });
        }
      } else {
        // Se for um filho: esconder irmãos
        const siblings = nodes.filter(n =>
          n.dataset.parentId === parentId && n !== node
        );
        siblings.forEach(sibling => {
          hideAllDescendants(sibling);
        });
      }

      // Mostrar ou esconder filhos do nó atual
      const children = nodes.filter(n => n.dataset.parentId === nodeId);
      children.forEach(child => {
        if (selected) {
          child.classList.remove('hidden');
        } else {
          hideAllDescendants(child);
        }
      });
    });
  });
}

// Esconde um nó e todos os seus descendentes
function hideAllDescendants(node) {
  node.classList.add('hidden');
  node.classList.remove('selected');

  const nodeId = node.dataset.id;
  const children = Array.from(document.querySelectorAll(`.node[data-parent-id="${nodeId}"]`));
  children.forEach(child => hideAllDescendants(child));
}

// Inicializar ao carregar
initTree();


//////////////////////////////////////////////////////////////

const fundo = document.querySelector('#aplication')

