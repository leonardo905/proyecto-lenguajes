var alfabeto1=[];
var alfabeto2=[];
var lenguaje1=[];
var lenguaje2=[];
var palabra=[]
function obtenerpalabra(id){
	palabra=obtenerDato(id);
	console.log(palabra);
	var g_p={
    	'vector_pal':[]
    };
    g_p.vector_pal=palabra;
    localStorage.setItem('g_p', JSON.stringify(g_p))
    var guardado_p=JSON.parse(localStorage.getItem('g_p'));
    console.log(guardado_p);
}
function obtenerlenguajes(id1,id2){
	lenguaje1=obtenerDato(id1);
	lenguaje2=obtenerDato(id2);
	console.log("hola");
	var g_l={
    	'vector_le1':[],
    	'vector_le2':[]
    };
    g_l.vector_le1=lenguaje1;
    g_l.vector_le2=lenguaje2;
    localStorage.setItem('g_l', JSON.stringify(g_l))
    var guardado_l=JSON.parse(localStorage.getItem('g_l'));
    console.log(guardado_l);
}
function obteneralfabeto(id1,id2){
	alfabeto1=obtenerDato(id1);
	alfabeto2=obtenerDato(id2);
	var g_a={
    	'vector_al1':[],
    	'vector_al2':[]
    };
    g_a.vector_al1=alfabeto1;
    g_a.vector_al2=alfabeto2;
    localStorage.setItem('g_a', JSON.stringify(g_a))
    var guardado_a=JSON.parse(localStorage.getItem('g_a'));
    console.log(guardado_a);
}
function obtenerDato( id){
    var alfabeto =document.getElementById(id).value;
    var inst="";
    var vec=[];
    for(var a=0;a<alfabeto.length;a++){
    	if(alfabeto[a]==" "){
    		if(inst==""){

    		}else{
				vec.push(inst);
    			inst="";
    		}
    	}
    	else{
    		inst=inst+alfabeto[a];
    	}
    }
    if(inst==""){
    	}else{
			vec.push(inst);	
    	}
    
    return vec;
} 

function recuperar(){
	var obj = JSON.parse(localStorage.getItem('g_p'));
	console.log(obj);
}
