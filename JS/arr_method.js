const numbers = [12, 34, 56, 7, 88, 90];
numbers.forEach((numbers)=>{console.log(numbers);});

const mapArr = numbers.map((name)=>{return name*2;});
console.log(numbers);
console.log(mapArr);

const skills = ["HTML", "JavaScript", "React", "Redux", "Angular"];

const skillEL =  skills.map((skill)=>{return `<li>${skill}</li>`}).join('');

document.querySelector('body').insertAdjacentHTML('afterbegin', skillEL)

const filteredNumbers = numbers.filter((number)=>{return number>30;});
console.log(filteredNumbers);