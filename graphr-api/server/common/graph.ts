import logger from '../common/logger';

export class Graph { 
    adjacencyList: { [id: string] : Array<string>; } = {};

    addNode(id: string, linkedNodes: Array<string>): void { 
        if(this.adjacencyList.hasOwnProperty(id))
            return;

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
            model.nodes.push(new Node(key, key));
            let value = this.adjacencyList[key];
            value.map(v => new Edge(`${key}/${v}`, key, v)).forEach(edge => {
                model.edges.push(edge);
            });
        }
        return model;
    }
}

export class GraphModel { 
    nodes: Node[] = new Array<Node>();
    edges: Edge[] = new Array<Edge>();
}
export class Node { 
    constructor(public id: string, public label: string) { 
        let prefix = id.split('/')[0];
        switch (prefix) {
            case 'account':
                this.color = 'green';
                break;
            case 'firm':
                this.color = '#ec5148';
                this.size = 3;
                break;
            default:
                this.color = '#ec5148';
                this.size = 1;
                break;
        }
    }

    public color: string; 
    public size: number;
}
export class Edge { 
    constructor(public id: string, public source: string, public target: string) { } 

    public color: string = '#ec5148';
}