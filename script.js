// Seleciona todos os itens do menu e todas as seções de conteúdo
const tabItems = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content');

// Adiciona o evento de clique em cada item do menu
tabItems.forEach(item => {
    item.addEventListener('click', () => {
        
        // 1. Remove a classe 'active' de todos os botões do menu
        tabItems.forEach(tab => tab.classList.remove('active'));
        
        // 2. Remove a classe 'active' de todas as seções de conteúdo
        tabContents.forEach(content => content.classList.remove('active'));
        
        // 3. Adiciona a classe 'active' no botão que foi clicado
        item.classList.add('active');
        
        // 4. Pega o valor do atributo 'data-tab' do botão clicado
        const targetTab = item.getAttribute('data-tab');
        
        // 5. Encontra a seção correspondente pelo ID e adiciona a classe 'active'
        const targetContent = document.getElementById(targetTab);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});