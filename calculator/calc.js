let res;
function calculate(){
    let result;
    let input1 =+ (document.getElementById('input1').value);
    let input2 =+ (document.getElementById('input2').value);

    switch(res){
    case '+' :
        result= input1 + input2;
        break;
    case '-' : 
    result = input1 - input2;
       break;
    case '/' :
    result = input1 / input2;
      break;
    case '*' :
    result = input1 * input2;
      break;

    }
    
    document.getElementById('result').innerHTML= result;

}
