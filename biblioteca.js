var burguer = document.querySelector('#burguer')
var burguer2 = document.querySelector('#burguer2')

function chamarHtml(id, path, callback = () => {}) {
  fetch(`${path}`)
    .then(response => response.text())
    .then(data => {
      // Inserindo o conteúdo do arquivo HTML no elemento 'conteudo'
      document.getElementById(id).innerHTML = data
      callback();
    })
    .catch(error => {
      console.log('Ocorreu um erro:', error)
    })
}

function mudouTamanho() {
  if (window.innerWidth >= 768) {
    itens.style.display = 'block'
  } else {
    itens.style.display = 'none'
  }
}

if (window.innerWidth >= 768) {
  itens.style.display = 'block'
} else {
  itens.style.display = 'none'
}

function clickMenu() {
  if (itens.style.display == 'block' && window.innerWidth <= 768) {
    burguer.style.display = 'block'
    burguer2.style.display = 'none'
    itens.style.display = 'none'
    burguer.style.width = 'block'
    burguer2.style.width = 'none'
  } else {
    itens.style.display = 'block'
    burguer.style.display = 'none'
    burguer2.style.display = 'block'
  }
}


if (window.innerWidth < 768) {
  var listaItens = document.querySelectorAll('#ulprincipal li');

  listaItens.forEach(function (item) {
    item.addEventListener('click', function (event) {
      itens.style.display = 'none'
      burguer2.style.display = 'none'
      burguer.style.display = 'block'
    })
  })

  document.addEventListener('click', function (event) {
    var clicadoFora = true
    var elementos = event.path || (event.composedPath && event.composedPath())

    for (var i = 0; i < elementos.length; i++) {
      if (elementos[i].id == 'itens' || elementos[i].id == 'burguer') {
        clicadoFora = false
        break
      }
    }

    if (clicadoFora) {
      itens.style.display = 'none'
      burguer2.style.display = 'none'
      burguer.style.display = 'block'
    }
  })
}

