let x="Joe"
let y="Doe"
console.log(x,"<>",y)

let obj={name:"hena", surname:"aslam",email:"abc@xyz.com"}
delete obj.email


let arrayOfstrings=["1","12","13","14","16","19","11","91","31","51"]
for(i=0;i<arrayOfstrings.length;i++){
    console.log(arrayOfstrings[i])
}
let arrayOfNumbers=[]
for(i=0;i<100;i++){
    let randomNumber=Math.floor(Math.random()*1000)
    arrayOfNumbers.push(randomNumber)
    
}
console.log(arrayOfNumbers)

function MaxandMin(array){
    let maxandmin={max:0,min:0}
    maxandmin.max=Math.max(...array)
    maxandmin.min=Math.min(...array)
    return maxandmin
}
console.log(MaxandMin(arrayOfNumbers))


function ArrayOfArrays(number){
    let arrayOfArrays = []
    for(let i = 0; i < number; i++){
        arrayOfArrays.push(randomArrayGenerator())
    }
    return arrayOfArrays
 }


 function randomArrayGenerator(){
    let randomArray = []
    for(let i = 0; i < 10; i++){
        randomArray.push(Math.floor(Math.random()*101))
    }
    return randomArray;
 }

 let arrayOfArrays = ArrayOfArrays(5)
 console.log("Array of arrays:", arrayOfArrays)


 function longestArray(arr1,arr2){
    if(arr1.length>arr2.length){
        return arr1
    }
    else{
        return arr2
    }
 }
 console.log(longestArray(["hello","banana", "apple", "peach"],["banana", "apple", "peach","banana", "apple", "peach"]))

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
let high=higherSum(randomArrayGenerator(),randomArrayGenerator())
console.log("higher sum is:" ,high)