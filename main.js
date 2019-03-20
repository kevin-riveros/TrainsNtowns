
var graph = null;
function addGraph(){
    var inputString = document.getElementById("inputgraph").value

    graph = new Graph(inputString);
    document.getElementById("grafoString").innerHTML = "Grafo: "+inputString;
    setNodos()
    return false

  }
  function setNodos(){
    var nodos = ""
    graph.nodes.map( (nodo,index) => {
    return(nodos+= String.fromCharCode(index) +" ")})
    document.getElementById("nodosString").innerHTML = "Ciudades: "+nodos ;
  }
function onClickQ1(){
  var inputString = document.getElementById("inputCalcularDistancia").value
  var result = graph.displayDistance(inputString)
  document.getElementById("resultado1").innerHTML = "Distancia de "+inputString+": "+result;
  return false
}
function onClickQ2(){
  var inputString1 = document.getElementById("inputCalcularTripsCountde").value
  var inputString2 = document.getElementById("inputCalcularTripsCounta").value
  var inputString3 = document.getElementById("inputCalcularTripsCountt").value
  var inputString4 = document.getElementById("inputCalcularTripsCount4").value

  var result = graph.calculateTripsCount(inputString1,inputString2,inputString3,inputString4)
  document.getElementById("resultado2").innerHTML = "Contador de "+inputString1+" a "+ inputString2+" con peso menor o igual a de "+inputString4+": "+result;
  return false
}
function onClickQ3(){
  var inputString1 = document.getElementById("inputCaminoCortode").value
  var inputString2 = document.getElementById("inputCaminoCortoa").value
  var result = graph.calculateShortestPath(inputString1,inputString2)
  document.getElementById("resultado3").innerHTML = "Distancia de "+inputString1+" a "+ inputString2+": "+result;
  return false
}
function onClickQ4(){
  var inputString1 = document.getElementById("inputContadorCaminosde").value
  var inputString2 = document.getElementById("inputContadorCaminosa").value
  var inputString3 = document.getElementById("inputContadorCaminosmaximo").value

  var result = graph.calculateRoutesCount(inputString1,inputString2,inputString3)
  document.getElementById("resultado4").innerHTML = "Contador de "+inputString1+" a "+ inputString2+" con peso de "+inputString3+": "+result;
  return false
}
function main(){
  console.log("main");
  var stringTest = "AB5;BC4;CD8;DC8;DE6;AD5;CE2;EB3;AE7";
  graph = new Graph(stringTest);
  document.getElementById("grafoString").innerHTML = "Grafo: " + stringTest;
  setNodos()
  return false 
}
