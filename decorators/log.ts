
export function log(
	target: any,
	key: string,
	descriptor: any) {

	var original = descriptor.value;

	descriptor.value = function(...args: any[]) {
		var a = args.map(a => JSON.stringify(a)).join();
		console.log(`calling: ${key}(${a})`);
		
		var result = original.apply(this, args);
		
		var r = JSON.stringify(result);
		console.log(`called: ${key}(${a}) => ${r}`);
		return result;
	}

	return descriptor;
}