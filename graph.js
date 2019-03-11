
function Graph(){
    this.nodes = [];
    this.graph = {};
}

Graph.prototype.addNode = function(node){
    this.nodes.push(node);
}