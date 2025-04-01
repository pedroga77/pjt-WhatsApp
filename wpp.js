'use strict'

document.addEventListener('DOMContentLoaded', async () => {
    const listaChat = document.getElementById('contact-list');

    async function fetchContacts() {
        const response = await fetch(`http://localhost:8888/v1/whatsapp/contatos3/11955577796`);
        const contacts = await response.json();
        displayContacts(contacts);
    }

    function displayContacts(contacts) {
        while (listaChat.firstChild) {
            listaChat.removeChild(listaChat.firstChild);
        }

        contacts.forEach(contact => {
            const li = document.createElement('li');
            li.textContent = contact.name;
            li.dataset.name = contact.name;
            li.addEventListener('click', () => loadChat(contact.name));
            listaChat.appendChild(li);
        });
    }

    fetchContacts();
});

//dataset- permite que acesso algum elemento do html utilizei para que os nomes retornassem no html da forma correta e organizada
//firtsChild- utilizei pois meu codigo estava entrando em loop, utilzei ajuda de IAs para que funcionasse normalmente 
