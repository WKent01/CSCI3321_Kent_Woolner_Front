
var num;

function updateDisplay(newValue){
    var d = document.getElementById('display');
    //limits how many characters are in the display
    d.innerHTML = d.innerHTML.substr(0, 23);

    switch(newValue){
        case 'AC':
            d.innerHTML = '';
            break;
        case '+':
            if(d.innerHTML.length == 0){
                break;
            }else if(d.innerHTML.endsWith('+') || d.innerHTML.endsWith('/') || d.innerHTML.endsWith('-') || d.innerHTML.endsWith('*')){
                break;
            }else{
                d.innerHTML += "+";
                break;
            }
        case '-':
            if(d.innerHTML.length == 0){
                break;
            }else if(d.innerHTML.endsWith('+') || d.innerHTML.endsWith('/') || d.innerHTML.endsWith('-') || d.innerHTML.endsWith('*')){
                break;
            }else{
                d.innerHTML += "-";
                break;
            }
        case '*':
            if(d.innerHTML.length == 0){
                break;
            }else if(d.innerHTML.endsWith('+') || d.innerHTML.endsWith('/') || d.innerHTML.endsWith('-') || d.innerHTML.endsWith('*')){
                break;
            }else{
                d.innerHTML += "*";
                break;
            }
            
        case '/':
            //if the display box is empty
                //do nothing
            //else if the display value ends with x, -, *, or /-
                //do nothing
            //else
                //append the key to the display box content
            if(d.innerHTML.length == 0){
                break;
            }else if(d.innerHTML.endsWith('+') || d.innerHTML.endsWith('*') || d.innerHTML.endsWith('-') || d.innerHTML.endsWith('/')){
                break;
            }else{
                d.innerHTML += "/";
                break;
            }
            
        case '=':
            //if the display box is not empty
            //call JavaScript's evaluation function to evaluate
            //the content of the display box
            if(d.innerHTML.endsWith('+') || d.innerHTML.endsWith('*') || d.innerHTML.endsWith('-') ||  d.innerHTML.endsWith('/')){
                d.innerHTML = "Err"
                break;
            }else if(d.innerHTML.length != 0){
                d.innerHTML = eval(d.innerHTML);
                break;
            }else{
                break;
            }
        default:
            d.innerHTML += newValue;
            break;

    }
    
}