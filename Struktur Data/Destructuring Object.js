/*
Hapus tanda // untuk menjalankan kode!
*/

//================ Destructuring Object =================

const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
// const {firstName, lastName, age} = profile;
 
// console.log(firstName, lastName, age);
 
/* output:
John Doe 18
*/

//================ Destructuring Assignment =================
// let firstName = "Dimas";
// let age = 20;
 
// menginisialisasi nilai baru melalui destructuring object
// ({firstName, age} = profile);
 
// console.log(firstName);
// console.log(age);
 
/* output:
John
18
*/

//================ Default Values =================
// const {firstName, age, isMale} = profile;
 
// console.log(firstName)
// console.log(age)
// console.log(isMale)
 
/* output:
John
18
undefined
*/

/*Alternatifnya*/
// const {firstName, age, isMale = false} = profile;
 
// console.log(firstName)
// console.log(age)
// console.log(isMale)
 
/* output:
John
18
false
*/

//================ Assigning to Different Local Variable Names =============
const {firstName: localFirstName, lastName: localLastName, age: localAge} = profile;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);
 
 
/* output:
John
Doe
18
*/