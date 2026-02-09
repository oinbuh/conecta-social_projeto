// === DADOS DOS ESPORTES ===
const esportes = [
    { nome: 'Badminton', url: '/badminton', emoji: '🏸', categoria: 'quadra' },
    { nome: 'Basquete', url: '/basquete', emoji: '🏀', categoria: 'quadra' },
    { nome: 'Futsal', url: '/futsal', emoji: '⚽', categoria: 'quadra' },
    { nome: 'Handebol', url: '/handebol', emoji: '🤾', categoria: 'quadra' },
    { nome: 'Tênis', url: '/tenis', emoji: '🎾', categoria: 'quadra' },
    { nome: 'Vôlei', url: '/volei', emoji: '🏐', categoria: 'quadra' },
    { nome: 'Futevôlei', url: '/futevolei', emoji: '⚽🏐', categoria: 'areia' },
    { nome: 'Vôlei de Areia', url: '/volei_de_areia', emoji: '🏐🌴', categoria: 'areia' },
    { nome: 'Beisebol', url: '/beisebol', emoji: '⚾', categoria: 'campo' },
    { nome: 'Cricket', url: '/cricket', emoji: '🏏', categoria: 'campo' },
    { nome: 'Futebol', url: '/futebol', emoji: '⚽', categoria: 'campo' },
    { nome: 'Futebol Americano', url: '/futebol_americano', emoji: '🏈', categoria: 'campo' },
    { nome: 'Rugby', url: '/rugby', emoji: '🏉', categoria: 'campo' },
    { nome: 'Ciclismo', url: '/ciclismo', emoji: '🚴‍♂️', categoria: 'aberta' },
    { nome: 'Corrida', url: '/corrida', emoji: '🏃‍♂️', categoria: 'aberta' },
    { nome: 'Patinação', url: '/patinacao', emoji: '⛸️', categoria: 'aberta' },
    { nome: 'Skate', url: '/skate', emoji: '🛹', categoria: 'aberta' },
    { nome: 'Kitesurf', url: '/kitesurf', emoji: '🪁🌊', categoria: 'aquatico' },
    { nome: 'Mergulho', url: '/mergulho', emoji: '🤿', categoria: 'aquatico' },
    { nome: 'Natação', url: '/natacao', emoji: '🏊‍♂️', categoria: 'aquatico' },
    { nome: 'Polo Aquático', url: '/polo_aquatico', emoji: '🤽‍♂️', categoria: 'aquatico' },
    { nome: 'Surfe', url: '/surfe', emoji: '🏄‍♂️', categoria: 'aquatico' },
    { nome: 'Tênis de Mesa', url: '/tenis_de_mesa', emoji: '🏓', categoria: 'mesa' },
    { nome: 'Boxe', url: '/boxe', emoji: '🥊', categoria: 'luta' },
    { nome: 'Jiu-Jítsu', url: '/jiu_jitsu', emoji: '🥋', categoria: 'luta' },
    { nome: 'Judo', url: '/judo', emoji: '🥋', categoria: 'luta' },
    { nome: 'Karatê', url: '/karate', emoji: '🥋', categoria: 'luta' },
    { nome: 'Kung Fu', url: '/kung_fu', emoji: '☯️', categoria: 'luta' },
    { nome: 'MMA', url: '/mma', emoji: '🤼', categoria: 'luta' },
    { nome: 'Muay Thai', url: '/muay_thai', emoji: '🥊', categoria: 'luta' },
    { nome: 'Taekwondo', url: '/taekwondo', emoji: '🥋', categoria: 'luta' }
];

// === PERGUNTAS DO QUIZ ===
const quizPerguntas = [
    {
        pergunta: "Qual país sediou a primeira Copa do Mundo de Futebol?",
        opcoes: ["Brasil", "Uruguai", "Argentina", "Inglaterra"],
        correta: 1
    },
    {
        pergunta: "Quantos jogadores tem uma equipe de vôlei em quadra?",
        opcoes: ["5", "6", "7", "8"],
        correta: 1
    },
    {
        pergunta: "Qual arte marcial foi criada por Bruce Lee?",
        opcoes: ["Kung Fu", "Jeet Kune Do", "Karatê", "Taekwondo"],
        correta: 1
    },
    {
        pergunta: "Em que ano o skate se tornou esporte olímpico?",
        opcoes: ["2016", "2018", "2020", "2022"],
        correta: 2
    },
    {
        pergunta: "Quantos sets são necessários para vencer uma partida de tênis masculino em Grand Slam?",
        opcoes: ["2", "3", "4", "5"],
        correta: 1
    },
    {
        pergunta: "Qual é o esporte de raquete mais rápido do mundo?",
        opcoes: ["Tênis", "Badminton", "Squash", "Tênis de Mesa"],
        correta: 1
    },
    {
        pergunta: "Quantos jogadores tem uma equipe de rugby em campo?",
        opcoes: ["11", "13", "15", "17"],
        correta: 2
    },
    {
        pergunta: "Qual nadador brasileiro é conhecido como 'Cielo'?",
        opcoes: ["Gustavo Borges", "Fernando Scherer", "César Cielo", "Thiago Pereira"],
        correta: 2
    },
    {
        pergunta: "Em que esporte o brasileiro Guga Kuerten se destacou?",
        opcoes: ["Vôlei", "Tênis", "Futebol", "Basquete"],
        correta: 1
    },
    {
        pergunta: "Qual é a distância de uma maratona oficial?",
        opcoes: ["40km", "42.195km", "45km", "50km"],
        correta: 1
    },
    {
        pergunta: "Quantas medalhas de ouro Michael Phelps ganhou em sua carreira olímpica?",
        opcoes: ["16", "18", "22", "20"],
        correta: 2
    },
    {
        pergunta: "Qual país é famoso pelo futebol americano universitário com tradição de 'tailgate'?",
        opcoes: ["Estados Unidos", "Canadá", "Austrália", "Reino Unido"],
        correta: 0
    },
    {
        pergunta: "Qual esporte utiliza um disco e patins em uma quadra fechada?",
        opcoes: ["Hóquei no Gelo", "Rink Hockey", "Inline Hockey", "Polo"],
        correta: 1
    },
    {
        pergunta: "Em que esporte a expressão 'ace' é usada para um serviço perfeito?",
        opcoes: ["Tênis", "Vôlei", "Futebol", "Basquete"],
        correta: 0
    },
    {
        pergunta: "Qual país é reconhecido por dominar o sumô?",
        opcoes: ["China", "Japão", "Coreia do Sul", "Mongólia"],
        correta: 1
    },
    {
        pergunta: "Quantos minutos tem um tempo no basquete profissional (NBA)?",
        opcoes: ["10", "12", "15", "20"],
        correta: 1
    }
];

// cópia atual do quiz que será embaralhada em cada início
let currentQuiz = [];

// utilitário: embaralhar array in-place
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// retorna uma cópia da pergunta com opções embaralhadas e índice correto ajustado
function shuffledQuestionCopy(q) {
    const opc = q.opcoes.map((o, idx) => ({texto: o, idx}));
    shuffleArray(opc);
    const novaOpcoes = opc.map(o => o.texto);
    const novaCorreta = opc.findIndex(o => o.idx === q.correta);
    return { pergunta: q.pergunta, opcoes: novaOpcoes, correta: novaCorreta };
}

// === 1. BARRA DE PESQUISA ===
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length === 0) {
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
            return;
        }
        
        const resultados = esportes.filter(esporte => 
            esporte.nome.toLowerCase().includes(query)
        );
        
        if (resultados.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item" style="cursor: default;">Nenhum esporte encontrado</div>';
            searchResults.classList.add('active');
            return;
        }
        
        searchResults.innerHTML = resultados.map(esporte => `
            <div class="search-result-item" onclick="window.location.href='${esporte.url}'">
                <span>${esporte.emoji}</span>
                <span>${esporte.nome}</span>
            </div>
        `).join('');
        
        searchResults.classList.add('active');
    });
    
    // Fechar resultados ao clicar fora
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-box')) {
            searchResults.classList.remove('active');
        }
    });
}

// === 2. SISTEMA DE FAVORITOS ===
function initFavorites() {
    updateFavoriteButtons();
    updateFavoriteCount();
}

function getFavorites() {
    const favs = localStorage.getItem('favoritesSports');
    return favs ? JSON.parse(favs) : [];
}

function saveFavorites(favorites) {
    localStorage.setItem('favoritesSports', JSON.stringify(favorites));
    updateFavoriteCount();
}

function toggleFavorite(sportUrl) {
    let favorites = getFavorites();
    const index = favorites.indexOf(sportUrl);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(sportUrl);
    }
    
    saveFavorites(favorites);
    updateFavoriteButtons();
    
    // Animação no botão
    const btn = document.querySelector('.btn-favorite');
    if (btn) {
        btn.classList.add('active');
        setTimeout(() => {
            if (!favorites.includes(sportUrl)) {
                btn.classList.remove('active');
            }
        }, 500);
    }
}

function updateFavoriteButtons() {
    const favorites = getFavorites();
    const currentPage = window.location.pathname;
    const btn = document.querySelector('.btn-favorite');
    
    if (btn && favorites.includes(currentPage)) {
        btn.classList.add('active');
    }
}

function updateFavoriteCount() {
    const favorites = getFavorites();
    const countElem = document.getElementById('favorite-count');
    if (countElem) {
        countElem.textContent = favorites.length;
    }
}

function showFavorites() {
    const favorites = getFavorites();
    const modal = document.getElementById('favorites-modal');
    const grid = document.getElementById('favorites-grid');
    
    if (favorites.length === 0) {
        grid.innerHTML = '<div class="empty-favorites">Você ainda não tem esportes favoritos.<br>❤️ Clique no coração nas páginas dos esportes!</div>';
    } else {
        const favSports = esportes.filter(e => favorites.includes(e.url));
        grid.innerHTML = favSports.map(sport => `
            <div class="favorite-item" onclick="window.location.href='${sport.url}'">
                <span>${sport.emoji}</span>
                <p>${sport.nome}</p>
            </div>
        `).join('');
    }
    
    modal.classList.add('active');
}

// === 3. ESPORTE ALEATÓRIO ===
function esporteAleatorio() {
    const randomSport = esportes[Math.floor(Math.random() * esportes.length)];
    window.location.href = randomSport.url;
}

// === 7. CONTADOR DE VISUALIZAÇÕES ===
function initViewCounter() {
    const currentPage = window.location.pathname;
    if (currentPage === '/' || currentPage === '/index') return;
    
    let views = JSON.parse(localStorage.getItem('sportViews') || '{}');
    views[currentPage] = (views[currentPage] || 0) + 1;
    localStorage.setItem('sportViews', JSON.stringify(views));
    
    const counterElem = document.querySelector('.view-counter');
    if (counterElem) {
        counterElem.innerHTML = `
            <div class="view-bubble" role="status" aria-live="polite">
                <span class="view-icon">👁️</span>
                <span class="view-count">${views[currentPage]}</span>
                <span class="view-label">visualizações</span>
            </div>
        `;
    }
}

// === 8. QUIZ ESPORTIVO ===
let quizAtual = 0;
let quizScore = 0;
let quizRespondido = false;

function initQuiz() {
    quizAtual = 0;
    quizScore = 0;
    quizRespondido = false;
    // selecionar até 10 perguntas aleatórias do pool e embaralhar opções
    let pool = quizPerguntas.slice();
    shuffleArray(pool);
    const maxQuestions = Math.min(10, pool.length);
    currentQuiz = pool.slice(0, maxQuestions).map(q => shuffledQuestionCopy(q));
    mostrarPergunta();
}

function mostrarPergunta() {
    const container = document.getElementById('quiz-container');
    if (!container || quizAtual >= currentQuiz.length) {
        mostrarResultado();
        return;
    }
    
    const pergunta = currentQuiz[quizAtual];
    container.innerHTML = `
        <div class="quiz-question">
            <h3>Pergunta ${quizAtual + 1} de ${currentQuiz.length}</h3>
            <p style="font-size: 1.2em; color: white; margin: 20px 0;">${pergunta.pergunta}</p>
            <div class="quiz-options">
                ${pergunta.opcoes.map((opcao, index) => `
                    <div class="quiz-option" onclick="responderQuiz(${index})">
                        ${opcao}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    quizRespondido = false;
}

function responderQuiz(resposta) {
    if (quizRespondido) return;
    quizRespondido = true;
    
    const pergunta = currentQuiz[quizAtual];
    const opcoes = document.querySelectorAll('.quiz-option');
    
    opcoes[resposta].classList.add(resposta === pergunta.correta ? 'correct' : 'wrong');
    opcoes[pergunta.correta].classList.add('correct');
    
    if (resposta === pergunta.correta) {
        quizScore++;
    }
    
    setTimeout(() => {
        quizAtual++;
        mostrarPergunta();
    }, 1500);
}

function mostrarResultado() {
    const container = document.getElementById('quiz-container');
    const porcentagem = Math.round((quizScore / currentQuiz.length) * 100);
    let mensagem = '';
    
    if (porcentagem >= 80) {
        mensagem = '🏆 Incrível! Você é um expert em esportes!';
    } else if (porcentagem >= 60) {
        mensagem = '👏 Muito bem! Você conhece bastante sobre esportes!';
    } else if (porcentagem >= 40) {
        mensagem = '😊 Bom trabalho! Continue aprendendo!';
    } else {
        mensagem = '💪 Continue praticando! O conhecimento vem com o tempo!';
    }
    
    container.innerHTML = `
        <div class="quiz-result">
            <h3>Quiz Finalizado!</h3>
            <div class="quiz-score">${quizScore}/${currentQuiz.length}</div>
            <p>${mensagem}</p>
            <p>Você acertou ${porcentagem}% das questões!</p>
            <button class="btn-restart" onclick="initQuiz()">🔄 Tentar Novamente</button>
        </div>
    `;
}

// === 10. MODO ESCURO GLOBAL ===
function initDarkMode() {
    const isDark = localStorage.getItem('globalDarkMode') === 'true';
    if (isDark) {
        document.body.classList.add('global-dark-mode');
        updateDarkModeButton(true);
    }
}

function toggleGlobalDarkMode() {
    const isDark = document.body.classList.toggle('global-dark-mode');
    localStorage.setItem('globalDarkMode', isDark);
    updateDarkModeButton(isDark);
}

function updateDarkModeButton(isDark) {
    const btn = document.getElementById('btn-dark-mode');
    if (btn) {
        btn.innerHTML = isDark ? '☀️ Claro' : '🌙 Escuro';
        if (isDark) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    }
}

// === MODAL ===
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// === INICIALIZAÇÃO ===
document.addEventListener('DOMContentLoaded', function() {
    initSearch();
    initFavorites();
    initViewCounter();
    initDarkMode();
});
