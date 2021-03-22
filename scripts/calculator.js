
var num;

function updateDisplay(newValue){
    var d = document.getElementById('display');

    switch(newValue){
        case 'AC':
            d.innerHTML = '';
            break;
        case '+':
            d.innerHTML += "+";
            break;
        case '-':
            d.innerHTML += "-";
            break;
        case '*':
            d.innerHTML += "*";
            break;
        case '/':
            //if the display box is empty
                //do nothing
            //else if the display value ends with x, -, *, or /-
                //do nothing
            //else
                //append the key to the display box content
            d.innerHTML += "/";
            break;
            
        case '=':
            //if the display box is not empty
            //call JavaScript's evaluation function to evaluate
            //the content of the display box
            if(d.innerHTML.length != 0){
                d.innerHTML = eval(d.innerHTML);
                break;
            }else{
                break;
            }
        default:
            d.innerHTML += newValue;
            break;

    }

    //d.innerHTML += newValue;
}