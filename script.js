//complete this code
class Animal {
	//NOTE : property name must not match getters and setters, so we always use #species -> it makes our property private
	#species //creating it as private property
	constructor(species){
		this.#species = species;
	}
	get species(){
		return this.#species;
	}
	makeSound(){
		console.log("The "+ this.#species+ " makes a sound");
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;