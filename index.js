let exasmple1 = {};
let joldosh  = {name : "Joldosh",age: 22, isEmployed: false,sayHello:function(){
  console.log("Hello, I'm " + this.name);
 },};

 joldosh.age = 23;
 console.log (joldosh.age);
 joldosh.favouriteBooks =["Harry Potor","Harry Potor-2"];
 aboutmyself.sayHello();
 joldosh.name = "Jol";
 joldosh.sayHello();
 

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

//view ,edit,add
console.log(joldosh.name);



//delete
// delete joldosh.favouriteBooks;
// console.log(joldosh.favouriteBooks);

// aboutmyself.children = 5;
// console.log (aboutmyself.children);
