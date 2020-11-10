function encryption2(){
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
    }
    console.log (plaintext.replace("t","7"));
    document.getElementById("demo").innerHTML=plaintext;
}


  