// Find the culprit

/*
<!DOCTYPE html>
<html>
<body>

 Whats the error in this ?

 <script>
 alert( "I’m JavaScript!’");
 </script>

</body>
</html>
*/
// <------------------------------------------------------->

// Explain the below how it works

// alert("I'm JavaScript!");
// alert('Hello');
// alert(`Wor
//  ld`);
//  alert(3 +
//     1
//     + 2);

// Output: 
// I'm JavaScript!
// Hello
// Work
// ld

// <------------------------------------------------------->

// Fix the below to alert Guvi geek

    let admin=9, fname=10.5; 
    fname = "Guvi";
    lname = "geek"
    admin = `"${fname} ${lname}"`
    // alert(admin); 
    // output : "Guvi geek"

// <------------------------------------------------------->
// Fix the below to alert hello Guvi geek

    // let fname=10.5; 
    // fname = "Guvi";
    // lname = "geek"
    // let name = `${fname} ${lname}`;
    // alert( `hello ${name}`);

    // output : hello guvi geek
// <------------------------------------------------------
// Fix the below to alert sum of two numbers

// let a = parseInt(prompt("First number?")); 5
// let b = parseInt(prompt("Second number?"));5
// alert(a+b)

// output : 10
// <------------------------------------------------------
// If you run the below scritpt you will get “Code is Blasted”
// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

// var a = "2" < "12"; <==== here make false condition
// console.log(a);  // false
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }

// output : Diffused
// <------------------------------------------------------>
// How to get the correct score in console.

// let value = parseInt(prompt('How many runs you scored in this ball 4 or 6'))
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }
// <------------------------------------------------------>
// Fix the code to welcome the Employee

// let login = 'Employee';
// let message = (login == 'Employee') ? 'Greetings' :'No login';

// console.log(message);  o/p : Greetings
// <------------------------------------------------------>
// Fix the code to welcome the boss

// let message;
// if (null || 2 || undefined )
// {
//   message = "welcome boss";
// }
// else
// {
//  message = "Go away";
// }
//   console.log(message); o/p: welcome boss
// <------------------------------------------------------>
// Fix the code to welcome the boss

// let message;
// let lock=2;
// lock=0; here value reassigned

// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message); welcome


// let message;
// let lock = 2;
// lock=0;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);

// <------------------------------------------------------>
// Change the code to print 
// 3
// 2
// 1

// let i = 3;
// while (i) {
//   console.log( i-- );
// }

// o/p: 3,2 ,1
// <------------------------------------------------------>
// Change the code to print 1 to 10 in 4 lines

// for(let num=1;num<=10;num++){
//     console.log(num);

// }

// ------------------------------------------------------------

// Change the code to print even numbers
//You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 2) {
//     console.log(num)
//   }

// ------------------------------------------------------------>
// Change the code to print all the gifts

// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < gifts.length; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`);
// }
// ------------------------------------------------------------>
// Fix the code to disarm the bomb.

// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
//   else{
//     console.log('Bomb disarm');
//   }
// }

// ------------------------------------------------------------>
// Whats the msg printed and why?

// var lemein='0';
// var lemeout=0;
// var msg='';
// if(lemein){
//     msg+='Hi'

// }
// if(lemeout){
//     msg+='Hello'

// }
//   console.log(msg);
//   output : Hi -> Because of first loop got true so its executed first.