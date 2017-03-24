
var i=0;
var m=0;


function Incrementar(){
    i=i+1;
    document.getElementById('valor').innerHTML="<p>"+i+"</p>";


}

function Iniciar(){
    var x = setInterval(Incrementar(),1000);
}
