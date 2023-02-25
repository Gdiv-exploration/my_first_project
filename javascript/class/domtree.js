let gp=document.getElementById("gp")
let pt=document.getElementById("pt")
let cd=document.getElementById("cd")

gp.addEventListener("click",(e)=>{
    console.log("GRANDPARENTS CLICKED");
    e.stopPropagation()
    gp.style.backgroundColor="green"
   
})
pt.addEventListener("click",(e)=>{
    console.log("PARENTS CLICKED");
    pt.style.backgroundColor="pink"
    e.stopImmediatePropagation()
 
})
cd.addEventListener("click",(e)=>{
    console.log("CHILDREN CLICKED");
    cd.style.backgroundColor="yellow"
    e.stopImmediatePropagation()
   
})