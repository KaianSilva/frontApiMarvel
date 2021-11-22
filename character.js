
idP = localStorage.getItem("idPersonagem")

function listaIdPersonagem(id){
    console.log(id)
    axios.get(`http://localhost:3000/personagem/${id}`,{
        
    })
      .then(function (response) {
        // handle success
        comics = response.data.personagens[0].comics
        /* console.log(response.data.personagens)
        console.log(comics) */
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

            
           /*  comics.forEach(comic =>{
                document.querySelector(".hq").innerHTML +=
                
                `<div class="card text-danger bg-light y-3 x-3" style="max-width: 250px;"> 
                  <img src="marvel.png" class="card-img-top" alt="..."> 
                  <div class="card-body"> 
                    <h5 class="card-title">${comic.name}</h5> 
                  </div> 
                </div>`
            }); */


           
    
        });
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
  
    /* ----------------------------  */

    function listaQuadrinhos(id){
      console.log('foi')
      axios.get(`http://localhost:3000/quadrinhos/${id}`,{
        params:{
          limit:100
      }
      })
        .then(function (response) {
          // handle success
          comics = response.data.quadrinhos
          //console.log(response.data.quadrinhos)
          console.log(comics)
          
          
          
              
              comics.forEach(comic =>{
                  document.querySelector(".hq").innerHTML +=
                  
                  `<div class="card text-danger bg-light y-3 x-3" style="max-width: 250px;"> 
                    <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" class="card-img-top" alt="..."> 
                    <div class="card-body"> 
                      <h5 class="card-title">${comic.nome}</h5> 
                    </div> 
                  </div>`
              });
   
          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      }




    listaIdPersonagem(idP) 
    listaQuadrinhos(idP)