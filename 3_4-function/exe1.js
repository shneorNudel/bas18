//1
const square = num => num*num;
console.log(square(2));

//2
const add = (n1, n2) => n1+n2
console.log(add(10, 20));

//3
const isEven = num => num%2==0 
console.log(isEven(11));

//4
const average = (n1, n2, n3) => (n1+n2+n3)/3
console.log(average(10,20,30));

//5
const toUpperCase = str => str.toUpperCase()
console.log(toUpperCase("asd"));

//6
const containsWord = (str, word) => str.includes(word)
console.log(containsWord("hello world", "hello"));

//7
const printToN = num => {
    for (let i = 0; i <= num; i++) 
        console.log(i);
};
printToN(5)

//8
const sumArray = arr => arr.reduce((sum, e) => sum+e, 0)
console.log(sumArray([1,2,3,4,5]));

//9
const timesTen = num => num*10
console.log(timesTen(10));

//10
const firstChar = str => str[0]
console.log(firstChar("hello"));

//11
const isGreater = (n1, n2) => n1>n2
console.log(isGreater(10,5));

//12
const isPositive = num => num>0
console.log(isPositive(-10));

//13
const random100 = () => Math.floor(Math.random()*100 +1)
console.log(random100());

//14
const reverseName = (firstName, lastName) => lastName+" "+ firstName
console.log(reverseName("avi", "choen"));

//15
const filterEvens = arr => arr.filter(e => e%2==0)
console.log(filterEvens([2, 5, 8, 4,3]));