import axios from "axios";

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
    timeout: 1000,
});

export const getPokemonData = async (e) => {
    try {
        const response = await instance.get(e);
        return response.data;
    } catch (error) {
        console.error(error);
        alert("Pokemonいなかった！");
    }
};