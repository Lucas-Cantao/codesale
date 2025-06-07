// Aguarda o carregamento completo do conteúdo da página antes de executar o script.
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os elementos que devem ter o efeito de animação.
    // Usamos a classe '.hidden-component' que adicionaremos no HTML.
    const hiddenElements = document.querySelectorAll('.hidden-component');

    // O IntersectionObserver é uma API moderna e eficiente para detectar
    // quando um elemento entra ou sai da área visível do navegador (viewport).
    const observer = new IntersectionObserver((entries) => {
        // 'entries' é uma lista de elementos observados.
        entries.forEach(entry => {
            // Verifica se o elemento está atualmente visível na tela.
            if (entry.isIntersecting) {
                // Se estiver visível, adiciona a classe 'visible' para ativar a animação CSS.
                entry.target.classList.add('visible');
            }
        });
    }, {
        // 'threshold' define qual porcentagem do elemento precisa estar visível
        // para acionar a função. 0.1 significa 10%.
        threshold: 0.1
    });

    // Pede ao observer para "observar" cada um dos elementos selecionados.
    hiddenElements.forEach(el => observer.observe(el));

});
