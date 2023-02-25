let screen=document.getElementById("screen")
let buttons=document.querySelectorAll("button")
let screenValue ='';
for (item of buttons) {
    item.addEventListener("click",(e)=>{
        text=e.target.innerText;
        console.log(text);
        if(text=='+'){
            screenValue +=text;
            screen.value=screenValue;
        }
       else if(text=='-'){
            screenValue +=text;
            screen.value=screenValue;
        }
        else if(text=='X'){
            text='*'
            screenValue +=text;
            screen.value=screenValue;
        }
        else if(text=='/'){
            screenValue +=text;
            screen.value=screenValue;
        }
        else if(text=='÷'){
            text='/';
            screenValue +=text;
            screen.value=screenValue;
        }
        else if(text=='%'){
            screenValue +=text;
            screen.value=screenValue;
        }
        else if(text=='='){
            screen.value=eval(screenValue)

        }
        else if(text=='AC'){
            screenValue ="";
            screen.value=screenValue;
        }
        else if(text=='C'){
            screenValue ='';
            screen.value=screenValue;
        }
        else {
            screenValue+=text;
            screen.value=screenValue;
        
        }

    }) 
}
