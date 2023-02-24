// let h1=document.createElement('h1')
// document.body.appendChild(h1)
// h1.innerText="hello"

// // let div=document.createElement('div')
// let h2=document.createElement('h2')
// //document.body.appendChild(div)
// document.body.appendChild(h2)
// h2.innerText="hii"


// let table=document.createElement('table')
// document.body.appendChild(table)
// table.innerHTML=` <tr> <td>1</td>
// <td>1</td>
// <td>1</td>
// <td>1</td>
// <td>1</td>
// <td>1</td>
// <td>1</td>
// <td>1</td>
// <td>1</td>
// <td>1</td> </tr>
// <tr><td>2</td>
// <td>2</td>
// <td>2</td>
// <td>2</td>
// <td>2</td>
// <td>2</td>
// <td>2</td>
// <td>2</td>
// <td>2</td>
// <td>2</td></tr>
// <tr><td>3</td>
// <td>3</td>
// <td>3</td>
// <td>3</td>
// <td>3</td>
// <td>3</td>
// <td>3</td>
// <td>3</td>
// <td>3</td>
// <td>3</td></tr>
// <br><br><br><br><br> `

let div=document.createElement("div")
document.body.appendChild(div)
div.innerHTML=` 
<div id="blocks1"></div>
<div id="blocks2"></div>
<div id="blocks3"></div>`

div.style.border="solid 2px red"    
div.style.height="600px"
div.style.width="900px"
div.style.display="flex"
div.style.alignItems="center"
div.style.justifyContent="space-evenly"



let blocks1=document.getElementById('blocks1')
blocks1.style.border="solid 1px blue" 
blocks1.style.height="300px"
blocks1.style.width="250px"
//blocks1.style.margin="20px"
div.style.img="C:\Users\rahul\OneDrive\Desktop\rahul sir\javascript\images\din.jpg"


let blocks2=document.getElementById('blocks2')
blocks2.style.border="solid 1px green" 
blocks2.style.height="300px"
blocks2.style.width="250px"
//blocks2.style.margin="20px"

let blocks3=document.getElementById('blocks3')
blocks3.style.border="solid 1px yellow" 
blocks3.style.height="300px"
blocks3.style.width="250px"
//blocks3.style.margin="20px"


