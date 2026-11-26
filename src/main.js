import './style.css'
import {getPokemonData} from './modules/HttpRequest';


const js = document.querySelector('#js-form');
const nameElement1 = document.querySelector('#name1');
const nameElement2 = document.querySelector('#name2');
const pokeid1 = document.querySelector('#id1');
const pokeid2 = document.querySelector('#id2');
const heightElement1 = document.querySelector("#height1");
const heightElement2 = document.querySelector("#height2");
const weightElement1 = document.querySelector('#weight1');
const weightElement2 = document.querySelector('#weight2');
const errorElement = document.querySelector('#error');
const clearResult = () => {
  nameElement1.textContent = "";
  nameElement2.textContent = "";
  pokeid1.textContent = "";
  pokeid2.textContent = "";
  heightElement1.textContent = "";
  heightElement2.textContent = "";
  weightElement1.textContent = "";
  weightElement2.textContent = "";
}

const submitHandler = async (e) => {
  
  e.preventDefault();
  const text1 = js.querySelector('#pokemon1').value.trim();
  const text2 = js.querySelector('#pokemon2').value.trim();
  if (text1 === "" || text2 === "") {
    clearResult();
    errorElement.textContent = "ポケモン名を入力してください";
    return;
  }
  const pokemonData1 = await getPokemonData(text1);
  const pokemonData2 = await getPokemonData(text2);
  if (pokemonData1 === undefined || pokemonData2 === undefined) {
    clearResult();
    errorElement.textContent = "ポケモンが見つかりませんでした";
    return;
  }
  const pokemonList = [pokemonData1, pokemonData2];
  pokemonList.sort((a, b) => a.height - b.height);
  nameElement1.textContent = "name: " + pokemonList[0].name;
  nameElement2.textContent = "name: " + pokemonList[1].name;
  pokeid1.textContent = "ID: " + pokemonList[0].id;
  pokeid2.textContent = "ID: " + pokemonList[1].id;
  heightElement1.textContent = (pokemonList[0].height / 10) + "m";
  heightElement2.textContent = (pokemonList[1].height / 10) + "m";
  weightElement1.textContent = (pokemonList[0].weight / 10) + "kg";
  weightElement2.textContent = (pokemonList[1].weight / 10) + "kg";
  errorElement.textContent = "";
};
js.addEventListener("submit", (e) => submitHandler(e));