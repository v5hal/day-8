
var request = new XMLHttpRequest();

request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);

request.send();

request.onload=function(){
var data = JSON.parse(request.response)
console.log(data);


// Get all the countries from the Asia continent /region using the Filter function


var result = data.filter((ele)=>ele.region==="Asia")
console.log(result);
     

// Get all the countries with a population of less than 2 lakhs using Filter function

// var members= data.filter((ele)=>{
//     return ele.population <=20000
   
// })

// console.log(members);

// Print the following details name, capital, flag using forEach function


//    data.forEach((element,index)=>{
//     data[index]= element.capital+""+ element.name+""+element.flag
   
//                                  })

// console.log(data);



// Print the total population of countries using reduce function


var member= data.reduce((acc,ele)=> acc+ele.population,0);

console.log(member)


// Print the country which uses US Dollars as currency.

let cur=data.filter((ele) => {   
for(let i in ele.currencies){
        if(ele.currencies[i].code==="USD"){
                return true;
        }
}
}).map((ele)=>ele.name)

console.log(cur);


}

