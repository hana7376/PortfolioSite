function encryption2() {
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("b", "h");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("t", "7");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("u", "9");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("a", "w");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("r", "6");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("n", "j");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("e", "5");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("s", "e");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("h", "u");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("g", "y");
    document.getElementById("demo").innerHTML = res;
  }
  
function encryption3(){
    let plaintext = prompt("enter your secret message");
    for (let i=0; i<plaintext.length; i=i+1){
        if (plaintext [i]=="b"){
              plaintext.replace("b","h");
        }
        else if (plaintext [i]=="t"){
              plaintext.replace("t","7");
        }
        else if (plaintext [i]=="u"){
              plaintext.replace("u","9");
        }
        else if (plaintext [i]=="a"){
            plaintext.replace("a","w");
        }
        else if (plaintext [i]=="r"){
            plaintext.replace("r","6");
        }
        else if (plaintext [i]=="n"){
            plaintext.replace("n","j");
      }
      else if (plaintext [i]=="e"){
            plaintext.replace("e","5");
      }
      else if (plaintext [i]=="s"){
          plaintext.replace("s","e");
      }
      else if (plaintext [i]=="h"){
          plaintext.replace("h","u");
      }
    }
    console.log (plaintext.replace("t","7"));
    document.getElementById("demo").innerHTML=plaintext;
}

//make a new func for decryption where everything is
// revesed and you can copy paste message to change it back.

