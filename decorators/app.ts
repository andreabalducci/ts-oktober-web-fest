import {log as debug} from "./log"

module Decorators {

	class Calculator {
		constructor() {
		}

		@debug
		add(a:number, b:number) {
			console.log(`adding ${a} to ${b}`);
			return a+b;
		}
	}

	var myCalc = new Calculator();
	myCalc.add(7,4);
}