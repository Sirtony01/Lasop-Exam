// 1


function randomIntFromInterval(min,max) {
return Math.floor(Math.random() * (max - min + 1) + min)
}

const exam = randomIntFromInterval(0, 255)
console.log (exam)


     //2

const year = new Date ();
year.getFullYear ();

const month = new Date ();
month.getMonth ();

const date = new Date ();
date.getDate ();

const day = new Date ();
day.getDay ();

const hour = new Date ();
hour.getHours ();

const minute = new Date ();
minute.getMinutes ();

const back = new Date ();
back.getMilliseconds ();

     //3

     var birth = prompt ("Please input your Birth Year")
     var now = new Date()
     var age = now.getFullYear() - birth 

     if(age<18)
      console.log("Wait till you get to 18")
      else  if (age>=18 )
       console.log("You are drived in to this page")

       //4

     var today = new Date();
     console.log(date.toLocaleDateString());
     console.log(date.toDateString());
     console.log(date.toGMTString());
 
     //5

     var birth = prompt ("Enter Your Age")
      

     if(birth<18)
      console.log("Wait till you get to 18")
      else  if (birth>=18 )
       console.log("You are old enough to drive in to this page")

