// write a program to print 1 to 10 using for loop
for(let i =1 ; i <= 10; i++){
    console.log('Iteration is: ' + i);
}


// write a program to find sum of even numbers from 1 to 100 using for loop
let sum = 0;
for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        sum += i;
    }
}

console.log('Sum of even numbers is: ' + sum);


// write a program to print each character of a string using for loop
let programming_language = "JavaScript";
for(let i = 0; i < programming_language.length; i++){
    console.log(programming_language[i]);
}

// write a program to print multiplication table of 5 using for loop
for(let i = 1; i <= 10; i++){
    console.log(`5 * ${i} = ` + 5 * i);
}