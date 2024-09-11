function pesquisar() {

    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

   //se o campoPesquisa for uma string sem nada

   if(campoPesquisa == " "){
        section.innerHTML = "<p> Nada foi encontrado</p>"
        return

   }
    

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        //se titulo includes campoPesquisa
        if (dado.titulo.includes(campoPesquisa)){
            //cria um novo elemento
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href= ${dado.link} target="_blank">Mais informações</a>
                </div>
            `;

        }
        
        
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}


//console.log(dados);




