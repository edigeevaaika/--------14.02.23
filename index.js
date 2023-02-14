let exasmple1 = {};
let joldosh  = {name : "Joldosh",age: 22, isEmployed: false,sayHello:function(){
  console.log("Hello, I'm " + this.name);
 },
sayBye:function(){
  console.log("Bye");
},
myAge:function(){
  console.log("I'm " + 23 + " years old ");
},
};

 joldosh.age = 23;
 console.log (joldosh.age);
 joldosh.favouriteBooks =["Harry Potor","Harry Potor-2"];
 joldosh.name = "Jol";
 joldosh.sayHello();
 joldosh.sayBye();
 joldosh.myAge();

let aboutmyself = {   
  name : "Aida",
  age: 36,
  lastname: "Edigeeva",
  status: "merried",
  children: 3,
  sayHello:function(){
  console.log("Hello, I'm " + this.name);
 },
 acodeword:function(){
  console.log('cup-cup');
 },
};
console.log(aboutmyself.acodeword);
console.log(aboutmyself.age);
aboutmyself.sayHello();

//view ,edit,add
console.log(joldosh.name);



//delete
// delete joldosh.favouriteBooks;
// console.log(joldosh.favouriteBooks);

// aboutmyself.children = 5;
// console.log (aboutmyself.children);


let exasmple2 = {
  number: 0,
  inc: function(){
    this.number = this.number + 1;
  },
  dcr: function(){
    this.number = this.number - 1;
  },
  add: function(num) {
    this.number = this.number + num;
  },
  subtract: function(num) {
    this.number = this.number - num;
  },
}

console.log (exasmple2.number);
exasmple2.inc();
exasmple2.inc();
console.log(exasmple2.number);
exasmple2.add(5);
console.log(exasmple2.number);
exasmple2.inc();
exasmple2.inc();
console.log(exasmple2.number);