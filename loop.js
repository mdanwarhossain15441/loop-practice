// for of loop

/**

const frutes = ["mango", "jackfrute", "olive", "goyava"];

for (const frute of frutes){
    console.log(frute);
}

 */

// while loop

let num = 0;

while (num < 5){
    // console.log(num);
    num = num + 1;
}

let num1 = 1;

while (num1<=10){
    // console.log(num1);
    num1 += 1
}

let num2 = 20;

while (num2 <= 50){
    // console.log(num2);
    num2++
}

// sum 1 to 10 number using while loop

let num3 = 1;
let total = 0;

while (num3 <= 10){
    // console.log(num3);
    total= total + num3;
    // console.log(total, "+", num3, "=", total + num3);
    num3++;
}

// odd number are showing on 1 to 100

let num4 = 0;

while (num4<=100){
    if(num4%2!==0){
        // console.log(num4);
    }
    num4++
}

let num5 =1;
while (num5<= 100){
    if(num5%2===0){
        // console.log(num5);
    }
    num5++;
}

// decrimental while loop
let num6 = 20;

while (num6 >= 1){
    // console.log(num6);
    num6--;
}


let num7 = 100;

while (num7>=1){
    // console.log(num7);
    num7--;
}

// simple for loop

for(let i=1; i<=10; i++){
    // console.log(i);
}

// find the even number 0 to 100 using for loop

for(let i=0; i<=100; i+=2){
    // console.log(i);
}

for(let i=0; i<=100; i++){
    if(i%2===0){
        console.log(i);
    }
}

// find the odd number 0 to 100 using for loop

for(let i=1; i<=100; i+=2){
    // console.log(i);
}

for(let i=0; i<=100; i++){
    if(i%2===1){
        // console.log(i);
    }
}
for (let i=0; i<=100; i++){
    if(i%2!==0){
        console.log(i);
    }
}
