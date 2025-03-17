//for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}

for(let i=1; i<=10; i++){
    // console.log(`Outer loop value: ${i}`);
    for(let j=1; j<=10; j++){
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
        // console.log(i + "*" + j + "=" + i*j);
    }
}

let myArray = ["flash", "batman", "superman"];
for(let i=0; i<myArray.length; i++){
    const element = myArray[i];
    // console.log(element);
}

//ArrayIndexOutOfBound exception doesn't exist in javascript rather it gives undefined for extra index

//break and continue

for(let i=1; i<=20; i++){
    if(i == 5){
        // console.log("Detected 5");
        break;
    }
    // console.log(`Value of i is ${i}`);
}

for(let i=1; i<=20; i++){
    if(i == 5){
        // console.log("Detected 5");
        continue;
    }
    // console.log(`Value of i is ${i}`);
}

//while loop
/*while(condition){

}
*/

let i = 0;
while(i <= 10){
    // console.log(`Value of i is ${i}`);
    i+=2;
}

myArray = ["flash", "batman", "superman"];
let arr = 0;
while(arr < myArray.length){
    // console.log(`Value is ${myArray[arr]}`);
    arr++;
}

//do-while loop
let score = 11;
do{
    console.log(`Score is ${score}`);
    score++;
}while(score <= 10);
