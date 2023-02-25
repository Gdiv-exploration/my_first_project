{
let a=10;
let h3=document.getElementById("head1")
document.body.appendChild(h3)
let btn=document.getElementById("but1")
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    e.stopPropagation()
let user=document.getElementById("user").value
let res1=a*user;
h3.innerHTML="The price is of bike is "+res1
console.log({user,res1});
btn.style.color="black"
btn.style.backgroundColor="orange"
})
}

{
let b=30;
let h3=document.getElementById("head2")
document.body.appendChild(h3)
let btn2=document.getElementById("but2")
btn2.addEventListener("click",(e)=>{
    e.preventDefault()
    e.stopPropagation()
let pass=document.getElementById("pass").value
let res2=b*pass;
h3.innerHTML="The price of car is "+res2
console.log({pass,res2});
btn2.style.color="black"
btn2.style.backgroundColor="yellow"
})
}

{
let c=20;
let h3=document.getElementById("head3")
document.body.appendChild(h3)
let btn3=document.getElementById("but3")
btn3.addEventListener("click",(e)=>{
    e.preventDefault()
    e.stopPropagation()
let out=document.getElementById("out").value
let res3=c*out;
h3.innerHTML="The price of auto is "+res3
console.log({out,res3});
btn3.style.color="black"
btn3.style.backgroundColor="yellow"
})

}
