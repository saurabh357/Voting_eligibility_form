function fun(){
    //var x=document.getElementById("text1").value;
    var y=document.getElementById("A1").value;
    //regx=/^[A-Z]$/
    if(y>=18){
        //document.write("Eligible")
        alert("You are Eligible")
       document.getElementById("lab").innerHTML="Eligible";
        document.getElementById("lab").style.visibility="visible";
        document.getElementById("lab").style.color="green";
    }
    else
    {
        alert("You are Not Eligible")
        //document.write("Eligible")
        document.getElementById("lab").innerHTML="Not Eligible";
        document.getElementById("lab").style.visibility="visible";
        document.getElementById("lab").style.color="red";
    }
}
