export class Graph { 
    adjacencyList: { [id: string] : Array<string>; } = {};

    addNode(id: string, linkedNodes: Array<string>): void { 
        if(this.adjacencyList.hasOwnProperty(id))
            throw `Node with Id: ${id} already exists`;

        this.adjacencyList[id] = linkedNodes;
    }

    addLink(fromId: string, toId: string): void {
        if(!this.adjacencyList.hasOwnProperty(fromId))
            throw `Node with id: ${fromId} does not exist`;

        let links = this.adjacencyList[fromId];
        if(links.some(id => id === toId))
            return;

        links.push(toId);
    }

    toGraphModel(): GraphModel { 
        let model = new GraphModel();
        for(let key in this.adjacencyList) {
            model.nodes.push(new Node(key));
            let value = this.adjacencyList[key];
            value.map(v => new Edge(`${key}/${v}`, key, v));
        }
        return model;
    }
}

export class GraphModel { 
    nodes: Node[] = new Array<Node>();
    edges: Edge[] = new Array<Edge>();
}
export class Node { 
    constructor(public id: string) { }
}
export class Edge { 
    constructor(public id: string, source: string, target: string) { } 
}