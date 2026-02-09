import os
import re

templates_dir = r"c:\Users\enzor\OneDrive\Área de Trabalho\conecta-social_projeto\templates"

# Lista de arquivos para atualizar (excluindo base.html e index.html)
arquivos_esportes = [
    'badminton.html', 'basquete.html', 'beisebol.html', 'boxe.html', 'ciclismo.html',
    'corrida.html', 'cricket.html', 'futebol_americano.html', 'futevolei.html', 
    'futsal.html', 'handebol.html', 'jiu_jitsu.html', 'judo.html', 'karate.html',
    'kitesurf.html', 'kung_fu.html', 'mergulho.html', 'mma.html', 'muay_thai.html',
    'natacao.html', 'patinacao.html', 'polo_aquatico.html', 'rugby.html', 'skate.html',
    'surfe.html', 'taekwondo.html', 'tenis.html', 'tenis_de_mesa.html', 'volei.html',
    'volei_de_areia.html'
]

for arquivo in arquivos_esportes:
    caminho = os.path.join(templates_dir, arquivo)
    
    if not os.path.exists(caminho):
        print(f"Arquivo não encontrado: {arquivo}")
        continue
    
    with open(caminho, 'r', encoding='utf-8') as f:
        conteudo = f.read()
    
    # Remover botão de modo escuro antigo
    conteudo = re.sub(r'<button id="toggle-dark-mode"[^>]*>.*?</button>\s*', '', conteudo, flags=re.DOTALL)
    
    # Extrair o nome da rota do arquivo
    esporte_nome = arquivo.replace('.html', '')
    
    # Verificar se já tem botão de favorito e contador
    if '<div class="btn-favorite"' not in conteudo:
        # Procurar onde inserir (após resultado-localizacao)
        padrao = r'(<div id="resultado-localizacao-[^"]*"[^>]*></div>)'
        
        botoes_html = f'''
<!-- Botão de Favorito e Contador -->
<div class="btn-favorite" onclick="toggleFavorite('/{esporte_nome}'); event.stopPropagation();">❤️</div>
<div class="view-counter">👁️ Carregando...</div>
'''
        
        if re.search(padrao, conteudo):
            conteudo = re.sub(padrao, r'\1\n' + botoes_html, conteudo)
        else:
            # Se não encontrar, adicionar após {% block content %}
            conteudo = conteudo.replace('{% block content %}', '{% block content %}\n' + botoes_html)
    
    with open(caminho, 'w', encoding='utf-8') as f:
        f.write(conteudo)
    
    print(f"✓ Atualizado: {arquivo}")

print("\n✅ Todos os arquivos foram atualizados!")
