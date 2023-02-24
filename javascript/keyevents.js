// let color=prompt("enter the color")
// let btn=document.querySelector("button")
// btn.innerText=color
// btn.addEventListener("click",()=>{
//     btn.style.backgroundColor=color
//     document.body.style.backgroundColor=color
// })  
// let a=prompt("you are entering disco area")

// let input=document.querySelector("input")
// input.addEventListener("keypress",()=>{
//     let colour=Math.floor(Math.random()*10000).toString(16)
//     document.body.style.backgroundColor=`#${colour}`
//     console.log(colour);
// })

localStorage.setItem("us","ram")
localStorage.setItem("pwd",143)
let d1=localStorage.getItem("us")
let d2=localStorage.getItem("pwd")
console.log(d1,d2);

sessionStorage.setItem("usr","rahul")
let u=sessionStorage.getItem("usr")
console.log(u);