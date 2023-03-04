// function for addition

function add(){
    let  calc = 0, calc2 = 0;
    calc = calculator.inputValue.value;
    calc2 = calc.charAt(calc.length-1);
    if(calc2 == '+' || calc2 == '-' || calc2 == '*' || calc2 == '/'){
        calculator.inputValue.value = calc.substring(0,calc.length-1);  
        calculator.inputValue.value+='+';
    } else {
        calculator.inputValue.value+='+';
    }
}

// function for substraction

function minus(){

    let  calc = 0, calc2 = 0;
    calc = calculator.inputValue.value;
    calc2 = calc.charAt(calc.length-1);
    if(calc2 == '+' || calc2 == '-' || calc2 == '*' || calc2 == '/'){
        calculator.inputValue.value = calc.substring(0,calc.length-1);  
        calculator.inputValue.value+='-';
    } else {
        calculator.inputValue.value+='-';
    }

}

// function for multiplication

function multiply(){

    let  calc = 0, calc2 = 0;
    calc = calculator.inputValue.value;
    calc2 = calc.charAt(calc.length-1);
    if(calc2 == '+' || calc2 == '-' || calc2 == '*' || calc2 == '/'){
        calculator.inputValue.value = calc.substring(0,calc.length-1);  
        calculator.inputValue.value+='*';
    } else {
        calculator.inputValue.value+='*';
    }

}

// function for division

function division(){

    let  calc = 0, calc2 = 0;
    calc = calculator.inputValue.value;
    calc2 = calc.charAt(calc.length-1);
    if(calc2 == '+' || calc2 == '-' || calc2 == '*' || calc2 == '/'){
        calculator.inputValue.value = calc.substring(0,calc.length-1);  
        calculator.inputValue.value+='/';
    } else {
        calculator.inputValue.value+='/';
    }

}