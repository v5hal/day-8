// oops task

// class constructor

// class person{
//     constructor(moviename,studioname,rating)    
//     {
//         this.moviename= moviename;
//         this.studioname= studioname;
//         this.rating= rating;
//     }
//     getdetails(){
//         return(`the name of the movie is ${this.moviename} shows in ${this.studioname} and movie rating ${this.rating}`)
//     }
// }

// let person1 = new person("vikram","ashok theater","5 star");

// console.log(person1.getdetails());



// d) Write a piece of code that creates an instance of the class 
// Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG-13”


// class detail{
//     constructor(moviename,studioname,rating)
//     {
//         this.moviename= moviename;
//         this.studioname= studioname;
//         this.rating= rating;
//     }
//     getdetails(){
//         return(`movie with the title ${this.moviename}, the studio ${this.studioname} and the rating ${this.rating}`)
//     }
// }

// let detail1 = new detail("Casino Royale","Eon Production","PG13");

// console.log(detail1.getdetails());


// Write a “person” class to hold all the details.

// class person {
//     constructor(firstname,lastname,age,place)
//     {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//         this.place = place;
//     }
//     getdetails(){
//         return(`the name of a person is ${this.firstname} ${this.lastname} with age ${this.age}born at ${this.place}`)
//     }
// }

// let person1 = new person("guvi","geek","18","chennai");

// let person2 = new person("vishal","deepa","21","kerala");

// console.log(person1.getdetails());


// write a class to calculate the uber price.

// class uber {
//     constructor(distance,rate,waitingperiod)
//     {
//         this.distance = distance;
//         this.rate = rate;
//         this.waitingperiod = waitingperiod;
//     }

// setDistance(dist){
//     this.distance=dist;
// }

// getRideDetails(){
//     return(`the distance of the rider is ${this.distance} and rate of ₹${this.rate} with waitingperiod of ${this.waitingperiod}`)
// }


// getprice(){
//      let totalprice =(this.rate* this.distance)+(this.waitingperiod*5);
//     return totalprice
// }
// }

// let uber1= new uber(350,20,15);

// console.log(uber1.getprice());

// uber1.setDistance(150);

// console.log(uber1.getprice())
