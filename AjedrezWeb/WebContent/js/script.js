var mate = false;

$(document).ready(function(){
    inicializaTablero();
    movimientob();
    
    
});
function reset(){
	limpiarTablero();
	inicializaTablero();
	movimientob();
}

function limpiarTablero(){
	var myNode = document.getElementById("tablero");
	while (myNode.firstChild) {
	    myNode.removeChild(myNode.firstChild);
	}
}

function inicializaTablero(){
	
    for(var i=1; i<=8; i++){
            var fila = document.createElement("tr");
            fila.id = i;
            fila.class="fila";
            $("#tablero").append(fila);
            $(fila).addClass("fila");
        for(var j=1; j<=8; j++){
            var celda = document.createElement("td");
            celda.id =i+""+j;
            $("#"+i).append(celda);
            switch(celda.id){
                case "11":
                    $(celda).addClass("torren");
                break;
                case "12":
                    $(celda).addClass("caballon");
                break;
                case "13":
                    $(celda).addClass("alfiln");
                break;
                case "14":
                    $(celda).addClass("reinan");
                break;
                case "15":
                    $(celda).addClass("reyn");
                break;
                case "16":
                    $(celda).addClass("alfiln");
                break;
                case "17":
                    $(celda).addClass("caballon");
                break;
                case "18":
                    $(celda).addClass("torren");
                break;
                case "21":
                    $(celda).addClass("peonn");
                break;
                case "22":
                    $(celda).addClass("peonn");
                break;
                case "23":
                    $(celda).addClass("peonn");
                break;
                case "24":
                    $(celda).addClass("peonn");
                break;
                case "25":
                    $(celda).addClass("peonn");
                break;
                case "26":
                    $(celda).addClass("peonn");
                break;
                case "27":
                    $(celda).addClass("peonn");
                break;
                case "28":
                    $(celda).addClass("peonn");
                break;
                case "71":
                    $(celda).addClass("peonb");
                break;
                case "72":
                    $(celda).addClass("peonb");
                break;
                case "73":
                    $(celda).addClass("peonb");
                break;
                case "74":
                    $(celda).addClass("peonb");
                break;
                case "75":
                    $(celda).addClass("peonb");
                break;
                case "76":
                    $(celda).addClass("peonb");
                break;
                case "77":
                    $(celda).addClass("peonb");
                break;
                case "78":
                    $(celda).addClass("peonb");
                break;
                case "81":
                    $(celda).addClass("torreb");
                break;
                case "82":
                    $(celda).addClass("caballob");
                break;
                case "83":
                    $(celda).addClass("alfilb");
                break;
                case "84":
                    $(celda).addClass("reinab");
                break;
                case "85":
                    $(celda).addClass("reyb");
                break;
                case "86":
                    $(celda).addClass("alfilb");
                break;
                case "87":
                    $(celda).addClass("caballob");
                break;
                case "88":
                    $(celda).addClass("torreb");
                break;
                default:
                    $(celda).addClass("vacia");
            }
        }
    }
       
}

function movimientob(){
    
    $(".peonb, .torreb, .caballob, .alfilb, .reinab, .reyb").one("click", function(){
       
        console.log("Pieza cojida en: "+this.id);
        var $cojida = $(this);
        $cojida.css("border","1px solid red");
        $("div tr td").unbind("click");
        //LLamar a movimientosPermitido($cojida.attr("class"), this.id), el resultado tiene que ser del tipo "#12, #32, #45"
        var permitidos = movimientosPermitidos($cojida.attr("class"), this.id);
        //----------CODIGO SOLUCION--------------   
        if(permitidos==""){
        	$cojida.css("border","1px solid black");
        	movimientob();
        }
        
        //----------CODIGO SOLUCION--------------   
        $(permitidos).css("background-color","yellow");
        $(permitidos).one("click", function(){
        
            $(permitidos).css("background-color","transparent");
            console.log("Pieza dejada en: "+this.id);
            //console.log("Classe de la casilla donde se deja: "+$(this).attr("class"));
            $("#"+this.id).removeClass($(this).attr("class"));
            $("#"+this.id).addClass($cojida.attr("class"));
            //console.log("Classe de la casilla donde se deja: "+$(this).attr("class"));
            $cojida.removeClass($cojida.attr("class"));
            $cojida.addClass("vacia");
            $cojida.css("border","1px solid black");
            $("div tr td").unbind("click");
            movimienton();
        });
    });
}

function movimienton(){
    
    $(".peonn, .torren, .caballon, .alfiln, .reinan, .reyn").one("click", function(){
        
        var $cojida = $(this);
        console.log("Pieza cojida en: "+this.id);
        $cojida.css("border","1px solid red");
        $("div tr td").unbind("click");
        //LLamar a movimientosPermitido($cojida.attr("class"), this.id), el resultado tiene que ser del tipo "#12, #32, #45"
        var permitidos = movimientosPermitidos($cojida.attr("class"), this.id);
        //----------CODIGO SOLUCION--------------   
        if(permitidos==""){
        	$cojida.css("border","1px solid black");
        	movimienton();
        }
        
        //----------CODIGO SOLUCION--------------   
        $(permitidos).css("background-color","yellow");
        $(permitidos).one("click", function(){
            
            $(permitidos).css("background-color","transparent");
            console.log("Pieza dejada en: "+this.id);
            //console.log("Classe de la casilla donde se deja: "+$(this).attr("class"));
            $("#"+this.id).removeClass($(this).attr("class"));
            $("#"+this.id).addClass($cojida.attr("class"));
            //console.log("Classe de la casilla donde se deja: "+$(this).attr("class"));
            $cojida.removeClass($cojida.attr("class"));
            $cojida.addClass("vacia");
            $cojida.css("border","1px solid black");
            $("div tr td").unbind("click");
            movimientob();
        });
    });
}

function movimientosPermitidos(pieza, posicion){
    posicion = posicion+"";
    var permitidas="";
    var a = 1;
    var sig ="";
       
    switch(pieza){
        case "torreb":
            //Arriba
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)-(10*a));
                if(Number(posicion.toString().substring(0,1)) == 1){
                    i = -1;
                }
                else{
                    if(Number(sig.substring(1,2)) == 1 &&($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn")){
                        permitidas = permitidas+"#"+(Number(posicion)-(a*10))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)-(a*10))+",";
                            sig = "#"+(Number(posicion)-(a*10));
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            permitidas = permitidas.concat("#",Number(posicion)-(a*10),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Abajo
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)+(10*a));
                if(Number(posicion.toString().substring(0,1)) == 8){
                    i = -1;
                }
                else{
                    if(Number(sig.substring(1,2)) == 8 &&($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn")){
                        permitidas = permitidas+"#"+(Number(posicion)+(a*10))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)+(a*10))+",";
                            sig = "#"+(Number(posicion)+(a*10));
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            permitidas = permitidas.concat("#",Number(posicion)+(a*10),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Izquierda
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)-(a));
                if(Number(posicion.toString().substring(1,2)) == 1){
                    i = -1;
                }
                else{
                    if(Number(sig.substring(2,3)) == 1 &&($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn")){
                        permitidas = permitidas+"#"+(Number(posicion)-(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)-(a))+",";
                            sig = "#"+(Number(posicion)-(a));
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            permitidas = permitidas.concat("#",Number(posicion)-(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Derecha
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)+(a));
                if(Number(posicion.toString().substring(1,2)) == 8){
                    i = -1;
                }
                else{
                    if(Number(sig.substring(2,3)) == 8 &&($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn")){
                        permitidas = permitidas+"#"+(Number(posicion)+(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)+(a))+",";
                            sig = "#"+(Number(posicion)+(a));
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            permitidas = permitidas.concat("#",Number(posicion)+(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            permitidas = permitidas.slice(0,-1);            
            return permitidas;
        break;
        
        case "torren":
            //Arriba
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)-(10*a));
                if(Number(posicion.toString().substring(0,1)) == 1){
                    i = -1;
                }
                else{
                    if(Number(sig.substring(1,2)) == 1 &&($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb")){
                        permitidas = permitidas+"#"+(Number(posicion)-(a*10))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)-(a*10))+",";
                            sig = "#"+(Number(posicion)-(a*10));
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            permitidas = permitidas.concat("#",Number(posicion)-(a*10),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Abajo
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)+(10*a));
                if(Number(posicion.toString().substring(0,1)) == 8){
                    i = -1;
                }
                else{
                    if(Number(sig.substring(1,2)) == 8 &&($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb")){
                        permitidas = permitidas+"#"+(Number(posicion)+(a*10))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)+(a*10))+",";
                            sig = "#"+(Number(posicion)+(a*10));
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            permitidas = permitidas.concat("#",Number(posicion)+(a*10),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Izquierda
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)-(a));
                if(Number(posicion.toString().substring(1,2)) == 1){
                    i = -1;
                }
                else{
                    if(Number(sig.substring(2,3)) == 1 &&($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb")){
                        permitidas = permitidas+"#"+(Number(posicion)-(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)-(a))+",";
                            sig = "#"+(Number(posicion)-(a));
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            permitidas = permitidas.concat("#",Number(posicion)-(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Derecha
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)+(a));
                if(Number(posicion.toString().substring(1,2)) == 8){
                    i = -1;
                }
                else{
                    if(Number(sig.substring(2,3)) == 8 &&($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb")){
                        permitidas = permitidas+"#"+(Number(posicion)+(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)+(a))+",";
                            sig = "#"+(Number(posicion)+(a));
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            permitidas = permitidas.concat("#",Number(posicion)+(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            permitidas = permitidas.slice(0,-1);            
            return permitidas;
        break;
        
        case "caballob":
            var sig1 = "#"+(Number(posicion)-(20)+(1));
            var sig2 = "#"+(Number(posicion)-(10)+(2));
            var sig3 = "#"+(Number(posicion)+(10)+(2));
            var sig4 = "#"+(Number(posicion)+(20)+(1));
            var sig5 = "#"+(Number(posicion)+(20)-(1));
            var sig6 = "#"+(Number(posicion)+(10)-(2));
            var sig7 = "#"+(Number(posicion)-(10)-(2));
            var sig8 = "#"+(Number(posicion)-(20)-(1));
            if($(sig1).attr("class")=="vacia" || $(sig1).attr("class")=="peonn" || $(sig1).attr("class")=="torren" || $(sig1).attr("class")=="caballon" || $(sig1).attr("class")=="alfiln" || $(sig1).attr("class")=="reinan" || $(sig1).attr("class")=="reyn"){
                permitidas = permitidas+sig1+",";
            }
            if($(sig2).attr("class")=="vacia" || $(sig2).attr("class")=="peonn" || $(sig2).attr("class")=="torren" || $(sig2).attr("class")=="caballon" || $(sig2).attr("class")=="alfiln" || $(sig2).attr("class")=="reinan" || $(sig2).attr("class")=="reyn"){
                permitidas = permitidas+sig2+",";
            }
            if($(sig3).attr("class")=="vacia" || $(sig3).attr("class")=="peonn" || $(sig3).attr("class")=="torren" || $(sig3).attr("class")=="caballon" || $(sig3).attr("class")=="alfiln" || $(sig3).attr("class")=="reinan" || $(sig3).attr("class")=="reyn"){
                permitidas = permitidas+sig3+",";
            }
            if($(sig4).attr("class")=="vacia" || $(sig4).attr("class")=="peonn" || $(sig4).attr("class")=="torren" || $(sig4).attr("class")=="caballon" || $(sig4).attr("class")=="alfiln" || $(sig4).attr("class")=="reinan" || $(sig4).attr("class")=="reyn"){
                permitidas = permitidas+sig4+",";
            }
            if($(sig5).attr("class")=="vacia" || $(sig5).attr("class")=="peonn" || $(sig5).attr("class")=="torren" || $(sig5).attr("class")=="caballon" || $(sig5).attr("class")=="alfiln" || $(sig5).attr("class")=="reinan" || $(sig5).attr("class")=="reyn"){
                permitidas = permitidas+sig5+",";
            }
            if($(sig6).attr("class")=="vacia" || $(sig6).attr("class")=="peonn" || $(sig6).attr("class")=="torren" || $(sig6).attr("class")=="caballon" || $(sig6).attr("class")=="alfiln" || $(sig6).attr("class")=="reinan" || $(sig6).attr("class")=="reyn"){
                permitidas = permitidas+sig6+",";
            }
            if($(sig7).attr("class")=="vacia" || $(sig7).attr("class")=="peonn" || $(sig7).attr("class")=="torren" || $(sig7).attr("class")=="caballon" || $(sig7).attr("class")=="alfiln" || $(sig7).attr("class")=="reinan" || $(sig7).attr("class")=="reyn"){
                permitidas = permitidas+sig7+",";
            }
            if($(sig8).attr("class")=="vacia" || $(sig8).attr("class")=="peonn" || $(sig8).attr("class")=="torren" || $(sig8).attr("class")=="caballon" || $(sig8).attr("class")=="alfiln" || $(sig8).attr("class")=="reinan" || $(sig8).attr("class")=="reyn"){
                permitidas = permitidas+sig8+",";
            }
            permitidas = permitidas.slice(0,-1);
            return permitidas;
        break;
        
        case "caballon":
            var sig1 = "#"+(Number(posicion)-(20)+(1));
            var sig2 = "#"+(Number(posicion)-(10)+(2));
            var sig3 = "#"+(Number(posicion)+(10)+(2));
            var sig4 = "#"+(Number(posicion)+(20)+(1));
            var sig5 = "#"+(Number(posicion)+(20)-(1));
            var sig6 = "#"+(Number(posicion)+(10)-(2));
            var sig7 = "#"+(Number(posicion)-(10)-(2));
            var sig8 = "#"+(Number(posicion)-(20)-(1));
            
            if($(sig1).attr("class")=="vacia" || $(sig1).attr("class")=="peonb" || $(sig1).attr("class")=="torreb" || $(sig1).attr("class")=="caballob" || $(sig1).attr("class")=="alfilb" || $(sig1).attr("class")=="reinab" || $(sig1).attr("class")=="reyb"){
                permitidas = permitidas+sig1+",";
            }
            if($(sig2).attr("class")=="vacia" || $(sig2).attr("class")=="peonb" || $(sig2).attr("class")=="torreb" || $(sig2).attr("class")=="caballob" || $(sig2).attr("class")=="alfilb" || $(sig2).attr("class")=="reinab" || $(sig2).attr("class")=="reyb"){
                permitidas = permitidas+sig2+",";
            }
            if($(sig3).attr("class")=="vacia" || $(sig3).attr("class")=="peonb" || $(sig3).attr("class")=="torreb" || $(sig3).attr("class")=="caballob" || $(sig3).attr("class")=="alfilb" || $(sig3).attr("class")=="reinab" || $(sig3).attr("class")=="reyb"){
                permitidas = permitidas+sig3+",";
            }
            if($(sig4).attr("class")=="vacia" || $(sig4).attr("class")=="peonb" || $(sig4).attr("class")=="torreb" || $(sig4).attr("class")=="caballob" || $(sig4).attr("class")=="alfilb" || $(sig4).attr("class")=="reinab" || $(sig4).attr("class")=="reyb"){
                permitidas = permitidas+sig4+",";
            }
            if($(sig5).attr("class")=="vacia" || $(sig5).attr("class")=="peonb" || $(sig5).attr("class")=="torreb" || $(sig5).attr("class")=="caballob" || $(sig5).attr("class")=="alfilb" || $(sig5).attr("class")=="reinab" || $(sig5).attr("class")=="reyb"){
                permitidas = permitidas+sig5+",";
            }
            if($(sig6).attr("class")=="vacia" || $(sig6).attr("class")=="peonb" || $(sig6).attr("class")=="torreb" || $(sig6).attr("class")=="caballob" || $(sig6).attr("class")=="alfilb" || $(sig6).attr("class")=="reinab" || $(sig6).attr("class")=="reyb"){
                permitidas = permitidas+sig6+",";
            }
            if($(sig7).attr("class")=="vacia" || $(sig7).attr("class")=="peonb" || $(sig7).attr("class")=="torreb" || $(sig7).attr("class")=="caballob" || $(sig7).attr("class")=="alfilb" || $(sig7).attr("class")=="reinab" || $(sig7).attr("class")=="reyb"){
                permitidas = permitidas+sig7+",";
            }
            if($(sig8).attr("class")=="vacia" || $(sig8).attr("class")=="peonb" || $(sig8).attr("class")=="torreb" || $(sig8).attr("class")=="caballob" || $(sig8).attr("class")=="alfilb" || $(sig8).attr("class")=="reinab" || $(sig8).attr("class")=="reyb"){
                permitidas = permitidas+sig8+",";
            }
            permitidas = permitidas.slice(0,-1);
            return permitidas;
        break;
        
        case "alfilb":
            //Arriba-Derecha
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)-(10*a)+(a));
                if(Number(posicion.toString().substring(0,1)) == 1 || Number(posicion.toString().substring(1,2)) == 8){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 1 || Number(sig.substring(2,3)) == 8) && (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"))){
                        permitidas = permitidas+"#"+(Number(posicion)-(a*10)+(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)-(a*10)+(a))+",";
                            sig = "#"+(Number(posicion)-(a*10)+(a));
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            permitidas = permitidas.concat("#",Number(posicion)-(a*10)+(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Arriba-Izquierda
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)-(10*a)-(a));
                if(Number(posicion.toString().substring(0,1)) == 1 || Number(posicion.toString().substring(1,2)) == 1){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 1 || Number(sig.substring(2,3)) == 1) && ($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn")){
                        permitidas = permitidas+"#"+(Number(posicion)-(a*10)-(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)-(a*10)-(a))+",";
                            sig = "#"+(Number(posicion)-(a*10)-(a));
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            permitidas = permitidas.concat("#",Number(posicion)-(a*10)-(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Abajo-Derecha
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)+(10*a)+(a));
                if(Number(posicion.toString().substring(0,1)) == 8 || Number(posicion.toString().substring(1,2)) == 8){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 8 || Number(sig.substring(2,3)) == 8) && (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"))){
                        permitidas = permitidas+"#"+(Number(posicion)+(10*a)+(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)+(10*a)+(a))+",";
                            sig = "#"+(Number(posicion)+(10*a)+(a));
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            permitidas = permitidas.concat("#",Number(posicion)+(10*a)+(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Abajo-Izquierda
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)+(10*a)-(a));
                if(Number(posicion.toString().substring(0,1)) == 8 || Number(posicion.toString().substring(1,2)) == 1){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 8 || Number(sig.substring(2,3)) == 1) && (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"))){
                        permitidas = permitidas+"#"+(Number(posicion)+(10*a)-(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)+(10*a)-(a))+",";
                            sig = "#"+(Number(posicion)+(10*a)-(a));
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            permitidas = permitidas.concat("#",Number(posicion)+(10*a)-(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            permitidas = permitidas.slice(0,-1);            
            return permitidas;
        break;
        
        case "alfiln":
            //Arriba-Derecha
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)-(10*a)+(a));
                if(Number(posicion.toString().substring(0,1)) == 1 || Number(posicion.toString().substring(1,2)) == 8){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 1 || Number(sig.substring(2,3)) == 8) && (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"))){
                        permitidas = permitidas+"#"+(Number(posicion)-(a*10)+(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)-(a*10)+(a))+",";
                            sig = "#"+(Number(posicion)-(a*10)+(a));
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            permitidas = permitidas.concat("#",Number(posicion)-(a*10)+(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Arriba-Izquierda
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)-(10*a)-(a));
                if(Number(posicion.toString().substring(0,1)) == 1 || Number(posicion.toString().substring(1,2)) == 1){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 1 || Number(sig.substring(2,3)) == 1) && (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"))){
                        permitidas = permitidas+"#"+(Number(posicion)-(a*10)-(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)-(a*10)-(a))+",";
                            sig = "#"+(Number(posicion)-(a*10)-(a));
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            permitidas = permitidas.concat("#",Number(posicion)-(a*10)-(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Abajo-Derecha
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)+(10*a)+(a));
                if(Number(posicion.toString().substring(0,1)) == 8 || Number(posicion.toString().substring(1,2)) == 8){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 8 || Number(sig.substring(2,3)) == 8) && (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"))){
                        permitidas = permitidas+"#"+(Number(posicion)+(10*a)+(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)+(10*a)+(a))+",";
                            sig = "#"+(Number(posicion)+(10*a)+(a));
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            permitidas = permitidas.concat("#",Number(posicion)+(10*a)+(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Abajo-Izquierda
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)+(10*a)-(a));
                if(Number(posicion.toString().substring(0,1)) == 8 || Number(posicion.toString().substring(1,2)) == 1){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 8 || Number(sig.substring(2,3)) == 1) && (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"))){
                        permitidas = permitidas+"#"+(Number(posicion)+(10*a)-(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)+(10*a)-(a))+",";
                            sig = "#"+(Number(posicion)+(10*a)-(a));
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            permitidas = permitidas.concat("#",Number(posicion)+(10*a)-(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            permitidas = permitidas.slice(0,-1);            
            return permitidas;
        break;
        
        case "reinab":
            //Arriba-Derecha
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)-(10*a)+(a));
                if(Number(posicion.toString().substring(0,1)) == 1 || Number(posicion.toString().substring(1,2)) == 8){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 1 || Number(sig.substring(2,3)) == 8) && (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"))){
                        permitidas = permitidas+"#"+(Number(posicion)-(a*10)+(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)-(a*10)+(a))+",";
                            sig = "#"+(Number(posicion)-(a*10)+(a));
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            permitidas = permitidas.concat("#",Number(posicion)-(a*10)+(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Arriba-Izquierda
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)-(10*a)-(a));
                if(Number(posicion.toString().substring(0,1)) == 1 || Number(posicion.toString().substring(1,2)) == 1){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 1 || Number(sig.substring(2,3)) == 1) && (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"))){
                        permitidas = permitidas+"#"+(Number(posicion)-(a*10)-(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)-(a*10)-(a))+",";
                            sig = "#"+(Number(posicion)-(a*10)-(a));
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            permitidas = permitidas.concat("#",Number(posicion)-(a*10)-(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Abajo-Derecha
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)+(10*a)+(a));
                if(Number(posicion.toString().substring(0,1)) == 8 || Number(posicion.toString().substring(1,2)) == 8){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 8 || Number(sig.substring(2,3)) == 8) && (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"))){
                        permitidas = permitidas+"#"+(Number(posicion)+(10*a)+(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)+(10*a)+(a))+",";
                            sig = "#"+(Number(posicion)+(10*a)+(a));
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            permitidas = permitidas.concat("#",Number(posicion)+(10*a)+(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Abajo-Izquierda
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)+(10*a)-(a));
                if(Number(posicion.toString().substring(0,1)) == 8 || Number(posicion.toString().substring(1,2)) == 1){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 8 || Number(sig.substring(2,3)) == 1) && (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"))){
                        permitidas = permitidas+"#"+(Number(posicion)+(10*a)-(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)+(10*a)-(a))+",";
                            sig = "#"+(Number(posicion)+(10*a)-(a));
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            permitidas = permitidas.concat("#",Number(posicion)+(10*a)-(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Arriba
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)-(10*a));
                if(Number(posicion.toString().substring(0,1)) == 1){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 1) && (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"))){
                        permitidas = permitidas+"#"+(Number(posicion)-(a*10))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)-(a*10))+",";
                            sig = "#"+(Number(posicion)-(a*10));
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            permitidas = permitidas.concat("#",Number(posicion)-(a*10),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Abajo
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)+(10*a));
                if(Number(posicion.toString().substring(0,1)) == 8){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 8) && (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"))){
                        permitidas = permitidas+"#"+(Number(posicion)+(a*10))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)+(a*10))+",";
                            sig = "#"+(Number(posicion)+(a*10));
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            permitidas = permitidas.concat("#",Number(posicion)+(a*10),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Izquierda
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)-(a));
                if(Number(posicion.toString().substring(1,2)) == 1){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(2,3)) == 1) && (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"))){
                        permitidas = permitidas+"#"+(Number(posicion)-(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)-(a))+",";
                            sig = "#"+(Number(posicion)-(a));
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            permitidas = permitidas.concat("#",Number(posicion)-(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Derecha
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)+(a));
                if(Number(posicion.toString().substring(1,2)) == 8){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(2,3)) == 8) && (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"))){
                        permitidas = permitidas+"#"+(Number(posicion)+(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)+(a))+",";
                            sig = "#"+(Number(posicion)+(a));
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            permitidas = permitidas.concat("#",Number(posicion)+(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            permitidas = permitidas.slice(0,-1);            
            return permitidas;
        break;
        
        case "reinan":
            //Arriba-Derecha
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)-(10*a)+(a));
                if(Number(posicion.toString().substring(0,1)) == 1 || Number(posicion.toString().substring(1,2)) == 8){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 1 || Number(sig.substring(2,3)) == 8) && (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"))){
                        permitidas = permitidas+"#"+(Number(posicion)-(a*10)+(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)-(a*10)+(a))+",";
                            sig = "#"+(Number(posicion)-(a*10)+(a));
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            permitidas = permitidas.concat("#",Number(posicion)-(a*10)+(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Arriba-Izquierda
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)-(10*a)-(a));
                if(Number(posicion.toString().substring(0,1)) == 1 || Number(posicion.toString().substring(1,2)) == 1){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 1 || Number(sig.substring(2,3)) == 1) && (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"))){
                        permitidas = permitidas+"#"+(Number(posicion)-(a*10)-(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)-(a*10)-(a))+",";
                            sig = "#"+(Number(posicion)-(a*10)-(a));
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            permitidas = permitidas.concat("#",Number(posicion)-(a*10)-(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Abajo-Derecha
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)+(10*a)+(a));
                if(Number(posicion.toString().substring(0,1)) == 8 || Number(posicion.toString().substring(1,2)) == 8){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 8 || Number(sig.substring(2,3)) == 8)&& (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"))){
                        permitidas = permitidas+"#"+(Number(posicion)+(10*a)+(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)+(10*a)+(a))+",";
                            sig = "#"+(Number(posicion)+(10*a)+(a));
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            permitidas = permitidas.concat("#",Number(posicion)+(10*a)+(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Abajo-Izquierda
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)+(10*a)-(a));
                if(Number(posicion.toString().substring(0,1)) == 8 || Number(posicion.toString().substring(1,2)) == 1){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 8 || Number(sig.substring(2,3)) == 1) && (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"))){
                        permitidas = permitidas+"#"+(Number(posicion)+(10*a)-(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)+(10*a)-(a))+",";
                            sig = "#"+(Number(posicion)+(10*a)-(a));
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            permitidas = permitidas.concat("#",Number(posicion)+(10*a)-(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Arriba
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)-(10*a));
                if(Number(posicion.toString().substring(0,1)) == 1){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 1)&& (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"))){
                        permitidas = permitidas+"#"+(Number(posicion)-(a*10))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)-(a*10))+",";
                            sig = "#"+(Number(posicion)-(a*10));
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            permitidas = permitidas.concat("#",Number(posicion)-(a*10),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Abajo
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)+(10*a));
                if(Number(posicion.toString().substring(0,1)) == 8){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(1,2)) == 8)&& (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"))){
                        permitidas = permitidas+"#"+(Number(posicion)+(a*10))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)+(a*10))+",";
                            sig = "#"+(Number(posicion)+(a*10));
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            permitidas = permitidas.concat("#",Number(posicion)+(a*10),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Izquierda
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)-(a));
                if(Number(posicion.toString().substring(1,2)) == 1){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(2,3)) == 1)&& (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"))){
                        permitidas = permitidas+"#"+(Number(posicion)-(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)-(a))+",";
                            sig = "#"+(Number(posicion)-(a));
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            permitidas = permitidas.concat("#",Number(posicion)-(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            //Derecha
            for(var i=7; i>=0; i--){
                sig = "#"+(Number(posicion)+(a));
                if(Number(posicion.toString().substring(1,2)) == 8){
                    i = -1;
                }
                else{
                    if((Number(sig.substring(2,3)) == 8)&& (($(sig).attr("class")=="vacia" || $(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"))){
                        permitidas = permitidas+"#"+(Number(posicion)+(a))+",";
                        i=-1;
                    }
                    else{
                        if($(sig).attr("class")=="vacia"){
                            permitidas = permitidas+"#"+(Number(posicion)+(a))+",";
                            sig = "#"+(Number(posicion)+(a));
                        }
                        if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                            permitidas = permitidas.concat("#",Number(posicion)+(a),",");
                            i = -1;
                        }
                        if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                            i=-1;
                        }
                    }
                }
                a++;
            }
            a = 1;
            sig = "";
            permitidas = permitidas.slice(0,-1);            
            return permitidas;
        break;
        
        case "reyb":
            //Arriba-Derecha
            sig = "#"+(Number(posicion)-(10*a)+(a));
            if(Number(posicion.toString().substring(0,1)) == 1 || Number(posicion.toString().substring(1,2)) == 8){
            }
            else{
                if(Number(sig.substring(1,2)) == 1 || Number(sig.substring(2,3)) == 8){
                    permitidas = permitidas+"#"+(Number(posicion)-(a*10)+(a))+",";
                }
                else{
                    if($(sig).attr("class")=="vacia"){
                        permitidas = permitidas+"#"+(Number(posicion)-(a*10)+(a))+",";
                    }
                    if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                        permitidas = permitidas.concat("#",Number(posicion)-(a*10)+(a),",");
                    }
                    if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                    }
                }
            }
                     
            a = 1;
            sig = "";
            //Arriba-Izquierda
            sig = "#"+(Number(posicion)-(10*a)-(a));
            if(Number(posicion.toString().substring(0,1)) == 1 || Number(posicion.toString().substring(1,2)) == 1){
            }
            else{
                if(Number(sig.substring(1,2)) == 1 || Number(sig.substring(2,3)) == 1){
                    permitidas = permitidas+"#"+(Number(posicion)-(a*10)-(a))+",";
                }
                else{
                    if($(sig).attr("class")=="vacia"){
                        permitidas = permitidas+"#"+(Number(posicion)-(a*10)-(a))+",";
                    }
                    if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                        permitidas = permitidas.concat("#",Number(posicion)-(a*10)-(a),",");
                    }
                    if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                    }
                }
            }
            a = 1;
            sig = "";
            //Abajo-Derecha
            sig = "#"+(Number(posicion)+(10*a)+(a));
            if(Number(posicion.toString().substring(0,1)) == 8 || Number(posicion.toString().substring(1,2)) == 8){
            }
            else{
                if(Number(sig.substring(1,2)) == 8 || Number(sig.substring(2,3)) == 8){
                    permitidas = permitidas+"#"+(Number(posicion)+(10*a)+(a))+",";
                }
                else{
                    if($(sig).attr("class")=="vacia"){
                        permitidas = permitidas+"#"+(Number(posicion)+(10*a)+(a))+",";
                    }
                    if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                        permitidas = permitidas.concat("#",Number(posicion)+(10*a)+(a),",");
                    }
                    if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                    }
                }
            }
            a = 1;
            sig = "";
            //Abajo-Izquierda
            sig = "#"+(Number(posicion)+(10*a)-(a));
            if(Number(posicion.toString().substring(0,1)) == 8 || Number(posicion.toString().substring(1,2)) == 1){
            }
            else{
                if(Number(sig.substring(1,2)) == 8 || Number(sig.substring(2,3)) == 1){
                    permitidas = permitidas+"#"+(Number(posicion)+(10*a)-(a))+",";
                }
                else{
                    if($(sig).attr("class")=="vacia"){
                        permitidas = permitidas+"#"+(Number(posicion)+(10*a)-(a))+",";
                    }
                    if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                        permitidas = permitidas.concat("#",Number(posicion)+(10*a)-(a),",");
                    }
                    if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                    }
                }
            }
            a = 1;
            sig = "";
            //Arriba
            sig = "#"+(Number(posicion)-(10*a));
            if(Number(posicion.toString().substring(0,1)) == 1){
            }
            else{
                if(Number(sig.substring(1,2)) == 1){
                    permitidas = permitidas+"#"+(Number(posicion)-(a*10))+",";
                }
                else{
                    if($(sig).attr("class")=="vacia"){
                        permitidas = permitidas+"#"+(Number(posicion)-(a*10))+",";
                    }
                    if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                        permitidas = permitidas.concat("#",Number(posicion)-(a*10),",");
                    }
                    if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                    }
                }
            }
            a = 1;
            sig = "";
            //Abajo
            sig = "#"+(Number(posicion)+(10*a));
            if(Number(posicion.toString().substring(0,1)) == 8){
            }
            else{
                if(Number(sig.substring(1,2)) == 8){
                    permitidas = permitidas+"#"+(Number(posicion)+(a*10))+",";
                }
                else{
                    if($(sig).attr("class")=="vacia"){
                        permitidas = permitidas+"#"+(Number(posicion)+(a*10))+",";
                    }
                    if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                        permitidas = permitidas.concat("#",Number(posicion)+(a*10),",");
                    }
                    if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                    }
                }
            }
            a = 1;
            sig = "";
            //Izquierda
            sig = "#"+(Number(posicion)-(a));
            if(Number(posicion.toString().substring(1,2)) == 1){
            }
            else{
                if(Number(sig.substring(2,3)) == 1){
                    permitidas = permitidas+"#"+(Number(posicion)-(a))+",";
                }
                else{
                    if($(sig).attr("class")=="vacia"){
                        permitidas = permitidas+"#"+(Number(posicion)-(a))+",";
                    }
                    if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                        permitidas = permitidas.concat("#",Number(posicion)-(a),",");
                    }
                    if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                    }
                }
            }
            a = 1;
            sig = "";
            //Derecha
            sig = "#"+(Number(posicion)+(a));
            if(Number(posicion.toString().substring(1,2)) == 8){
            }
            else{
                if(Number(sig.substring(2,3)) == 8){
                    permitidas = permitidas+"#"+(Number(posicion)+(a))+",";
                }
                else{
                    if($(sig).attr("class")=="vacia"){
                        permitidas = permitidas+"#"+(Number(posicion)+(a))+",";
                    }
                    if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                        permitidas = permitidas.concat("#",Number(posicion)+(a),",");
                    }
                    if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                    }
                }
            }
            a = 1;
            sig = "";
            permitidas = permitidas.slice(0,-1);            
            return permitidas;
        break;
        
        case "reyn":
            //Arriba-Derecha
            sig = "#"+(Number(posicion)-(10*a)+(a));
            if(Number(posicion.toString().substring(0,1)) == 1 || Number(posicion.toString().substring(1,2)) == 8){
            }
            else{
                if(Number(sig.substring(1,2)) == 1 || Number(sig.substring(2,3)) == 8){
                    permitidas = permitidas+"#"+(Number(posicion)-(a*10)+(a))+",";
                }
                else{
                    if($(sig).attr("class")=="vacia"){
                        permitidas = permitidas+"#"+(Number(posicion)-(a*10)+(a))+",";
                    }
                    if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                        permitidas = permitidas.concat("#",Number(posicion)-(a*10)+(a),",");
                    }
                    if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                    }
                }
            }
            a = 1;
            sig = "";
            //Arriba-Izquierda
            sig = "#"+(Number(posicion)-(10*a)-(a));
            if(Number(posicion.toString().substring(0,1)) == 1 || Number(posicion.toString().substring(1,2)) == 1){
            }
            else{
                if(Number(sig.substring(1,2)) == 1 || Number(sig.substring(2,3)) == 1){
                    permitidas = permitidas+"#"+(Number(posicion)-(a*10)-(a))+",";

                }
                else{
                    if($(sig).attr("class")=="vacia"){
                        permitidas = permitidas+"#"+(Number(posicion)-(a*10)-(a))+",";
                    }
                    if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                        permitidas = permitidas.concat("#",Number(posicion)-(a*10)-(a),",");
                    }
                    if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                    }
                }
            }
            a = 1;
            sig = "";
            //Abajo-Derecha
            sig = "#"+(Number(posicion)+(10*a)+(a));
            if(Number(posicion.toString().substring(0,1)) == 8 || Number(posicion.toString().substring(1,2)) == 8){
            }
            else{
                if(Number(sig.substring(1,2)) == 8 || Number(sig.substring(2,3)) == 8){
                    permitidas = permitidas+"#"+(Number(posicion)+(10*a)+(a))+",";
                }
                else{
                    if($(sig).attr("class")=="vacia"){
                        permitidas = permitidas+"#"+(Number(posicion)+(10*a)+(a))+",";
                    }
                    if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                        permitidas = permitidas.concat("#",Number(posicion)+(10*a)+(a),",");
                    }
                    if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                    }
                }
            }
            a = 1;
            sig = "";
            //Abajo-Izquierda
            sig = "#"+(Number(posicion)+(10*a)-(a));
            if(Number(posicion.toString().substring(0,1)) == 8 || Number(posicion.toString().substring(1,2)) == 1){
            }
            else{
                if(Number(sig.substring(1,2)) == 8 || Number(sig.substring(2,3)) == 1){
                    permitidas = permitidas+"#"+(Number(posicion)+(10*a)-(a))+",";
                }
                else{
                    if($(sig).attr("class")=="vacia"){
                        permitidas = permitidas+"#"+(Number(posicion)+(10*a)-(a))+",";
                    }
                    if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                        permitidas = permitidas.concat("#",Number(posicion)+(10*a)-(a),",");
                    }
                    if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                    }
                }
            }
            a = 1;
            sig = "";
            //Arriba
            sig = "#"+(Number(posicion)-(10*a));
            if(Number(posicion.toString().substring(0,1)) == 1){
            }
            else{
                if(Number(sig.substring(1,2)) == 1){
                    permitidas = permitidas+"#"+(Number(posicion)-(a*10))+",";
                }
                else{
                    if($(sig).attr("class")=="vacia"){
                        permitidas = permitidas+"#"+(Number(posicion)-(a*10))+",";
                    }
                    if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                        permitidas = permitidas.concat("#",Number(posicion)-(a*10),",");
                    }
                    if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                    }
                }
            }
            a = 1;
            sig = "";
            //Abajo
            sig = "#"+(Number(posicion)+(10*a));
            if(Number(posicion.toString().substring(0,1)) == 8){
            }
            else{
                if(Number(sig.substring(1,2)) == 8){
                    permitidas = permitidas+"#"+(Number(posicion)+(a*10))+",";
                }
                else{
                    if($(sig).attr("class")=="vacia"){
                        permitidas = permitidas+"#"+(Number(posicion)+(a*10))+",";
                    }
                    if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                        permitidas = permitidas.concat("#",Number(posicion)+(a*10),",");
                    }
                    if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                    }
                }
            }
            a = 1;
            sig = "";
            //Izquierda
            sig = "#"+(Number(posicion)-(a));
            if(Number(posicion.toString().substring(1,2)) == 1){
            }
            else{
                if(Number(sig.substring(2,3)) == 1){
                    permitidas = permitidas+"#"+(Number(posicion)-(a))+",";
                }
                else{
                    if($(sig).attr("class")=="vacia"){
                        permitidas = permitidas+"#"+(Number(posicion)-(a))+",";
                    }
                    if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                        permitidas = permitidas.concat("#",Number(posicion)-(a),",");
                    }
                    if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                    }
                }
            }
            a = 1;
            sig = "";
            //Derecha
            sig = "#"+(Number(posicion)+(a));
            if(Number(posicion.toString().substring(1,2)) == 8){
            }
            else{
                if(Number(sig.substring(2,3)) == 8){
                    permitidas = permitidas+"#"+(Number(posicion)+(a))+",";
                }
                else{
                    if($(sig).attr("class")=="vacia"){
                        permitidas = permitidas+"#"+(Number(posicion)+(a))+",";
                    }
                    if($(sig).attr("class")=="peonb" || $(sig).attr("class")=="torreb" || $(sig).attr("class")=="caballob" || $(sig).attr("class")=="alfilb" || $(sig).attr("class")=="reinab" || $(sig).attr("class")=="reyb"){
                        permitidas = permitidas.concat("#",Number(posicion)+(a),",");
                    }
                    if($(sig).attr("class")=="peonn" || $(sig).attr("class")=="torren" || $(sig).attr("class")=="caballon" || $(sig).attr("class")=="alfiln" || $(sig).attr("class")=="reinan" || $(sig).attr("class")=="reyn"){
                    }
                }
            }
            a = 1;
            sig = "";
            permitidas = permitidas.slice(0,-1);            
            return permitidas;
        break;
        
        case "peonb":
            var delante = "#"+(Number(posicion)-10).toString();
            var dosdelante = "#"+(Number(posicion)-20).toString();
            var diagonalizq = "#"+(Number(posicion)-11).toString();
            var diagonaldrch = "#"+(Number(posicion)-9).toString();
            if($(delante).attr("class") == "vacia"){
                permitidas = permitidas+delante+",";
            }
            if(posicion.substring(0,1)==7 && $(delante).attr("class") == "vacia" && $(dosdelante).attr("class") == "vacia"){
                permitidas = permitidas+dosdelante+",";
            }
            if($(diagonalizq).attr("class")=="peonn" || $(diagonalizq).attr("class")=="torren" || $(diagonalizq).attr("class")=="caballon" || $(diagonalizq).attr("class")=="alfiln" || $(diagonalizq).attr("class")=="reinan" || $(diagonalizq).attr("class")=="reyn"){
                permitidas = permitidas+diagonalizq+",";
            }
            if($(diagonaldrch).attr("class")=="peonn" || $(diagonaldrch).attr("class")=="torren" || $(diagonaldrch).attr("class")=="caballon" || $(diagonaldrch).attr("class")=="alfiln" || $(diagonaldrch).attr("class")=="reinan" || $(diagonaldrch).attr("class")=="reyn"){
                permitidas = permitidas+diagonaldrch+",";
            }
            permitidas = permitidas.slice(0,-1);
            return permitidas;
        break;
        
        case "peonn":
            var delante = "#"+(Number(posicion)+10).toString();
            var dosdelante = "#"+(Number(posicion)+20).toString();
            var diagonalizq = "#"+(Number(posicion)+9).toString();
            var diagonaldrch = "#"+(Number(posicion)+11).toString();
            if($(delante).attr("class") == "vacia"){
                permitidas = permitidas+delante+",";
            }
            if(posicion.substring(0,1)==2 && $(delante).attr("class") == "vacia" && $(dosdelante).attr("class") == "vacia"){
                permitidas = permitidas+dosdelante+",";
            }
            if($(diagonalizq).attr("class")=="peonb" || $(diagonalizq).attr("class")=="torreb" || $(diagonalizq).attr("class")=="caballob" || $(diagonalizq).attr("class")=="alfilb" || $(diagonalizq).attr("class")=="reinab" || $(diagonalizq).attr("class")=="reyb"){
                permitidas = permitidas+diagonalizq+",";
            }
            if($(diagonaldrch).attr("class")=="peonb" || $(diagonaldrch).attr("class")=="torreb" || $(diagonaldrch).attr("class")=="caballob" || $(diagonaldrch).attr("class")=="alfilb" || $(diagonaldrch).attr("class")=="reinab" || $(diagonaldrch).attr("class")=="reyb"){
                permitidas = permitidas+diagonaldrch+",";
            }
            permitidas = permitidas.slice(0,-1);
            return permitidas;
        break;
    }
}
  