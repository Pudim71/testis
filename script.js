// Função para lidar com a navegação
function navegarParaTestes() {
    const path = window.location.pathname;
    
    if (path === '/testes') {
        document.getElementById('mensagem').textContent = 'Olá!';
    } else if (path === '/') {
        // Simula navegação para /testes
        history.pushState({}, '', '/testes');
        document.getElementById('mensagem').textContent = 'Olá!';
    } else {
        // Para qualquer outro caminho, redireciona para o menu principal
        alert('Página não existe! Redirecionando para o menu principal...');
        history.pushState({}, '', '/');
        document.getElementById('mensagem').textContent = '';
    }
}

// Listener para mudanças no histórico (quando usuário usa botões do navegador)
window.addEventListener('popstate', function() {
    navegarParaTestes();
});

// Verifica a rota inicial quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    navegarParaTestes();
});