let obj = {
    bob: [100,40,12],
    den: [20,30,40],
    lee: [10,100,60],
};

let getBestStudent = function(obj){
   let maxAvg = 0;
   let name = "";
   for(let prop in obj){
       if(Math.max(obj[prop].reduce((a,b)=>a+b)/obj[prop].length)){
           maxAvg = obj[prop];
           name = prop;
        console.log(`${prop}s avg = ${(obj[prop].reduce((a,b)=>a+b)/obj[prop].length).toFixed(2)}`)
    }
   }
 return `${name}`;
}
console.log(getBestStudent(obj));