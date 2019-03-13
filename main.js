
function preload(){
    
}

function setup(){
    var graph = new Graph("AB5; BC4; CD8; DC8; DE6; AD5; CE2; EB3; AE7");
    console.log(graph);
    //console.log(graph.getadj("C"));
    graph.displayDistance("ABC");
    graph.displayDistance("AD");
    graph.displayDistance("ADC"); 
    graph.displayDistance("AEBCD");
    graph.displayDistance("AED");
    graph.calculateTripsCount("C","C","t<=3",3)
    graph.calculateTripsCount("A","C","t==4",4)
    graph.calculateShortestPath("A", "C")
    graph.calculateShortestPath("B", "B")


}


