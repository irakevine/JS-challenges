
//     26 Javascript Challenges for beginners
//     --------------

// 1.  Print numbers from 1 to 1000 ********
// let i= 0
//     for(i=0; i<= 1000; i++)
//     return i



// 2.  Print the odd numbers less than 100 ** ********

// if(n%2==1){
//     return n < 100
// }

// 3.  Print the multiplication table with 7 **********


// if(let i=0, i < 12, i++){
//     let p = 0
//     let p = i* 7
// }
// return p

// 4.  Print all the multiplication tables with numbers from 1 to 10 ********

// for(let i= 0; i<= 10; i++){
//     for(let n= 0; n<= 10; n++){  
//         let p = 0
//         p = i*n
// }

// }
// return p
// 5.  Calculate the sum of numbers from 1 to 10 ********

// let s = 0

// for (let i= 1; i<= 10; i++ ){
//    s += i
// }
// console.log(s)
// 6.  Calculate 10! ********

// 7.  Calculate the sum of even numbers greater than 10 and less than 30 ********



// 8.  Create a function that will convert from Celsius to Fahrenheit ********

// 9.  Create a function that will convert from Fahrenheit to Celsius ********

// 10. Calculate the sum of numbers in an array of numbers ********

// -------------Kevine stop here-----------------

// 11. Calculate the average of the numbers in an array of numbers **********

// 12. Create a function that receives an array of numbers as argument and returns an
//     array containing only the positive numbers ********

// 13. Find the maximum number in an array of numbers !!!!!

// 14. Print the first 10 Fibonacci numbers without recursion !!!!!

// 15. Create a function that will find the nth Fibonacci number using recursion !!!!!

// 16. Create a function that will return a Boolean specifying if a number is prime !!!!!

// 17. Calculate the sum of digits of a positive integer number ********

// 18. Print the first 100 prime numbers !!!!!

// 19. Create a function that will return in an array the first “p” prime numbers
//     greater than “n” !!!!!

// 20. Rotate an array to the left 1 position

// 21. Rotate an array to the right 1 position

// 22. Reverse an array ********

// 23. Reverse a string **********

// 24. Create a function that will merge two arrays and return the result as a new
//     array ********

// 25. Create a function that will receive two arrays of numbers as arguments and
// return an array composed of all the numbers that are either in the first array
// or second array but not in both ********

// 26. Create a function that will receive two arrays and will return an array with
// elements that are in the first array but not in the second **********





    // console.log("1. numbers from one to ten")
    // let num=0;
    // for (let num = 0; num <= 10; num++) {
    //     console.log(num)
    // }


    // console.log("------------------")
    // console.log("2. odd numbers less than 100");
    // let mynum=0;
    // for (let mynum = 1 ; mynum < 100; mynum++) {
    //      let z = mynum % 2
    //     if ( z == 0) {
    //         console.log(mynum)
    //     }
    // }
    // for (let mynum = 1 ; mynum < 100; mynum ++) {
    //      let z = mynum % 2
    //     if ( z == 0) {
    //         console.log(mynum)
    //     }
    // }

    

    


    // console.log("------------------")
    // console.log("3. multiplication table of 7");
    // for (let index = 1; index < 12; index++){
    //     let total=0;
    //     total = index * 7;
    //     console.log(total)
    // }


    // console.log("------------------")
    // console.log("4. the multiplication tables with numbers from 1 to 10");
    // for (let  first= 1;  first<=10 ; first++) {
    //     for (let second = 1; second <= 10; second++) {
    //         let mytotal=0;
    //         mytotal = first * second;
    //         console.log(`${first} times ${second} = ${mytotal}`)
    //     } 
    // }


    // console.log("------------------")
    // console.log("5. sum of numbers from one to ten");
    // let mytotal=0;
    // for (let index = 1 ; index <= 10; index++) {
    //     mytotal +=index
    // }
    // console.log( mytotal)


    // console.log("------------------")
    // console.log("6. calculating the factorial");
    // let myfact=10;
    // let myfacttotal=1;
    // let mynew=1;
    // for (let myfact=10; myfact >(myfact-1); myfact--) {
    //   if (myfact != 1) {
    //      myfacttotal=myfact*(myfact-1)
    //   }
    //     if (myfact!= 1 ) {
    //         mynew = myfacttotal * mynew
          
    //     }
    //     myfact=myfact-1
    //     if(myfact==1){
    //         break
    //     }
    // }
    // console.log(mynew)


    // console.log("------------------")
    // console.log("7.sum of even numbers greater than 10 and less than 30");
    // let total=0;
    // for (let index = 11; index < 30 ; index++) {
    //     if (index % 2== 0) {
    //         console.log(index)
    //         total+= index
    //     }
    // }
    // console.log("The total sum is")
    // console.log(total);


    // console.log("------------------")
    // console.log("8. Create a function that will convert from Fahrenheit to celcius");
    // // the formula is ((f-32)*5)/9
    // let Fahrenheit=243
    // const myconve = (Fahrenheit) => {
    //     let celcius = ((Fahrenheit-32)*5)/9
    //     console.log(celcius)
    // }
    // myconve(Fahrenheit)



    // console.log("------------------")
    // console.log("10. Calculate the sum of numbers in an array of numbers");
    // let myarr=[12,23,34,45,45,54]
    // total=0
    // myarr.forEach(arr => {
    //     total+= arr
    // });
    // console.log(total)


    // console.log("------------------")
    // console.log("11. Calculate the average of the numbers in an array of numbers");
    // let myarrs=[12,23,34,45,45,54]
    // total=0
    // myarrs.forEach(arrs => {
    //     total+= arrs
    // });
    // let average = total/myarrs.length
    // console.log(average) 


    // console.log("------------------")
    // console.log("12.function that receives an array of numbers as argument and returns an array containing only the positive numbers");
    // let numbers=[-67,34,-23,13,-22,34,-12,-18];
    // const func = (numbers) =>{
    //     numbers.forEach( num => {
    //         if (num > 0 ) {
    //             console.log(num)
    //         }
    //     });
    // }
    // func(numbers)


    // console.log("------------------")
    // console.log("13. the maximum number in an array of numbers")
    // let numbe=[-67,34,-23,13,-22,34,-12,-18];
    // const functt = (numbe) =>{
    //    for (let index = 0; index < numbe.length; index++) {
    //        if(numbe[index]== numbe[index]){
    //            numbe.forEach(n => {
    //                if (n>=numbe[index+1]) {
    //                    max=n
    //                }
    //            });
    //        }
    //    }
    //    console.log(max)
    // }
    // functt(numbe);


    // console.log("------------------")
    // console.log("17.the sum of digits of a positive integer number")
    // let numb="123";
    // mynumb=numb.split("")
    // let tot=0;
    // mynumb.forEach(x => {
    //     tot += (x)*1;
    // });
    // console.log(tot);


    // console.log("------------------")
    // console.log("22.reverse an array")
    // let rev=[23,56,78,89,34]
    // change=rev.toString().split(",").reverse()
    // console.log(change)

    // console.log("------------------")
    // console.log("23.reverse a string")
    // let stri="Lary"
    // change=stri.split("").reverse()
    // console.log(change)

    // console.log("------------------")
    // console.log("24.merging two arrays")
    // let one=["The","work","wasn't"]
    // let two=[" that","hard"]
    // const conca =() =>{
    //     let result;
    //     result=one + two
    //     let final
    //     final=result.split(",")
    //     console.log(final)
    // }
    // conca();


    // console.log("------------------")
    // console.log("number 25")
    // let three=[11,12,13,14,15]
    // let four=[21,22,23,24,25]
    // const five =(three,four) =>{
    //     let six= four
    //     console.log(six)
    // }
    // five(three,four)


    // console.log("------------------")
    // console.log("number 26")
    // let firstarray=[0,2,3,4,5]
    // let secondarray=[21,22,23,24,25]
    // const display =(firstarray,secondarray) =>{
    //     let myresult= firstarray
    //     console.log(myresult)
    // }
    // display(firstarray,secondarray)
    
    // console.log("------------------")
    // console.log("higher number in an array");
    // const myarray=[10,2,100,-1,900,20,56,134];
    // const newarray=[];
    // for(let i=0;i<myarray.length;i++){
    //     for(let l=0;l<myarray.length;l++){
    //         if(myarray[i]>myarray[l]){
    //             one=myarray[i];
    //             myarray[i]=myarray[l];
    //             myarray[l]=one;
    //         }
    //     }   
    // }  
    // console.log(myarray); 
    
    // console.log("Filtering out negative numbers")
    // function filtering(myarray){
     //     for(let i=0;i<myarray.length;i++){
    //         if(myarray[i]<0){
    //             myarray.splice(i,1);
    //             i-=1;
    //         }
    //     }
    //     console.log(myarray)
    // }
    // let thisarray=[3,79,-1,-20,-90,900,100];
    // filtering(thisarray);

    // console.log("Remove the space in a string");
    // var first_array;
    // function mystring(now){
    //    first_array=now.split(" ").join("");
    //    console.log(first_array);
    // }
    // let mystrings="Fran k";
    // mystring(mystrings);

    // console.log("Returning number of vowels in a string");
    // let count=0;
    // function myvowels(str){
    //     let vowels=['a','i','u','o','e'];
    //     let newarray=str.split("");
    //     for(let i=0;i<newarray.length;i++){
    //     if(vowels.includes(newarray[i])){
    //         count+=1;
    //     }
    //     }
    //     console.log(count);
    // }
    // myvowels("frankee")

    // console.log("It's an include check")
    // let myusers=["frnk","deborah","francis","fofo"];
    // myusers.forEach(myuser => {
        // if(myusers.toLowerCase().includes("frnk")){
        //     console.log("hiii") -->
        // }
    //});
    



