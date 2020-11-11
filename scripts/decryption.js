function decryption1() {

    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("h", "b");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("7", "t");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("9", "u");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("w", "a");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("6", "r");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("j", "n");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("5", "e");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("e", "s");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("u", "h");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("y", "g");
    document.getElementById("demo").innerHTML = res;
}

  function decryption2(){
    let encryptedtext = prompt("paste encrypted message here to decode");
    for (let i=0; i<encryptedtext.length; i=i+1){
        if (encryptedtext [i]=="h"){
              encryptedtext.replace("h","b");
        }
        else if (encryptedtext [i]=="7"){
              encryptedtext.replace("7","t");
        }
        else if (encryptedtext [i]=="9"){
              encryptedtext.replace("9","u");
        }
        else if (encryptedtext [i]=="w"){
            encryptedtext.replace("w","a");
        }
        else if (encryptedtext [i]=="6"){
            encryptedtext.replace("6","r");
        }
        else if (encryptedtext [i]=="j"){
            encryptedtext.replace("j","n");
      }
      else if (encryptedtext [i]=="5"){
            encryptedtext.replace("5","e");
      }
      else if (encryptedtext [i]=="e"){
          encryptedtext.replace("e","s");
      }
      else if (encryptedtext [i]=="u"){
          encryptedtext.replace("u","h");
      }
    }
    document.getElementById("demo").innerHTML=encryptedtext;
}