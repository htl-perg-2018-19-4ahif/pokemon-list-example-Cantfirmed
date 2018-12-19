//import * as bootstrap from 'bootstrap';
/*import express = require('express');

let server = express();


server.get("", (request, response ) =>{
    response.sendFile('D:\\AHIF4\\MobileComputing\\pokemon-list-example-Cantfirmed\\plist.html');
});
*/
if(window.location.href.indexOf("id")==-1){
    (async function() {
        const pokelist = await $.get('https://pokeapi.co/api/v2/pokemon/');

        let html = "";
        let counter = 1;
        for(const pokemon of pokelist.results) {
            
            html += `<tr><td>${counter}</td><td>${pokemon.name}</td><td><button onclick="location.href='details.html?id=${counter}/'">Info</button></td></tr>`;
            counter++;
        }
        
        $('.pokemon')[0].innerHTML = html;
    })();
}else{
    (async function() {
        let id = window.location.search.split("=")[1];
        let pokemon = await $.get('https://pokeapi.co/api/v2/pokemon/' + id);
        $('.name')[0].innerHTML =`Name: ${pokemon.name}`; 
        $('.sprite')[0].innerHTML = `<img src="${pokemon.sprites.front_default}"></img>`;
        $('.weight')[0].innerHTML = `Weight: ${pokemon.weight}`;
        let abilities = "<ul>";
        for(const ability of pokemon.abilities) {
            abilities += `<li>${ability.ability.name}</li>`
        }
        abilities+="</ul>";
        $('.abilities')[0].innerHTML = abilities;
    })();
}

/*
const port = 8080;
server.listen(port, function () {
  console.log(`API is listening on port ${port}`);
}); */