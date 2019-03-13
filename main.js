var input,button,title;
var output1, output2,output3,output4,output5,output6,output7,output8,output9,output10;
function preload(){
}

function setup(){

    //create title
    textAlign(CENTER);
    title = createElement('h2','Trains & Towns');
    title.position(20, 0);

    //create input
    input = createInput();
    input.style('font-size', '20px');
    input.style('width', '500px');
    input.value("AB5;BC4;CD8;DC8;DE6;AD5;CE2;EB3;AE7");
    input.position(20, 65);
    //create button
    button = createButton('Iniciar');
    button.position(input.width + input.x , 68);
    button.style('font-size', '20px');
    button.style('background-color', '#FF5733');
    button.style('color','#fff');
    button.mousePressed(start);//call the function start

    //create the labels output
    output1 = createElement('h2');
    output1.position(20, 95);
    output2 = createElement('h2');
    output2.position(20, 125);
    output3 = createElement('h2');
    output3.position(20, 155);
    output4 = createElement('h2');
    output4.position(20, 185);
    output5 = createElement('h2');
    output5.position(20, 215);
    output6 = createElement('h2');
    output6.position(20, 245);
    output7 = createElement('h2');
    output7.position(20, 275);
    output8 = createElement('h2');
    output8.position(20, 305);
    output9 = createElement('h2');
    output9.position(20, 335);
    output10 = createElement('h2');
    output10.position(20, 365);

}
function start() {
    const inputString = input.value();
    inConsole(inputString);
    var graph = new Graph(inputString);
    output1.html('output#1: '+graph.displayDistance("ABC"));
    output2.html('output#2: '+graph.displayDistance("AD"))
    output3.html('output#3: '+graph.displayDistance("ADC")) 
    output4.html('output#4: '+graph.displayDistance("AEBCD"))
    output5.html('output#5: '+graph.displayDistance("AED"))
    output6.html('output#6: '+graph.calculateTripsCount("C","C","t<=3",3))
    output7.html('output#7: '+graph.calculateTripsCount("A","C","t==4",4))
    output8.html('output#8: '+graph.calculateShortestPath("A", "C"))
    output9.html('output#9: '+graph.calculateShortestPath("B", "B"))
    output10.html('output#10: '+graph.calculateRoutesCount("C", "C", 30))
  }


function inConsole(input){
    var graph = new Graph(input);
    console.log(graph);
    console.log('output#1: '+graph.displayDistance("ABC"))
    console.log('output#2: '+graph.displayDistance("AD"))
    console.log('output#3: '+graph.displayDistance("ADC")) 
    console.log('output#4: '+graph.displayDistance("AEBCD"))
    console.log('output#5: '+graph.displayDistance("AED"))
    console.log('output#6: '+graph.calculateTripsCount("C","C","t<=3",3))
    console.log('output#7: '+graph.calculateTripsCount("A","C","t==4",4))
    console.log('output#8: '+graph.calculateShortestPath("A", "C"))
    console.log('output#9: '+graph.calculateShortestPath("B", "B"))
    console.log('output#10: '+graph.calculateRoutesCount("C", "C", 30))
}


