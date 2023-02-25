// let arr=[100,200,4000,2000,1]
// arr.push(5)
// console.log(arr);
// arr.unshift(10)
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.shift()
// console.log(arr);
// arr.splice(1,3,"hi",false,null)
// console.log(arr);
// arr.slice(0,2)
// console.log(arr);
// let arr=[10,"hi",null,false]
// for(index in arr){
//     console.log(index);
// }

// let arr1=[10,"hi",null,false]
// for(values of arr1){
//     console.log(values);
// }
// let arr2=[10,"hi",null,false]
// arr2.forEach((index,values)=>{
//     console.log(values,index);
// })

// let prod=[100,200,4000,5000,1]
// let res=prod.filter((x)=>{
//     return x>100
// })
// console.log(res);

// let gst=res.map((x)=>{
//     return x+x*0.18
// })
// console.log(gst);
// let tot=gst.reduce((acc,val)=>{
//     return acc+val
// },1)
// console.log(tot);
 

// let arr1=[100,200,4000,5000,1]
// let prod=arr1.filter((x)=>{
//     return x>100
// })
// console.log(prod);

// let gst=prod.map((x)=>{
//     return x*1.18
// })
// console.log(gst);

// let tot=gst.reduce((acc,val)=>{
//     return acc+val
// },0)
// console.log('The total sum is = '+ tot);
// console.log('**********');
// console.log('**********');

// let arr=[100,200,4000,5000,1]
// var sum=0
// for (values of arr) {
//     if (values>100) {
//         val=values*1.18
//         sum=sum+val  
//         console.log(val);   
//     }
// }
// console.log('The total sum is = '+ sum); 

    // let x=new Date()
    // let day=x.getDay()
    // let arr=["sun","Mon","Tues"]
    // console.log(arr(day));


    let a=()=>{
        let x=new Date()
    console.log("the day is tuesday " + x.getDay());
    console.log("the month is february " +x.getMonth());
    console.log("the year is  " +x.getFullYear());
    console.log(x.getUTCDate());
    console.log(x.getUTCDay());
    }
    //a()


    // switch case
    let b=()=>{
    let x=new Date()
    let day=x.getDay()
    switch (day) {
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;

        case 2:
            console.log("Tuesday");
            break;

        case 3:
            console.log("Wednesday");
            break;

        case 4:
            console.log("Thurday");
            break;

        case 5:
            console.log("Friday");
            break;

        case 6:
            console.log("Saturday");
            break;
        
        default:
            console.log("enter valid date");
            break;
    }
}

// using if else case
let c=()=>{
let x=new Date();
let day=x.getDay();
if (day==0) {
    console.log("Sunday");
}
else if (day==1) {
    console.log("Monday");
    
} 
else if (day==2) {
    console.log("Tueday");
    
}
else if (day==3) {
    console.log("Wednesday");
    
}
else if (day==4) {
    console.log("Thursday");
    
}
else if (day==5) {
    console.log("Friday");
    
}
else if (day==6) {
    console.log("Satday");
    
}
}
//c()
let arr=["Sunday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let x=new Date()
let day=x.getDay()
for (day of arr) {
    console.log(day);
    
}
