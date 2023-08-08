//Q1. write a function which dispaly addition of two numbers

 let s = 0
  const addition = function myAdd(i,p){
  s = i + p
  return s
 } 

 console.log(addition(2,8));

///////////////////////////////////////
//Q2. write a function which takes two values and return the biggest number

 const biggNbr= function bigg(a,b){
 if(a < b ){
     return a 
 }
    return b
 }
 console.log(biggNbr(4,80))



// Q3. write a function which is greather than to 5

 let i = 5; 
    function gret(n){
 if(n > i ){
     console.log(n) 
 }
        
     }
    gret(0)


// Q4. Write a function which adds two numbers and check if the sum of those numbers is greater than 20
let n= 0
let p=20
function sum(a,b){
    n = a+b
    if(n > p){
    console.log(n)
    }
 }
sum(5,17)

// Q5. write function which test if a number is greater than 5 and less than to 10
let i= 5
let p= 10
 function comp(n){
    if( n>i && n<10 ){
        console.log(n);
    }
 }
 comp(90)

//////////////////////////////////////
// Q6. Write a function which test the grade of a student in a certain subject. It displays ‘Fail’ if he is less than 49% and excellent if he is above or has 50%.

 function grade(PH){
     if(PH <= 49){
 console.log('fail'); 
    }else if(PH >= 50){
 console.log('excellent'); 
     }
 }
 grade(49)

//Q7. write a function which displays numbers from 1 to 10 
let i= 0;
function num(){
 for(let n = 1; n <= 10; n++){
   i = n
   console.log(i)
 }
 }
num()
////////////////////////////////////////////////////////////////////////////

// write function which display even numbers from 1 to 20
let n=0;
function evn(){
for(let i = 1; i<= 20; i++){
    n=i
    if(n %2== 0){

    console.log(n);
}
    }
}
evn()
