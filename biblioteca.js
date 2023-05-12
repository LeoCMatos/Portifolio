function chamarHtml(id, path) {
    fetch(`${path}`)
        .then(response => response.text())
        .then(data => {
            // Inserindo o conteúdo do arquivo HTML no elemento 'conteudo'
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => {
            console.log('Ocorreu um erro:', error);
        });
}

function mudouTamanho(){
    if(window.innerWidth >= 768){
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

function clickMenu() {
    if(itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}


