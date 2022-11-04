{
    let form = document.getElementById('pokemon');
    
    async function handleSubmit(e){
        e.preventDefault();
        let inputPokemon = e.target.pokemonName.value;
        let poke = await getPokemonInfo(inputPokemon);
        buildPokemonCard(poke)
        e.target.pokemon.value = '';
    }

    async function getPokemonInfo(pokemonName){
            let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            let data = await res.json()
            return data
    }

    function buildPokemonCard(pokemonObj){

        let card = document.createElement('div');
        card.className = 'card';

        let image = document.createElement('img');
        image.className = 'card-img-top h-80 m-2';
        image.src = pokemonObj.sprites.front_default;
        card.append(image);

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let pokemonTitle = document.createElement('h4');
        pokemonTitle.className = 'card-title'
        pokemonTitle.innerHTML = pokemonObj.species.name;

        let pokeHeightAndWeight = document.createElement('p');
        pokeHeightAndWeight.className = 'card-text'
        pokeHeightAndWeight.innerHTML = `Height: ${pokemonObj.height} | Weight: ${pokemonObj.weight}`;

        cardBody.append(pokemonTitle);
        cardBody.append(pokeHeightAndWeight);

        card.append(cardBody);

        let col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-3'

        col.append(card)

        let veiw = document.getElementById('pokeGallery');

        veiw.append(col);
    }

    form.addEventListener('submit', handleSubmit);

}