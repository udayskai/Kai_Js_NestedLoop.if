"use strict";


let marks=34;
let message=undefined;

if((marks>=0)
     &&
   (marks<=100)
   ) 

   {
    if (marks >= 35 && marks < 49) {
        message = "Pass ";
    }
    else if (marks >= 50 && marks < 60) {
        message = "Second Class";
    }
    else if (marks >= 60 && marks < 75) {
        message = "First Class";
    }
    else if (marks >= 75 && marks <= 100) {
        message = "Distinction";
    }
    else{
          message='fail';
    }

   }

else
      ("Enter number between 0 & 100");
       {  console.log(message); 
     }







