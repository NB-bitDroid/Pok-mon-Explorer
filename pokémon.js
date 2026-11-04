const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
const data = await response.json();
class Pokémon {
    static totalCreated

    constructor(data){
        this.id = data.id;
        this.image = data.sprites.front_default;
        this.types = data.types;
        this.maxHealth = data.stats[0].base_stat;
        this.health = data.stats[0].base_stat;
        this.attackPower = data.stats[1].base_stat;
        this.defense = data.stats[2].base_stat;
    };
    
    get health(){
        return this._health;
        
    };
    
    set health(mh){
        this._health = Math.max(0, mh)
    };

    get healthPercent(){
        return (Math.floor((this.health)/(this.maxHealth)*100));
    };

    get isFainted(){
        if (this._health <= 0) {
            return true;
        }else{
            return false;
        };
    };

    takeDamage(amount){
        this._health -= amount;
        if (this._health < 0) {
            this._health = 0;
        };
    };

    heal(amount){
        this._health += amount; 
        if (this._health > this.maxHealth) {
            this._health = this.maxHealth;
        };
    };

    resetHealth(){
        this._health = this.maxHealth;
    };

};

const pokemon = new Pokémon(data)
pokemon.health = pokemon.maxHealth
console.log(pokemon.health); 
console.log(pokemon.healthPercent); 
console.log(pokemon.isFainted); 
pokemon.takeDamage(20)
console.log(pokemon.health); 
console.log(pokemon.healthPercent); 
console.log(pokemon.isFainted); 
pokemon.takeDamage(30)
console.log(pokemon.health); 
console.log(pokemon.healthPercent); 
console.log(pokemon.isFainted); 
pokemon.heal(5)
console.log(pokemon.health); 
console.log(pokemon.healthPercent); 
console.log(pokemon.isFainted); 
pokemon.resetHealth()
console.log(pokemon.health); 
console.log(pokemon.healthPercent); 
console.log(pokemon.isFainted); 