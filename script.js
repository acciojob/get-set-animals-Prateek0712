//complete this code
class Animal {
	#species;
	constructor(species)
	{
		this.species= species;
	}
	get species(){
		return this.species;
	}
	function makeSound(){
		console.log(`The ${species} makes a sound`)
	}
}

class Dog extends Animal {
	constructor(species)
	{
		super(species);
	}
	function bark(){
		console.log('woof');
	}
	
}

class Cat extends Animal {
	constructor(species)
	{
		super(species);
	}
	function purr(){
		console.log('purr');
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
