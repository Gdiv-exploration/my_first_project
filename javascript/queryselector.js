// let btn=document.querySelector("button");
// btn.onclick=()=>{
// console.log("working");
// document.body.style.backgroundColor="yellow"
// btn.style.color="green"
// btn.innerText="javaa"
// }



// let btn=document.querySelector("button");
// btn.addEventListener("click",()=>{
//     console.log("hello");
//     btn.style.color="yellow"
//     btn.style.backgroundColor="pink"

// })
let a=10;
let h3=document.querySelector("h3")
document.body.appendChild(h3)
let btn=document.getElementById("but1")
btn.addEventListener("click",()=>{
//let user=document.getElementById("username").value
let pass=document.getElementById("password").value
let out=a*pass;
h3.innerHTML="the output is "+out
console.log({pass,out});

})



