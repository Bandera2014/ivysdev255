


class SuperHuman {
	constructor(name, powerLevel) {
		this.name = name;
		this.powerLevel = powerLevel;
	}
}

// Create SuperHero and SuperVillain classes that extend the SuperHuman class. Both classes should have a constructor that has name, alias, and powerLevel parameters, 
//		and the constructor should call the parent class' constructor with the given name and powerLevel.
class SuperHero extends SuperHuman {
	constructor(name, alias, powerlevel) {
		super(name,powerlevel);
		this.alias = alias
	}
}

class SuperVillain extends SuperHuman {
	constructor(name, alias, powerlevel) {
		super(name,powerlevel);
		this.alias = alias
	}
}

const heroes = {
	"Super Bacon": new SuperHero("Jack Oinker", "Super Bacon", 2),
	"Flat-Man": new SuperHero("Peter Pranker", "Flat-Man", 5),
	"Mighty Woman": new SuperHero("Diana Dense", "Mighty Woman", 8),
	"Captain Marvelous": new SuperHero("Carol Hangers", "Captain Marvelous", 9)
};

const villains = {
	"The Jokester": new SuperVillain("Jack Nastier", "The Jokester", 3),
	"Magnet Man": new SuperVillain("Max Eisenhardt", "Magnet Man", 6),
	"Lex Loner": new SuperVillain("Lex Loner", "Lex Loner", 2),
	"Thankos": new SuperVillain("Thankos", "Thankos", 9)
};

registerHandlers();

function registerHandlers() {
	// Detect selection of hero and villain
	document.querySelector("#heroSelect").addEventListener("change", selectionChanged);
	document.querySelector("#villainSelect").addEventListener("change", selectionChanged);
	
	selectionChanged();
}

function selectionChanged() {
	const selectedHeroValue = document.querySelector("#heroSelect").value;
	const selectedVillainValue = document.querySelector("#villainSelect").value;
	
	// Get hero and villain selected
	const selectedHero = heroes[selectedHeroValue];
	const selectedVillain = villains[selectedVillainValue];
	console.log(selectedHero,selectedVillain)
	// Modify selectionChanged() to call the selected hero's battle() method, passing in the selected villain. Display the battle winner's alias in the winner paragraph.
	if (battle(selectedHero,selectedVillain)){
		console.log(selectedHero.alias)
		document.getElementById("winner").innerHTML="Winner: "+selectedHero.alias
	}
	else{
		document.getElementById("winner").innerHTML="Winner: "+selectedVillain.alias
	}
	
}

// Add a battle() method to the SuperHero class that has a SuperVillain parameter. 
//		battle() should return true if the hero's powerLevel is >= the villain's powerLevel, false otherwise.
function battle(hero,villian){
	if (hero.powerLevel >= villian.powerLevel){
		return true
	}
	return false
}

// Add an getEvilChuckle() method to the SuperVillain class that returns the string "Ha ha ha!".
function getEvilChuckle(){
	return "Ha ha ha!"
}

