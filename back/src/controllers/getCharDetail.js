const axios = require("axios")

const getCharDetail = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)  
    .then(result => result.data)
    .then(data => {
        let character = {
            id: data.id ,
            image:data.image,
            gender:data.gender,
            species:data.species,
            status: data.status,
            origin: data.origin?.name
        }
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(JSON.stringify(character))
    })
    .catch(err => 
        res
        .writeHead(500, {'Content-type': 'application/json'})
        .end("Bip Boop Bip ...Error")
        )

} 
module.exports= getCharDetail