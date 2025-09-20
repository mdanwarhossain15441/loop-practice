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
        // console.log(i);
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
        // console.log(i);
    }
}

// some of 1 to 100 using for loop

let sum =0;

for(let i=0; i<=100; i++){
    sum = sum + i;
    // console.log(sum);
}

// decriment for loop

for (let i=40; i>=20; i--){
    // console.log(i);
}

// do while loop

let n=5;

do{
    // console.log(n);
    n++;
}while(n<3){
    // console.log("your loop is wrong");
}

// give me the list of number bwteen 1 to 30 divisible by 5 using all type of loop

// while loop
let number1=1;

while(number1<=30){
    if(number1 % 5===0){
        // console.log(number1);
    }
    number1++;
}

// for loop

for (let i=1; i<=30; i++){
    if(i%5===0){
        // console.log(i);
    }
}

// do while loop
// test
let do1 = 1;

do{
    if(do1%5===0){
        // console.log(do1);
        do1++
    }
}while(do1<=30);

// give me the list of number bwteen 1 to 30 divisible by 3 using all type of loop
// test

// while loop

let num8=0;

while(num8<=30){
    if(num8%3===0){
        console.log(num8);
    }
}

// for loop

for (let i=0; i<=30; i++){
    if(i%3===0){
        // console.log(i);
    }
}

// do while

let num9 =0;

do{
    if(num9%3===0){
        // console.log(num9);
        num9++
    }
}
while(num9<=30);

// give me the list of number bwteen 1 to 30 divisible by 3 and 5 using all type of loop.
// test

let num10=0;

while(num10<=30){
    if(num10%5===0 && num10%3===0){
        // console.log(num10);
    }
}

// for loop

for(let i=0; i<=30; i++){
    if(i%3===0 && i%5===0){
        // console.log(i);
    }
}

// do while loop

let num11 = 0;

do{
    if(num11%3===0 && num11%5===0){
        // console.log(num11);
        num11++
    }
}while(num11<30);

// give me the list of number bwteen 1 to 30 divisible by 3 or 5 using all type of loop.

// while loop

let num12=0;
while(num12<=30){
    if(num12%3===0 || num12%5===0){
        // console.log(num12);
    }
}

// for loop

for(let i=0; i<=30; i++){
    if(i%3===0 || i%5===0){
        console.log(i);
    }
}

// Do While Loop

let num13=0;

do{
    if(num13<=30){
        // console.log(num13)
    }
    num13++
}while(num13<=30);

// give me the list of number bwteen 1 to 30 divisible by 3, give me the the sum of which all number. using all type of loop.

// while loop

let num14=0;
let sum1 =0;
while(num14<30){
    if(num14%3===0){
        // console.log(num14);
        sum1=sum1+num14;
        // console.log(num1);
    }
}

// for loop

let sum2=0;

for(let i=0; i<=30; i++){
    if(i%3===0){
        // console.log(i);
        sum2= sum2+i;
    }
    // console.log(sum2);
}

// do while loop

let num15=0;
let sum3=0;

do{
    if(num15%3===0){
        // console.log(num15);
        sum3=sum3+num15;
        num15++
    }
}while(num15<=30);

console.log("show");