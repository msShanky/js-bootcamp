// // let name = '';
// if (name) {
// 	alert('The Name is a string');
// } else if (typeof name === 'number') {
// 	alert('The Name is a number');
// } else {
// 	alert('The Name is not a string');
// }
let name = 10;
// console.log(name, typeof name);x
name
	? typeof name === "bigint"
		? alert('THE NAME IS A STRING')
		: typeof name === 'number'
		? alert('THE NAME IS A NUMBER')
		: alert('THE NAME IS EVIL')
	: alert('THERE IS NO NAME');
