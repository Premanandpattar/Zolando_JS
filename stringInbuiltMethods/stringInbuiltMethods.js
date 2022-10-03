var str=" hi Premanand. have a nice day "
// 1)
console.log(str.length);
// output-->> actual length 30
// 2)
console.log(str.split(" "));
// output-->> [ '', 'hi', 'Premanand.', 'have', 'a', 'nice', 'day', '' ]
// 3)
console.log(str.charAt(6));
// output-->> e
// 4)
console.log(str.concat("hi"));
// output-->> hi Premanand. have a nice day hi
console.log(str)
// 5)
console.log(str.endsWith(" "));
// output-->> true
// 6)
console.log(str.includes("hi"));
// output-->> true
// 7)
console.log(str.indexOf("a"));
// 8)
console.log(str.lastIndexOf("y"));
// 9)
console.log(str.replace("a","x"));
// 10)
console.log(str.repeat(10));
// 11)
console.log(str.trim());



