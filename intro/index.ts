// http://channel9.msdn.com/events/Build/2015/3-644

interface INamed {
	name: string
}

class Person {
	private _employer:string;
	constructor(
		public name: string
	) { 
		this._employer = 'self';	
	}
	
	get employer(){
		return this._employer;
	}
	
	set employer(value:string){
		this._employer = value.toUpperCase();
	}
}

function sortByName<T extends INamed>(a: T[]) {
	var result = a.slice(0);
	return result.sort(function(x, y) {
		return x.name.localeCompare(y.name);
	})
}

let pa = 'andrea,fabrizio,lorenzo'.split(',').map(x=>new Person(x));
pa[0].employer = 'Proximo';

let sorted = sortByName(pa);

sorted.forEach(x=>{
	console.log(`${x.name} works at ${x.employer}`)
})