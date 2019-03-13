function Edge(from,to,weight){
    this.from = from;
    this.to = to;
    this.weight = weight;

}
Edge.prototype.from = function(){
    return this.from;
}
Edge.prototype.to = function(){
    return this.to;
}
Edge.prototype.weight = function(){
    return this.weight;
}