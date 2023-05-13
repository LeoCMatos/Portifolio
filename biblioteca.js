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
        itens.style.display = 'block';
        
    }
}




if (window.innerWidth < 768) {
    var listaItens = document.querySelectorAll('#ulprincipal li');
  
    listaItens.forEach(function(item) {
      item.addEventListener('click', function(event) {
        itens.style.display = 'none';
      });
    });
  
    document.addEventListener('click', function(event) {
      var clicadoFora = true;
      var elementos = event.path || (event.composedPath && event.composedPath());
  
      for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].id == 'itens' || elementos[i].id == 'burguer' ) {
          clicadoFora = false;
          break;
        }
      }
  
      if (clicadoFora) {
        itens.style.display = 'none';
      }
    });
  }

  function clickModulo1html() {
    if (modulo1html.style.display == 'block') {
        modulo1html.style.display = 'none';
        circleesquerda.style.display = 'none';
        circledireita.style.display = 'block';
        sectionhtml1.style.width = 'auto';
    } else {
        modulo1html.style.display = 'block';
        circleesquerda.style.display = 'block';
        circledireita.style.display = 'none'
        sectionhtml1.style.width = '100%';
    }
  }

 
if (window.innerWidth < 768) {

  document.querySelectorAll('#ulprincipal li').forEach(function(item) {
    item.addEventListener('click', function(event) {
      clickModulo1html();
      // Adicione esta linha para fechar o menu quando um item for clicado:
      menumodulo1.style.display = 'none';
    });
  });

  document.querySelectorAll('#ulprincipal li').forEach(function(item) {
    item.addEventListener('click', function(event) {
      clickModulo1html();
    });
  });
  document.addEventListener('click', function(event) {
    if (!event.target.closest('#modulo1html') && !event.target.closest('#menumodulo1') && modulo1html.style.display == 'block') {
      clickModulo1html();
    }
  });
}


  