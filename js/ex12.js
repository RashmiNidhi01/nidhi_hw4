const dog = {sound:'Grrr! Grrr!',
    name: "Fang", species: "baarhound", size: 75, bark: function(){return this.sound+''
}};
console.log(`"${dog.name} is a ${dog.species} dog measuring ${dog.size}"`);
console.log(`"Look, a cat! ${dog.name} barks: ${dog.bark()}"`)