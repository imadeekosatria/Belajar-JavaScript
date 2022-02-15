//================ For Loop ================
for(let i = 0; i < 5; i++) {
    console.log(i);
}

/* output
0
1
2
3
4
*/

//================ For of Loop ================
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}

/* output
Luke
Han
Chewbacca
Leia
*/

//================ While and do-while ================
let i = 1;

while (i <= 100) {
    console.log(i);
    i++;
}
//================ Bentuk lain =================
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 100);

//================ Infinite Loop ================
let i = 1;
 
while (i <= 5) {
    console.log(i);
}