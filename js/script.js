var name = "Jaber JaBed";
name = "JaBed";
document.write(name);

var number = 20;

num = toString(number);
console.log(typeof(num));

var number = "20";

num = parseInt(number);
console.log(typeof(num));

var number = 20.567;

num = parseFloat(number);
console.log(typeof(num));

var number = 2.56789;

// console.log(number.toFixed(1)); //it's use for how much number shown after .point
// console.log(number.toPrecision(3)); // it's use for total how much digit to shown

// console.log(Number("12"));
// console.log(Number("12.5"));
// console.log(Number(true));
// console.log(Number(false));

document.write("<br>JaBer " + "JaBed<br>");

var firstName = "Omar Jafor ";
var lastName = " Chowdhury Jaber <br>";

var fullName = firstName + lastName;
document.write(fullName);

var fullName = "Omar Jafor Chy Jaber";
document.write("My Full Name is " + fullName);

var num1, num2;
num1 = 20;
num2 = 30;

document.write("<br>Number 1 is = " + num1 + "<br>Number 2 is = " + num2);

var text = "Bangladesh";
// var text = prompt("Enter Your Text To Know Length: ");

// document.write("<br>Number of character: " + text.length);

text = text.charAt(2);
document.write("<br>"+text);

text = text.toUpperCase();
document.write("<br>"+text);

text = text.toLowerCase();
document.write("<br>"+text);

var text1 = "Bangladesh";
var text2 = " is a beautiful country";
var text = text1.concat(text2);
document.write("<br>"+text);

var text1 = "Bangladesh";
var text = text1.slice(2, 6);
document.write("<br>"+text);

// Task Number Two
// var firstName = prompt("Enter Your First Name: ");
// var lastName = prompt("Enter Your last Name: ");
// var fullName = firstName + lastName;
// document.write("<br>"+fullName);
// document.write("<br>"+fullName.length);
// document.write("<br>"+fullName.toUpperCase());
// document.write("<br>"+fullName.charAt(2));

// Task Number Three
// var num1 = prompt("Enter First Number :");
// var num2 = prompt("Enter Second Number :");

// num1 = parseInt(num1);
// num2 = parseInt(num2);

// document.write("Entered First Number is =" + num1);
// document.write("<br>Entered Secound Number is =" + num2 + "<br>");

// sum = num1 + num2;
// document.write("<br>" + num1 + " + " + num2 + " = " + sum);

// sub = num1 - num2;
// document.write("<br>" + num1 + " - " + num2 + " = " + sub);

// mul = num1 * num2;
// document.write("<br>" + num1 + " * " + num2 + " = " + mul);

// div = num1 / num2;
// document.write("<br>" + num1 + " / " + num2 + " = " + div);

// mod = num1 % num2;
// document.write("<br>" + num1 + " % " + num2 + " = " + mod);

//New program code---------------->

// var num1 = prompt("Enter Base :");
// var num2 = prompt("Enter Height :");

// var area = num1 * num2;
// document.write("Area = " + area);

// var triangle = (num1 * num2) / 2;
// document.write("<br>Triangle = " + triangle);

//New program code Fahrenheit To Celsius---------------->

// var farn = prompt("Enter Fahrenheit :");

// var cels = (farn-32) * (5/9);
// document.write("Celsius is = " + cels);

//New program code Fahrenheit To Celsius---------------->

// var cels = prompt("Enter Celsius :");

// var farn = (cels * 9/5) + 32;
// document.write("Farenheit is = " + farn);

//New program code ---------------->
var num = 5;

if(num%2 == 0)
    document.write("<br>Even");
else
    document.write("<br>Odd");

//New program code ---------------->
// var num = prompt("Enter a number");
// num = parseInt(num);

// if(num > 0)
//     document.write("<br>Positive");
// else if(num < 0)
//     document.write("<br>Negative");
// else
//     document.write("<br>Zero");

//Task Number Four code for student grade mark -------->
// var num = prompt("Enter your mark number: ");
// num = parseInt(num);

// if(num > 100 || num < 0)
//     document.write("Invalid Number");
// else if(num >= 80 && num <= 100)
//     document.write("A+");
// else if(num >= 70 && num <= 79)
//     document.write("A");
// else if(num >= 60 && num <= 69)
//     document.write("A-");
// else if(num >= 50 && num <= 59)
//     document.write("B");
// else if(num >= 40 && num <= 49)
//     document.write("C");
// else if(num >= 33 && num <= 39)
//     document.write("D");
// else
//     document.write("Fail");
document.write("<br>");

//New Program code for finding large number -------->
// var num1 = prompt("Enter your number 1: ");
// var num2 = prompt("Enter your number 2: ");
// var num3 = prompt("Enter your number 3: ");

// if(num1>num2 && num1>num3)
//     document.write("<br> Large Number is = " + num1);
// else if(num2>num1 && num2>num3)
//     document.write("<br> Large Number is = " + num2);
// else
//     document.write("<br> Large Number is = " + num3);
document.write("<br>");

//New Program code for finding vowel or consonant -------->

// var letter = prompt("Enter Your Letter : ");
// letter = letter.toLowerCase();

// if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
//     document.write("Vowel");
// else
//     document.write("Consonant");

//New Program code for number spelling -------->

// var digit = prompt("Enter Your Number : ");

// switch (digit){
//     case "0":
//         document.write("Zero");
//         break;
//     case "1":
//         document.write("One");
//         break;
//     case "2":
//         document.write("Two");
//         break;
//     case "3":
//         document.write("Three");
//         break;
//     case "4":
//         document.write("Four");
//         break;
//     case "5":
//         document.write("Five");
//         break;
//     case "6":
//         document.write("Six");
//         break;
//     case "7":
//         document.write("Seven");
//         break;
//     case "8":
//         document.write("Eight");
//         break;
//     case "9":
//         document.write("Nine");
//         break;
//     case "10":
//             document.write("Ten");
//             break;
//     default:
//         document.write("Not a Digit");
// }

//Task Number Five code for finding vowel or consonant using switch -------->
// var letter = prompt("Enter Your Letter : ");
// letter = letter.toLowerCase();

// switch (letter){
//     case "a":
//         document.write("Vowel");
//         break;
//     case "e":
//         document.write("Vowel");
//         break;
//     case "i":
//         document.write("Vowel");
//         break;
//     case "o":
//         document.write("Vowel");
//         break;
//     case "u":
//         document.write("Vowel");
//         break;
//     default:
//         document.write("Not a Vowel, it's Consonant");
// }

//Task Number Five code for finding vowel or consonant using switch 2-------->
// var letter = prompt("Enter Your Letter : ");
// letter = letter.toLowerCase();

// switch (letter){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         document.write("Vowel");
//         break;
//     default:
//         document.write("Not a Vowel, it's Consonant");
// }

// New Program Code using For Loop ------------->
// for(x=1; x<=100; x=x+1){
//     document.write(x + " ")
// }
// document.write("Loop End <br><br>");

// for(x=1; x<=100; x=x+2){
//     document.write(x + " ")
// }
// document.write("Loop End <br><br>");

// for(x=2; x<=100; x=x+2){
//     document.write(x + " ")
// }
// document.write("Loop End <br><br>");

// for(x=10; x>=1; x=x-1){
//     document.write(x + " ")
// }
// document.write("Loop End <br><br>");

// New Program Code using For Loop ------------->
// var sum = 0;
// for(x=1; x<=5; x++){
//         sum = sum + x;
//     }
//     document.write(sum)


// var m = parseInt(prompt("Enter Your First Number : "));
// var n = parseInt(prompt("Enter Your Secound Number : "));
// var sum = 0;
//     for(x=m; x<=n; x++){
//             sum = sum + x;
//         }
//         document.write(sum)


// for(x=1; x<=5; x++){
//     var num1 = parseInt(prompt("Enter Your First Number : "));
//     var num2 = parseInt(prompt("Enter Your Secound Number : "));
//     var sum = num1+num2;
//     console.log("Result = "+sum);
// }

// New Program Code using while Loop ------------->
// var i = 1;
// while (i<=100){
//     document.write(" "+i);
//     i++;
// }


// var i = 1;
// var sum = 0;

// while (i<=5){
//     sum = sum + i;
//     i++;
// }
// document.write("<br>Result is = "+ sum);

// var i = 1;
// var sum = 0;
// while (i<=100){
//     sum = sum + i;
//     i = i + 2;
// }
// document.write("<br>Result For Odd= "+ sum);

// var i = 2;
// var sum = 0;
// while (i<=100){
//     sum = sum + i;
//     i = i + 2;
// }
// document.write("<br>Result For Even = "+ sum);

//Task Number Six code for find sum of number of division 3 & 5 from 1 to 100-------->
// var i = 1;
// var sum = 0;
// while (i<=100){
//     if(i%3==0 && i%5==0){
//         document.write("<br> "+i);
//         sum = sum + i;
//     }
//     i = i + 1;
// }
// document.write("<br>Result For %3 & %5 = "+ sum);

// Task Number Six doing using switch only...............>
// var i = 1;
// var sum = 0;
// while (i<=100){
//     switch(i<=100){
//         case (i%3==0 && i%5==0):
//             document.write("<br> "+i);
//             sum = sum + i;
//     }
//     i = i + 1;
// }
// document.write("<br>Result For %3 & %5 = "+ sum);

// New Program Code using do while Loop ------------->
// Using For Loop
// for (i=1; i<=10; i++){
//     document.write("<br>Result = "+i);
// }

// document.write("<br><br>");

// Using While Loop
// var i=0;
// while(i<=10){
//     document.write("<br>Result = "+i);
//     i++;
// }

// document.write("<br><br>");

// Using Do While Loop
// var i=0;
// do{
//     document.write("<br>Result = "+i);
//     i++;
// }while(i<=10);

// document.write("<br><br>");

// New Program Code using break and continue ------------->
// Using break 
// for (i=1; i<=100; i++){
//     if(i==10){
//         break;
//     }
//     document.write(" " + i);
// }
// document.write("<br><br>");

// Using continue
// for (i=1; i<=20; i++){
//     if(i==10){
//         continue;
//     }
//     document.write(" " + i);
// }
// document.write("<br><br>");

// Using continue Code No:-2
// for (i=1; i<=100; i++){
//     if(i%2 == 0){
//         continue;
//     }
//     document.write(" " + i);
// }
// document.write("<br><br>");

// Using continue Code No:-3
// for (i=1; i<=100; i++){
//     if(i%2 != 0){
//         continue;
//     }
//     document.write(" " + i);
// }
// document.write("<br><br>");

// New Program Code Using Ternary Operator ------------->

// var num = prompt("Enter Your Number : ");

// if(num > 0){
//     document.write("Positive");
// }else if( num < 0){
//     document.write("Negative");
// }else{
//     document.write("Zero")
// }
// document.write("<br><br>");

// var result = num > 0 ? "Positive" : "Negative"
// document.write(result);
// document.write("<br><br>");

// result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"
// document.write(result);
// document.write("<br><br>");

// New Program Code Using Ternary Operator Find large number------------->
// var num = prompt("Enter Your Number 1 : ");
// var num1 = prompt("Enter Your Number 2 : ");
// var num2 = prompt("Enter Your Number 3 : ");

// if(num > num1 && num > num2){
//     document.write("Large Number is : " + num);
// }else if( num1 > num2 && num1 > num){
//     document.write("Large Number is : " + num1);
// }else{
//     document.write("Large Number is : " + num2);
// }

// result = num > num1 && num > num2 ? "Large number is: "+num : num1 > num2 && num1 > num ? "Large number is: "+num1 : "Large number is: "+num2
// document.write(result);

// New Program Code For Creating Function---------------------------->
// sample for multification we use earlier
var num = 5;
var result = num * num;
document.write("Result = " + result);

// Creating a function for mulification
function sqaure(num){
    var result = num * num;
    document.write("<br>Result = " + result);
}
sqaure(8);

// Creating a function for multifly 2 perameter
var num1 = 0;
var num2 = 0;
function sqaure2(num1, num2){
    var result = num1 * num2;
    document.write("<br>Result = " + result);
}
sqaure2(2,5);

// Creating a function for multifly 2 perameter and return result
function sqaure3(num1, num2){
    var result = num1 * num2;
    return result;
}
document.write("<br>Result = " + sqaure3(6,5));

// Creating a function make Additon of two number
var num1, num2;
function addition(num1, num2){
    var result = num1 + num2;
    document.write("<br>Result of Addition = " + result);
}
addition(546,59);

// Creating a function make subtraction of two number
var num1, num2;
function sub(num1, num2){
    var result = num1 - num2;
    document.write("<br>Result of subtraction = " + result);
}
sub(505,354);

// Creating a function make Division of two number
var num1, num2;
function division(num1, num2){
    var result = num1 / num2;
    document.write("<br>Result of Division = " + result);
}
division(55,5);

// Creating a function make modulous of two number
var num1, num2;
function modulous(num1, num2){
    var result = num1 % num2;
    document.write("<br>Result of Modulous = " + result);
}
modulous(18,5);

document.write("<br><br>");
// New Program Code For Creating Imidiate Function---------------------------->
//IIFEs (Immediately Invokeable Function Expresions)

(function word(){
    document.write("<br> Hello World");
})();

(function word(msg){
    document.write("<br> "+ msg);
})("Hello My New World");

// Task Number :- 07 Code For Creating 2 Number sum with IIFE------------->
(function add(num1,num2){
    result = num1 + num2;
    document.write("<br> Addition is = "+ result);
})(10,20);

document.write("<br><br>");
// New Program Code For Creating Function Expression---------------------------->
var display2 = function display(){
    document.write("<br>Hello This is my Message");
}
display2();

var display3 = function display(msg){
    document.write("<br> Your message = "+ msg);
}
display3("I am Omar Jafor, it's new");
document.write("<br>");
display2();
display3("Writing new message for you");
document.write("<br><br>");

// New Program Code For Creating Array---------------------------->
var names = new Array(6);
names[0] = "Abul";
names[1] = "Kalam";
names[2] = "Jamal";
names[3] = "Rohim";
names[4] = "Pagol";
names[5] = "Chagol";

console.log("Array Length is = "+names.length); //using for finding array length
// console.log(names);
// console.log(names[3]);

var country1 =["Bangladesh", "India", "Pakistan"];
var country2 =["Japan", "Chaina", "Rusia"];
country1.push("Nepal","Maldives"); //adding an array in the last
country2.push("Mayanmar");
// console.log(country1);
// console.log(country2);
country1.pop(); // deleting an array in the last
country2.pop();
// console.log(country1);
// console.log(country2);
country1.shift(); // opposite of pop
country2.unshift("Jabed"); // opposite of push
// console.log(country1);
// console.log(country2);

// New Program Code For Creating Loop in Array---------------------------->
// Printing Array Number
// var num = [10, 20, 30, 40, 50];
// for(i=0; i<5; i++){
//     console.log(num[i]);
// }
// Finding sum of all array number
var sum = 0;
for(i=0; i<5; i++){
    sum = sum + num[i];
}
console.log("Sum = "+ sum);

// Taking number from a user
// var num = new Array();
// for(i=0; i<5; i++){
//     num[i] = parseInt(prompt("Enter Your Number = "));
//     console.log(num[i]);
// }

var sum = 0;
for(i=0; i<5; i++){
    sum = sum + num[i];
}
console.log("Sum = "+ sum);

// New Program Code For Creating Array Library Method---------------------------->
country1.splice(2,0,"Newzilan", "Thailand"); // Adding Elements using splice or remove an array
// console.log(country1);
// country1.splice(3,1);
// console.log(country1);
// slice or remove an array
var newArray = country1.slice(2);
// console.log(newArray);
// console.log(country1); // here main array not changed by slice
// Sorting String or name
country1.sort();
// console.log(country1);

// Sorting number
// var nums = [10, 5, 15, 9, 2];
// console.log(nums.sort());

// var nums1 = [12, 1, 15, 9, 3, 6];
// console.log(nums1.sort(function(a,b){
//     return a-b;
// }));


// New Program Code For 1D- One dimensional Array ---------------------------->
// var names = ["Kabir", "Arjun", "Mahi", "Kanika", "Putul", "Anika"];
// for(i=0; i<names.length; i++){
//     console.log(names[i]);
// }

// Task Number :- 08
// Finding max number from an array by function
function highestScore(scores){
    var max = scores[0];
    for(i=1; i<scores.length; i++){
        if(max < scores[i]){
            max = scores[i];
        }
    }
    return max; 
}
var scores = [10, 95, 49, 64, 98, 48];
var maxScore = highestScore(scores);
console.log("Highest Score is = "+ maxScore);


// New Program Code For 2D- Two dimensional Array ---------------------------->
// var names = [
//     ["Kabir", 95],
//     ["Arjun", 45],
//     ["Mahi", 65],
//     ["Kanika", 70],
//     ["Putul", 105],
//     ["Anika", 17]
// ];

// for(i=0; i<names.length; i++){
//     for(var n=0; n<2; n++){
//         console.log(names[i][n]);
//     }
// }

// Task Number :- 09
// Finding highest Scorer Name from 2D Array ----------------------------->
var playersInfo = [
    ["Kabir", 95],
    ["Arjun", 145],
    ["Mahi", 65],
    ["Kanika", 70],
    ["Putul", 15],
    ["Anika", 17]
];
function highestRunScorer(playersInfo){
    var highestScorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];
    for(x=1; x<playersInfo.length; x++){
        if(highestScore < playersInfo[x][1]){
            highestScore = playersInfo[x][1];
            highestScorer = playersInfo[x][0];
        }
    }
    return highestScorer;
}
console.log(highestRunScorer(playersInfo));

// New Program Code For Create Object---------------------------->
// Varibale VS Object
var name = "Kabir";
var age = 24;
var cgpa = 3.25;
var fname = "Karim";
// This is how an object help us to create multi variable in a simple object
var student = {
    name: "Kabir",
    age: 24,
    cgpa: 3.25,
    fname: "Karim",
}
// Print the value from an object
console.log(student);
console.log(student.name);
// Adding a constructor for an object
function Students(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
}
var student1 = new Students("Kabir Khan", 26, 3.96, ["Bangla", "Hindi", "English"]);
console.log(student1);
console.log(student1.name);
console.log(student1.lang);

// Adding a function for multiple object identify
function Student(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
    //Creating function in constractor
    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }    
}
var student2 = new Student("Kabir Hossain", 28, 4.92, ["Bangla", "Nepali", "English"]);
var student3 = new Student("Jaber Islam", 25, 5.00, ["Bangla", "Germany", "English"]);
var student4 = new Student("Arif Ahmed", 29, 3.80, ["Bangla", "Spain", "English"]);

student2.display();
student3.display();
student4.display();

console.log(student2.lang);
// New Program Code For Math Object---------------------------->
// Findin Maximum number by Math Object
// var num1 = parseInt(prompt("Enter Your 1st Number: "));
// var num2 = parseInt(prompt("Enter Your 2nd Number: "));

var max = Math.max(num1, num2);
document.write("Maximum Number is = " + max);
// Guessing Game Using Math Object ---------------->
