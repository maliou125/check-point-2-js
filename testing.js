//Reverse a String: Write a function that reverses a given string.

function reverseString(str){
    
    return str.split('').reverse().join('');
}
const myString ="hellow"
console.log("Reversed string:", reverseString(myString));


//Count Characters: Create a function that counts the number of characters in a string.

function counter(str) {
    return str.length;
}
const myString = "Hello, World!";
console.log("Number of characters:", counter(myString));


//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.


function capitalizeWords(sentence) {
    
    const words = sentence.split(' ');

    
    for (let i = 0; i < words.length; i++) {
        
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    
    return words.join(' ');
}


const sentence = "hello word";
console.log(capitalizeWords(sentence));




//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.


function findMax(arr) {
    if (arr.length === 0) {
        return null; 
    }

    let max = arr[0];

    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }

    return max;
}

function findMin(arr) {
    if (arr.length === 0) {
        return null; 
    }

    let min = arr[0]; 

   
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; 
        }
    }

    return min;
}

// Example usage:
const numbers = [5, 2, 9, 1, 7];
console.log("The Max and Min is ", findMax(numbers) , findMin(numbers));


//Sum of Array: Create a function that calculates the sum of all elements in an array.

function sumArray(arr) {
    
    let sum = 0;
    
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
   
    return sum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log("Sum of array elements:", sumArray(numbers));



//Filter Array: Implement a function that filters out elements from an array based on a given condition.

const number = [1,2,3,4,5,6,7,8,9];
const newnumber = number.filter((el)=>el>5)
console.log(newnumber)



// Factorial: Write a function to calculate the factorial of a given number.

function factorial(n) {
    if (n > 0 && n <= 1) {
        return 1;
    }  
       else {return n * factorial (n-1);}
   }
   
   factorial(n)






// Prime Number Check: Create a function to check if a number is prime or not


function isPrime(num){
    if ( num <= 1 )
        return false ;
    for (let i = 2 ; i < num ; i++) { 
         if (num % i === 0 ) {return false ;}
    }
return true;

}

isPrime(5)




// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.


function fibonacci (n){
    let n1 = 0;
    let n2 = 1 ;
    let next;
    next = n1 + n2;
    const sequence = [];
    while ( next <= n) { 
        sequence.push(next);
        n1 = n2;
        n2 = next;
        next = n1 + n2 ;
    }
return sequence;


}
fibonacci (40);




