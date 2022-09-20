// sound
// function button click sound
function sound1(){
    const audio = new Audio('button-48.wav')
    audio.play();
}
// function C button click sound
function sound2(){
    const audio = new Audio('button-3.wav')
    audio.play();
}
// function sum button click sound
function sound3(){
    const audio = new Audio('button-1.wav')
    audio.play();
}
// sound ..................

// main function

// button , sin , cos , tan function

function getValue(event){
    var Input = document.getElementById("Input")
    if(event.target.innerHTML == 'sin'){
        sound1();
        var inp = +prompt("Enter value of sin")
        var val = eval(Math.sin(inp).toFixed(10))
        Input.value = val
        console.log("Enter value of sin")
    }
    else if(event.target.innerHTML == 'cos'){
        sound1();
        var inp = +prompt("Enter value of cos")
        var val = eval(Math.cos(inp).toFixed(10))
        Input.value = val
        console.log("Enter value of cos")
    }
    else if (event.target.innerHTML == 'tan'){
        sound1();
        var inp = +prompt("Enter value of tan")
        var val = eval(Math.tan(inp).toFixed(10))
        Input.value = val
        console.log("Enter value of tan")
    }
    else{
        var Input = document.getElementById("Input")
        sound1();
        var val = event.target.innerHTML
        Input.value += val
    }
}

// clear function

function C(){
    var Input = document.getElementById("Input")
    sound2();
    Input.value = ''

}

// equal function

function sum(){
    var Input = document.getElementById("Input")
    sound3();
    var equal = eval(Input.value)
    Input.value = equal
}

