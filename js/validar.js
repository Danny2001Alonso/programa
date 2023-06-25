function logueo(){
    var user, pass;
    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;

    if(user == "admin" && pass == "12345"){
        window.location = "./inicio.html";
    }
    else{
        console.log ("Error en datos");
    }
}
