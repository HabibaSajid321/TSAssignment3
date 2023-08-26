// Question 1
// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

function myfunc(array:number[], index:number, value:number){
    array.splice(index,0,value);
    return array

}
let originalArray = [1,3,2]
let modifiedArray = myfunc(originalArray,3,4);
console.log(modifiedArray);







/*  Question 2

 * - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
 */
                    //  add items to cart

 let cart :string[] = ["bread","cheez","oil"];
 
 
 function cartItems(array:string[], index:number , value:string){
    array.splice(index,0,value)
    return array;

 }

 let addItemToCart:string[] =cartItems(cart,cart.length, "eggs" );
 
 console.log(addItemToCart);



                                // remove items from cart
                                
function toRemove(array:string[], index:number, indextoRemove:number){

    array.splice(index,indextoRemove)
return array;
}            

let removeItems = toRemove(cart, 0 , 2);
console.log(removeItems)

                             
                            //   to update items
let newCart:string[] = ["pizza", "burger", "pratha"]
function toUpdateItems(array:string[], index:number,indextoRemove:number, ValuetoUpdate: string ){
array.splice(index,indextoRemove,ValuetoUpdate);
return array;
}                            

let updatedCart = toUpdateItems(newCart,0, 1, "jam")
console.log(updatedCart);



// Question 3
//  Write a program that uses a while loop to print the first 25 integers.

let integers:number = 0;
while(integers<=25){
    console.log(integers);
integers++
}

// Question 4 
// Write a program that uses a while loop to print the first 10 even numbers.

let num:number = 2;
while(num<21){
console.log(num);
 num+=2
}



// Question 5
// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.


function returnFactorial(myNum:number){
if(myNum<0 ){
    console.log("the given number is negative")

}

else{
    let factorial:number = 1;
    let currentNumber:number = myNum;

    while(currentNumber>0){
        factorial *= currentNumber;
        currentNumber--;

    }
return factorial;    
}

}
let factorialResult = returnFactorial(6);
console.log(factorialResult)




// Question no 6
//  - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
let i:number = 0;
let myArr: number[] = [1,2,4,-8, 9, 0 ,-3, 22] 
while(i < myArr.length){
    if(myArr[i]< 0){
        myArr.splice(i,1)
    }
    else{
        i++
    }
   
}
console.log(myArr);



// Question no 7
// - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
function sumOfArray(array:number[]):number{
    let sumOfNumbers = 0;
    let i = 0;
    while(i<array.length){
        sumOfNumbers +=array[i]
        i++;
    }

    return sumOfNumbers;

}

let array1:number[] = [0,1,24,5,6,8];
let arraySum = sumOfArray(array1)
console.log(arraySum);
