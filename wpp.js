'use strict'

async function fetchPersonagens() {
    const url = `http://localhost:9090/v1/whatsapp/contatos4/11955577796`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        
        console.log("Resposta da API:", data);
        return data.conversas || [];  // Acesse a propriedade 'conversas' corretamente
    } catch (error) {
        console.error("Erro na requisição:", error);
        return [];
    }
}

async function fetchConversas() {
    const url = `http://localhost:9090/v1/whatsapp/contatos4/11955577796`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        
        console.log("Resposta da API:", data);
        return data || []; 
    } catch (error) {
        console.error("Erro na requisição:", error);
        return [];
    }
}

function criarCard(personagem) {
    const container = document.getElementById('container2');

    const card = document.createElement('div');
    card.classList.add('card');

    const h2 = document.createElement('h2');
    h2.textContent = personagem.name;
    card.appendChild(h2);

    // Adicionar evento de clique no cartão para mostrar os detalhes
    card.addEventListener('click', () => mostrarDetalhes(personagem));

    container.appendChild(card);
}

function mostrarDetalhes(personagem) {
    // Encontrar o contêiner onde você quer mostrar as mensagens
    const chatBox = document.getElementById('chat-box');
    
    // Limpar os detalhes anteriores
    chatBox.innerHTML = '';

    // Verificar se o personagem tem conversas
    if (personagem.convensas && Array.isArray(personagem.convensas)) {
        personagem.convensas.forEach(conversa => {
            // Criar um elemento para exibir a mensagem
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');

            // Criar o elemento para o remetente
            const sender = document.createElement('strong');
            sender.textContent = conversa.sender; // Exibe o remetente
            messageElement.appendChild(sender);

            // Criar o elemento para o conteúdo da mensagem
            const content = document.createElement('p');
            content.textContent = conversa.content; // Exibe o conteúdo
            messageElement.appendChild(content);

            // Criar o elemento para o horário da mensagem
            const time = document.createElement('small');
            time.textContent = conversa.time; // Exibe o horário
            messageElement.appendChild(time);

            // Adicionar a mensagem ao container de detalhes
            chatBox.appendChild(messageElement);
        });
    } else {
        console.error('Este personagem não tem mensagens ou o formato está errado.');
    }
}




 async function carregarConv() {
    const bere = await fetchConversas()
    bere.forEach(mostrarDetalhes)
}

async function carregarPersonagens() {
    const personagens = await fetchPersonagens();
    console.log(personagens);  // Verifique o que está sendo retornado
    if (Array.isArray(personagens)) {
        personagens.forEach(criarCard);
    } else {
        console.error('A resposta da API não contém um array de conversas');
    }
}



carregarPersonagens()