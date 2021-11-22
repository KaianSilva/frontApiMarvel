
idP = localStorage.getItem("idPersonagem")

function listaIdPersonagem(id){
    console.log(id)
    axios.get(`http://localhost:3000/personagem/${id}`,{
        
    })
      .then(function (response) {
        // handle success
        comics = response.data.personagens[0].comics
        console.log(response.data.personagens)
        console.log(comics)
        document.querySelector(".row").innerHTML = ""
        
        response.data.personagens.forEach(personagem => {
            /* document.querySelector(".col-12").innerHTML = '' */
            document.querySelector(".title").innerHTML = personagem.nome
            if(personagem.descricao == ''){
                document.querySelector(".descricao").innerHTML = 'Não informado'
            } else{
                document.querySelector(".descricao").innerHTML = personagem.descricao
            }
            
            if (personagem.thumbnail.path == "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
                document.querySelector(".row").innerHTML += `<img src="marvel.png" class="img-fluid" alt="..." >`
            } else {
                document.querySelector(".row").innerHTML +=
            
                `<img src="${personagem.thumbnail.path}.${personagem.thumbnail.extension}" class="img-fluid" alt="..." >`
            }

            
            comics.forEach(comic =>{
                document.querySelector(".hq").innerHTML +=
                /* ` <div class="comic">
                    <img src="marvel.png" class="img-thumbnail" alt="..." >
                    <p>${comic.name}</p>
                  </div>` */
                 /*  `<div class="col">
                    <img src="marvel.png" class="img-thumbnail" alt="..." >
                    <p>${comic.name}</p>
                  </div>` */


                /* `<div class="col"
                  <div class="card text-dark bg-light mb-3" style="width: 18rem;">
                    <img src="marvel.png" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${comic.name}</h5>                  
                    </div>
                  </div>
                </div>` */

                `<div class="card text-danger bg-light y-3 x-3" style="max-width: 250px;"> 
                  <img src="marvel.png" class="card-img-top" alt="..."> 
                  <div class="card-body"> 
                    <h5 class="card-title">${comic.name}</h5> 
                  </div> 
                </div>`
            });


           
    
        });
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
  

    listaIdPersonagem(idP) 
