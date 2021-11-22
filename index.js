

/* const axios = require('axios'); */

// Make a request for a user with a given ID
function listaPersonagens(pagina){
axios.get('http://localhost:3000/personagem',{
    params:{
        page: pagina,
        limit:21
    }
})
  .then(function (response) {
    // handle success
    document.querySelector(".col-12").innerHTML = ""
    
    response.data.personagens.forEach(personagem => {
        /* document.querySelector(".col-12").innerHTML = '' */
       
        /* `<tr>
        <th scope="row">${personagem.id} </th>
        <td> ${personagem.nome} </td>
        <td> <img src="${personagem.thumbnail.path}.${personagem.thumbnail.extension}" class="img-thumbnail" alt="..." > </td>
        </tr>` */
       /*  `<a href="character.html" onclick="listaPersonagem(${personagem.id})> <img src="${personagem.thumbnail.path}.${personagem.thumbnail.extension}" class="img-thumbnail" alt="..." ></a>`
 */ 
       if (personagem.thumbnail.path == "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
        document.querySelector(".col-12").innerHTML += 
        
        `<a href="#" onclick="listaPersonagem(${personagem.id})">
          <img src="marvel.png" class="img-thumbnail" alt="..." >
        </a>`
    } else {
        document.querySelector(".col-12").innerHTML +=
        `<a href="#" onclick="listaPersonagem(${personagem.id})">
          <img src="${personagem.thumbnail.path}.${personagem.thumbnail.extension}" class="img-thumbnail" alt="..." >
        </a>`
    }


       




    });
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}


  listaPersonagens(1);




  function listaPersonagem(id) {

      console.log(id)
      localStorage.setItem("idPersonagem",id);
      window.location.href = `character.html`

    
  }