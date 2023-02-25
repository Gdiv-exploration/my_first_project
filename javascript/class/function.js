// let x=function()
// {
//     console.log("heloo");
// }
// x();

// let obj={
//     username :"rahul",
//     password :()=>
//     {
//         console.log(this.username);
//     }
// }
// obj.password()

// (function()
// {
//     console.log("byeee");
// })
// ();
var a=10
function one(){
    var b=20
    function two(){
        console.log(b);
    }
    return two
}
one()()