
function Graph(inputGraph){
   this.nodes = [];
   this.allPath = [];
   this.to = 0;
   this.maxDistance = 0;
   this.stops = 0;
   this.routesCount = 0;
   this.tripsCount = 0;
   this.initializeGraph(inputGraph);
}
Graph.prototype.initializeGraph = function(inputGraph){
    var inputArr = inputGraph.split(";");//create array from input
    for(var s of inputArr){
        var from = (s.substring(0,1)).charCodeAt(0);//get ASCII town from
        var to= (s.substring(1,2)).charCodeAt(0);//get ASCII town to
        var weight = Number(s.substring(2));//get weight
        var edge = new Edge(from,to,weight);//create new edge
        this.addEdge(edge);//add new edge
    }
}
Graph.prototype.addEdge = function(edge){
    var index = edge.from;
    if(this.nodes[index] != null){//save the new edge in the nodesArray with the from index(Ascii code)
        this.nodes[index].push(edge)
    }else{
        this.nodes[index] = [edge];
    }
}
Graph.prototype.getNodes = function(index){//get array of edges
    return this.nodes[index];
}
Graph.prototype.displayDistance = function(route){
    var distance = this.calculateDistance(route);
    return (distance != -1)? distance : "NO SUCH ROUTE";//validate distance
}

Graph.prototype.calculateDistance = function(route){ // calculate the route from specific string like "ABC"
    if(route == null){
        console.log("Route is wrong");
        return ;
    }
    var distance = 0;
    var routeArray = route.split("");//split the string in an array
    var from;
    var to;
    for (var i = 0; i < routeArray.length-1; i++) {//iterating the routearray
        var hasPath = false;
        from = (routeArray[i]).charCodeAt(0);
        to = (routeArray[i+1]).charCodeAt(0);
        var edgeList = this.getNodes(from);
        for(var edge of edgeList){ //iterating the edges for the town in the position i
            if(edge.to == to){// validate
                distance += edge.weight;
                hasPath = true;
                break;
            }

        }
        if(!hasPath) return -1;
    }
    return distance;
    
}

Graph.prototype.calculateTripsCount = function(from, to ,p , stops){
    this.to = (to).charCodeAt(0);
    this.stops = stops;
    this.tripsCount = 0;
    var startIndex = (from).charCodeAt(0);
    this.calculateTrips(startIndex,String.fromCharCode(startIndex),p);
    return this.tripsCount;
}

Graph.prototype.calculateTrips = function(from, path, p){
    var edgeList = this.getNodes(from);
    for(var edge of edgeList){//iterating edges
        var next = path + String.fromCharCode(edge.to);//concat the path with the edge.to in string
        var stopCount = next.length -1;
        if(this.to == edge.to && this.validation(p,stopCount)){
            this.tripsCount++;
        }
        if(stopCount <= this.stops){
            this.calculateTrips(edge.to, next, p);
        }
    }
}
Graph.prototype.validation= function(p,stopCount){
    return eval(stopCount+p.substring(1));// validate the promise
}

Graph.prototype.calculateShortestPath= function(from, to){
    this.allPath = [];
    this.to = (to).charCodeAt(0);
    var startIndex = (from).charCodeAt(0);
    this.calculateShortes(startIndex,from);
    var shortestDistance = 99999;
    var currentDistance;
    for (var s of this.allPath) {
        currentDistance = this.calculateDistance(s);
        if(shortestDistance > currentDistance){
            shortestDistance = currentDistance;
        }
    }
    if(shortestDistance == 99999){//set a Max value
        return 0;
    }
    return shortestDistance;
}

Graph.prototype.calculateShortes= function(from, path){
    var edgeList = this.getNodes(from);
    for(var edge of edgeList){
        if(path.length > 1 && path.substring(1).includes(String.fromCharCode(edge.to))){//validate 
            continue;
        }
        var next = path + String.fromCharCode(edge.to);//concat the path with the edge.to in string
        if(this.to == edge.to){
            this.allPath.push(next);
        }
        this.calculateShortes(edge.to,next);
    }
}
Graph.prototype.calculateRoutesCount = function(from,to,maxDistance){
    this.to = (to).charCodeAt(0);
    var startIndex = (from).charCodeAt(0);
    this.maxDistance = maxDistance;
    this.routesCount = 0;
    this.calculateRoutes(startIndex,from);
    return this.routesCount;
}
Graph.prototype.calculateRoutes = function(from,path){
    var edgeList = this.getNodes(from);
    for(var edge of edgeList){
        var next = path + String.fromCharCode(edge.to);//concat the path with the edge.to in string
        var distance = this.calculateDistance(next)
        if(this.to == edge.to && (distance < this.maxDistance)){//validate 
            this.routesCount++;
        }
        if(distance < this.maxDistance){
            this.calculateRoutes(edge.to,next);
        }
    }
}

