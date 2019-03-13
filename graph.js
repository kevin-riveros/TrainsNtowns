
function Graph(inputGraph){
   this.adj = [];
   this.allPath = [];
   this.to = 0;
   this.maxDistance = 0;
   this.stops = 0;
   this.routesCount = 0;
   this.tripsCount = 0;
   this.initializeGraph(inputGraph);
}
Graph.prototype.initializeGraph = function(inputGraph){
    var inputArr = inputGraph.split("; ");
    
    for(var s of inputArr){
        s = s.trim();
        var from = (s.substring(0,1)).charCodeAt(0);
        var to= (s.substring(1,2)).charCodeAt(0);
        var weight = Number(s.substring(2));
        var e = new Edge(from,to,weight);
        this.addEdge(e);
    }
}
Graph.prototype.addEdge = function(e){
    var v = e.from;
    if(this.adj[v] != null){
        this.adj[v].push(e)
        
    }else{
    this.adj[v] = [e];
    }
    //console.log(arr);
}
Graph.prototype.getadj = function(v){
    return this.adj[v];
}
Graph.prototype.displayDistance = function(route){
    var distance = this.calculateDistance(route);

    return (distance != -1)? console.log("distance:",distance) : console.log("NO SUCH ROUTE");
}

Graph.prototype.calculateDistance = function(route){
    if(route == null){
        console.log("Route is wrong");
        return ;
    }
    var distance = 0;
    var vertex = route.trim().split("");
    var from;
    var to;
    for (var i = 1; i < vertex.length; i++) {
        
        var hasPath = false;
        from = (vertex[i-1]).charCodeAt(0);
        to = (vertex[i]).charCodeAt(0);
        var edgeList = this.getadj(from);

        for(var edge of edgeList){
            if(edge.to == to){
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
    console.log("trips count:",this.tripsCount);
}

Graph.prototype.calculateTrips = function(from, path, p){
    var edgeList = this.getadj(from);
    for(var edge of edgeList){
        var next = path + String.fromCharCode(edge.to);
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
    return eval(stopCount+p.substring(1));
}
Graph.prototype.getPathName = function(path){
    var arr = [];
    arr = path.trim().split();
    var name = "";
    for(var v of arr){
        name += (v);
    }
    
    return name;
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
    if(shortestDistance == 99999){
        console.log("distancia corta",0);
    }
    console.log("distancia corta",shortestDistance);
}

Graph.prototype.calculateShortes= function(from, path){
    var edgeList = this.getadj(from);
    for(var edge of edgeList){
        if(path.length > 1 && path.substring(1).includes(String.fromCharCode(edge.to))){
            continue;
        }
        var next = path + String.fromCharCode(edge.to);
        if(this.to == edge.to){
            this.allPath.push(this.getPathName(next));
        }
        this.calculateShortes(edge.to,next);
    }
}

