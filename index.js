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
                texto.innerHTML = 'HTML é uma linguagem de marcação usada para criar a estrutura e o conteúdo de páginas da web. Com tags específicas, como parágrafos, títulos e imagens, o HTML permite definir elementos visuais e funcionais em um site. Os navegadores interpretam o HTML para exibir o conteúdo aos usuário.'
            return
            case 'css':
                texto.innerHTML = 'Css é uma linguagem de estilo utilizada para  definir a aparência e o layout de documentos HTML. Com CSS, é possível controlar elementos como cores, fontes, tamanhos, margens e posicionamento de elementos na página. É uma ferramenta essencial para criar designs atraentes e responsivos em sites e aplicativos da web.'
            return
            case 'js':
                texto.innerHTML = 'JavaScript (JS) é uma linguagem de programação interpretada que permite adicionar interatividade e dinamismo a páginas da web. Com JS, é possível manipular elementos da página, responder a eventos, validar formulários, criar animações e muito mais.'
            return
            case 'git':
                texto.innerHTML = 'Git é um sistema de controle de versão distribuído amplamente utilizado no desenvolvimento de software. Ele permite que equipes de desenvolvedores colaborem de forma eficiente, gerenciem alterações de código e controlem o histórico de revisões dos projetos.'
            return
            case 'github':
                texto.innerHTML = 'GitHub é uma plataforma de hospedagem de código-fonte baseada em Git. É um serviço que fornece recursos adicionais para trabalho em equipe, como rastreamento de problemas, gerenciamento de projetos e integração contínua. O GitHub é amplamente utilizado para compartilhar e colaborar em projetos de código aberto e privados.'
            return
            case 'angular':
                texto.innerHTML = 'Angular é um framework JavaScript de código aberto mantido pelo Google. Ele permite o desenvolvimento de aplicativos web robustos e escaláveis, seguindo o padrão de arquitetura MVC (Model-View-Controller). O Angular oferece recursos poderosos para criação de interfaces de usuário dinâmicas e interativas.'
            return
            case 'bootstrap':
                texto.innerHTML = 'Bootstrap é um framework front-end popular que fornece uma coleção de estilos CSS pré-definidos e componentes JavaScript. Ele facilita o desenvolvimento de interfaces responsivas e bem projetadas, com recursos como grids, tipografia, formulários e navegação, ajudando os desenvolvedores a economizar tempo e esforço.'
            return
            case 'db':
                texto.innerHTML = 'Banco de dados SQL (Structured Query Language) é um sistema de gerenciamento de banco de dados relacional amplamente utilizado. Ele fornece uma linguagem padrão para consultar, gerenciar e manipular dados em tabelas estruturadas. O SQL permite a criação, modificação e exclusão de dados, além de operações avançadas como junções, agregações e filtragens.'
            return
            case 'ts':
                texto.innerHTML = 'TypeScript é uma linguagem de programação desenvolvida pela Microsoft que estende a sintaxe do JavaScript. Ela adiciona recursos de tipagem estática ao JS, fornecendo benefícios como autocompletar, detecção de erros em tempo de compilação e facilitando a manutenção de código em projetos complexos. O TypeScript é compilado para JavaScript e pode ser usado em qualquer ambiente onde JS é executado.'
            return
            case 'eu':
                texto.innerHTML = 'Eu sou uma pessoa com habilidades sólidas em comunicação, resolução de problemas e aprendizado rápido. Também tenho experiência em trabalhar em equipe de forma eficaz. Estou sempre buscando melhorar e entregar resultados de qualidade. Valorizo a organização e a eficiência em tudo o que faço.'
            return
        }
        
    }

    function saiuLogos(event){
        if(window.innerWidth <= 768){
            texto.innerHTML = 'Clique em um incone'
        } else if(window.innerWidth >= 768){
            texto.innerHTML = 'Coloque o mouse sobre um incone'
        }
    }

});