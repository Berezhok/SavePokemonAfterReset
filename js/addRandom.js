import { fillPokemonCard, getPokemonByNameOrId } from './const.js';

const btn = document.querySelector('#add');
const localPoke = JSON.parse(localStorage.getItem("pokemon"));// распарсив заносим в переменную весь наш localStorage 
let basket =[]; //пустой массив
 if ( localPoke){        // смотрим если у нас есть что-то в localStorage
    localPoke.forEach(el => { //берем каждый элемент нашего массива [{…}, {…}, {…}, {…}]
        fillPokemonCard(el);   // делаем нашего покемона
    });
    basket = basket.concat(localPoke); // добавляем к нашему массиву те что были сделаны до обновления, иначе сохранятся только которые мы внесли после обновления
}
btn.addEventListener('click', async (event) => {
    const randomId = Math.ceil(Math.random() * 100);
    event.preventDefault();
    try {
        const pokemon = await getPokemonByNameOrId(randomId);
        fillPokemonCard(pokemon);
        basket.push(pokemon);// в пустой массив заносим объекты наших покемонов при их добавлении при нажатии на кнопку
        localStorage.setItem("pokemon",JSON.stringify(basket));// в наш localStorage записываем строкой весь наш массив с покемонами
        } catch (error) {
        alert(error.message);
    }
})
    
     
// }

    // fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    //     .then((response) => response.json())
    //     .then((result) => {
    //         const {
    //             name,
    //             base_experience: experience,
    //             // abilities,
    //             abilities: rawAbilities,
    //             sprites: { front_default: image },
    //             // sprites: { front_default },
    //         } = result;
    //         const serailizedAbilities = rawAbilities.map((el) => {
    //             const {
    //                 ability: { name },
    //             } = el;
    //             return name;
    //         });
    //         const pokemon = new Poke(name, serailizedAbilities, experience, image);
    //         fillPokemonCard(pokemon);
    //     });
// });
