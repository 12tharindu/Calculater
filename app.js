function add(){
    document.getElementById("txtarea").value +="+";
}

function equals() {
    let expression = document.getElementById("txtarea").value;
    try {
        let result = eval(expression);
        document.getElementById("txtarea").value = result;
    } catch (e) {
        document.getElementById("txtarea").value = "Error";
    }
}

function reset(){
    document.getElementById("txtarea").value ="";
}

function abs(){
    let n1=Number(document.getElementById("txtarea").value);
    document.getElementById("txtarea").value +="-";
    let op="-";
    
}

function mul(){
    document.getElementById("txtarea").value +="*";
}

function div(){
    document.getElementById("txtarea").value +="/";

}

function appendNumber0(){
    document.getElementById("txtarea").value+=0;
    
}

function appendNumber1(){
    document.getElementById("txtarea").value +=1;

}

function appendNumber2(){
    document.getElementById("txtarea").value +=2;

}

function appendNumber3(){
    document.getElementById("txtarea").value +=3;

}

function appendNumber4(){
    document.getElementById("txtarea").value +=4;

}
function appendNumber5(){
    document.getElementById("txtarea").value +=5;

}
function appendNumber6(){
    document.getElementById("txtarea").value +=6;

}
function appendNumber7(){
    document.getElementById("txtarea").value +=7;

}
function appendNumber8(){
    document.getElementById("txtarea").value +=8;

}
function appendNumber9(){
    document.getElementById("txtarea").value +=9;

}

let sample=()=>console.log("Hello");