let x="John"
let y="Doe"
console.log(x+"<>"+y)

let info={name:"Hena", surname:"Asslam", email:"abc@gmail.com"};
delete info.email;
console.log("After deleting email: ",info)

let stringArray=["paris","prague","amsterdam","venice","rome","berlin","helsinki","nairobi","tokyo","rio"]
for(i=0;i<stringArray.length;i++){
    console.log(stringArray[i])
}
let randomNumberArray=[];
for(i=0;i<101;i++){
    randomNumberArray.push(Math.floor(Math.random()*1000))
}
console.log("The array with 100 random numbers",randomNumberArray)

function maxNumber(array){

    let max=Math.max(...array)
    return max;
}


let max=maxNumber(randomNumberArray);
console.log("Maximum value is", max);


function minNumber(array){

    let min=Math.min(...array)
    return min;
}


let min=minNumber(randomNumberArray);
console.log("Minimum value is", min);



function ArrayOfArrays(number){
    let arrayOfArrays = []
    for(let i = 0; i < number; i++){
        arrayOfArrays.push(randomArrayGenerator())
    }
    return arrayOfArrays
 }


 function randomArrayGenerator(){
    let randomNumber = []
    for(let i = 0; i < 10; i++){
        randomNumber.push(Math.floor(Math.random()*101))
    }
    return randomNumber;
 }

 let arrayOfArrays = ArrayOfArrays(5)
 console.log("Array of arrays:", arrayOfArrays)


 function longest(arr1,arr2){
    let long=[]
    if(arr1.length>arr2.length){
        long.push(arr1);
    }
    else{
        long.push(arr2)
    }
    return long
 }
array1=[9,99,3,4]
array2=[3,4,6,7,8,5,2]
let final=longest(array1,array2)
console.log("longest array is ", final)

function higherSum(arr1,arr2){
    let sum1=0
    for(i=0;i<arr1.length;i++){
        sum1=sum1+arr1[i]
    }
    let sum2=0
    for(i=0;i<arr2.length;i++){
        sum2=sum2+arr2[i]
    }
    if(sum1>sum2){
        return arr1
    }
    else {
        return arr2
    }
}
let high=higherSum(array1,array2)
console.log("higher sum is:" ,high)







