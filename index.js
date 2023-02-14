let exasmple1 = {};
let joldosh  = {name : "Joldosh",age: 22, isEmployed: false};
let aboutmyself = {   
  name : "Aida",
  age: 36,
  lastname: "Edigeeva",
  status: "merried",
  children: 3,
  sayHello:function(){},
  console.log("Hello");
};
console.log(aboutmyself.age);

//view ,edit,add
console.log(joldosh.name);


joldosh.age = 23;
console.log (joldosh.age);
joldosh.favouriteBooks =["Harry Potor","Harry Potor-2"];

//delete
delete joldosh.favouriteBooks;
console.log(joldosh.favouriteBooks);



// aboutmyself.children = 5;
// console.log (aboutmyself.children);
