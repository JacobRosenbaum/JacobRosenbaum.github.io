var generate = document.getElementById ("button");
var copy = document.getElementById ("button2");

var allLower =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];

var allUpper = ["A","B","C","D","E","F","G","H",'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

var allSpecial = ['!','@','#','$','%','*','&'];

var allNumeric = [1,2,3,4,5,6,7,8,9,0];

var userAnswer;

function passwordLength(){
    userAnswer = prompt("How many characters would you like your password to contain?");
    if (userAnswer < 8 || userAnswer > 128) {
        alert("The number of characters must be between 8 and 128");
        return false;
    }
    else{
        return true;
    }
  
}
generate.onclick =  function create() {

    if (!passwordLength()){
        passwordLength();
        
    }
    else{
        otherQuestions();
        
    }
    function otherQuestions(){
        var special = confirm("Click OK to confirm including special characters");
        var numeric = confirm("Click OK to confirm including numeric characters");
        var lower = confirm("Click OK to confirm including lower case characters");
        var upper = confirm("Click OK to confirm including upper case characters");
    
        var password = [];
    
    
    if (special && numeric && lower && upper) {
        password.push(allLower, allNumeric, allSpecial, allUpper);
        Math.floor(Math.random() * userAnswer); 
        document.getElementById("exampleFormControlTextarea1").innerHTML = password; 

    }
}
}


console.log (password);



copy.onclick = function clipboard() {
    var copyText = document.getElementById("exampleFormControlTextarea1");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }