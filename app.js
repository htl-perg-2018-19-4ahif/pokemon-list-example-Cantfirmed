var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//import * as bootstrap from 'bootstrap';
/*import express = require('express');

let server = express();


server.get("", (request, response ) =>{
    response.sendFile('D:\\AHIF4\\MobileComputing\\pokemon-list-example-Cantfirmed\\plist.html');
});
*/
if (window.location.href.indexOf("id") == -1) {
    (function () {
        return __awaiter(this, void 0, void 0, function* () {
            const pokelist = yield $.get('https://pokeapi.co/api/v2/pokemon/');
            let html = "";
            let counter = 1;
            for (const pokemon of pokelist.results) {
                html += `<tr><td>${counter}</td><td>${pokemon.name}</td><td><button onclick="location.href='details.html?id=${counter}/'">Info</button></td></tr>`;
                counter++;
            }
            $('.pokemon')[0].innerHTML = html;
        });
    })();
}
else {
    (function () {
        return __awaiter(this, void 0, void 0, function* () {
            let id = window.location.search.split("=")[1];
            let pokemon = yield $.get('https://pokeapi.co/api/v2/pokemon/' + id);
            $('.name')[0].innerHTML = `Name: ${pokemon.name}`;
            $('.sprite')[0].innerHTML = `<img src="${pokemon.sprites.front_default}"></img>`;
            $('.weight')[0].innerHTML = `Weight: ${pokemon.weight}`;
            let abilities = "<ul>";
            for (const ability of pokemon.abilities) {
                //abilities += `<li>${pokemon.abilities[1].ability.name}</li>`
                abilities += `<li>${ability.ability.name}</li>`;
            }
            abilities += "</ul>";
            $('.abilities')[0].innerHTML = abilities;
        });
    })();
}
/*
const port = 8080;
server.listen(port, function () {
  console.log(`API is listening on port ${port}`);
}); */ 
