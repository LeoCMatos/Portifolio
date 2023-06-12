chamarHtml('conteudo', './html/home.html', () => {
    var texto = document.querySelector('#texto')
    var logos = document.querySelectorAll('#logos i, #logos p')
    
    logos.forEach((logo) => {
        logo.addEventListener('mouseover', entrouLogos)
        logo.addEventListener('mouseout', saiuLogos)
    })
    

    function entrouLogos(event){
        const logo = event.target
        const logoID = logo.id
        console.log(logoID)
        
        switch(logoID){
            case 'html':
                texto.innerHTML = 'texto html'
            return
            case 'css':
                texto.innerHTML = 'texto css'
            return
            case 'js':
                texto.innerHTML = 'texto js'
            return
            case 'git':
                texto.innerHTML = 'texto git'
            return
            case 'github':
                texto.innerHTML = 'texto github'
            return
            case 'angular':
                texto.innerHTML = 'texto angular'
            return
            case 'db':
                texto.innerHTML = 'texto db'
            return
            case 'ts':
                texto.innerHTML = 'texto ts'
            return
            case 'eu':
                texto.innerHTML = 'texto minhas habilidades'
            return
        }
        
    }

    function saiuLogos(event){
        texto.innerHTML = 'Coloque o mouse sobre um incone'
    }

});