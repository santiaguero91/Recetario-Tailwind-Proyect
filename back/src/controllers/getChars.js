const axios = require("axios")

let i = 1
const chars = []
const getChars = async(req, res) => {
while(i <= 5) {
    let getchar = await axios.get(`https://rickandmortyapi.com/api/character/${i}`)
    let character =  {
        id: getchar.data.id, 
        name: getchar.data.name, 
        gender: getchar.data.gender, 
        image: getchar.data.image,
}
chars.push(character);
i++
}
console.log(chars);
res.status(200).json(chars);
} 
module.exports= getChars
