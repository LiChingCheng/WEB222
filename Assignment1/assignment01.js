
/********************************************************************************* 
* WEB22-Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of 
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: Li-Ching,Cheng  Student ID: 143292175  Date: 2018/09/20
* ********************************************************************************/

/********************
*Task1
********************/

var student_name="Li-Ching,Cheng";
var number_of_courses=6;
var program="CPD";
var part_time_job=false;

if(part_time_job==1)
  var a="have";
else
  var a = "don't have";
  

console.log("My name is "+ student_name + " and I'm in "+ program + 
            " program. I'm taking "+ number_of_courses + " courses in this semester and I "
           + a + " a part-time job now.");


/********************
*Task2
********************/

var year=2018;

var user_age=prompt("Please enter your age:");

var birth_age=year-user_age;

console.log("You were born in the year of " + birth_age + ".");

var study_year=Number(prompt("Enter the number of years you expect to study in the college:"));

console.log("You will graduate from Seneca college in the year of "+ (2018+study_year) + ".");


/********************
*Task3
********************/

var ceisius_temperature=28;

var fahrenheit=((ceisius_temperature)*9)/5+32;
console.log(ceisius_temperature + " °C is " + fahrenheit + " °F.");

var fahrenheit_temperature=100;

var ceisius=((fahrenheit_temperature)-32)*5/9;
console.log(fahrenheit_temperature + " °F is " + ceisius + " °C.");


/********************
*Task4
********************/

for(var i=0; i<11; i++){
  
  if (i%2==0){
    console.log( i + " is even.");
  }
   else if (i%2==1){
      console.log( i + " is odd.");
   }
}


/********************
*Task5
********************/

function largerNum(a,b)
{
  if (a>b){
    console.log("The larger number of " + a + " and " + b + " is " + a + ".");
  }
  else if (b>a){
   console.log("The larger number of " + a + " and " + b + " is " + b + ".");
  }
}

var greaterNum = function (a,b)
{
  if (a>b){
    console.log("The larger number of " + a + " and " + b + " is " + a + ".");
  }
  else if (b>a){
   console.log("The larger number of " + a + " and " + b + " is " + b + ".");
  }
};

largerNum(81,16);
largerNum(3,99);
greaterNum(8,97);
greaterNum(100,97);


/********************
*Task6
********************/

function Evaluator (){
  var sum=0;
  for(var i=0; i<arguments.length; i++){
    sum+=arguments[i]; 
  } 
  var average= sum/arguments.length;
  
  if(average>=50){
    return "ture";
  }
  else
    return "false";
}

console.log("Average grater then or equal to 50: " + Evaluator(34,84,56,27));
console.log("Average grater then or equal to 50: " + Evaluator(1,4,7,20));
console.log("Average grater then or equal to 50: " + Evaluator(28,73,3,2));


/********************
*Task7
********************/

var Grader = function (a){
  if (a>=90 && a<=100){
    return "A+";
  }
  if( a>=80 && a<=89){  
   return "A";
  }
    if( a>=75 && a<=79){  
   return "B+";
  }
    if( a>=70 && a<=74){  
   return "B";
  }
    if( a>=65 && a<=69){  
   return "C+";
  }
    if( a>=60 && a<=64){  
   return "C";
  }
    if( a>=55 && a<=59){  
   return "D+";
  }
    if( a>=50 && a<=54){  
   return "D";
  }
    if( a>=0 && a<=49){  
   return "F";
  } 
}

console.log(Grader(100));
console.log(Grader(68));
console.log(Grader(32));


/********************
*Task8
********************/

function showMultiples(num,numMultiples){
  for(var i=0; i<numMultiples; i++){
    console.log(num + " x " + (i+1) + " = " + (num*(i+1)));
  }
}

showMultiples(8,12);
showMultiples(17,4);
showMultiples(20,10);