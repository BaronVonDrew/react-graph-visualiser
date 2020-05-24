export class GraphApi { 
    async getGraph(id) { 
        return await fetch(`/api/v1/graph/${id}`).then(res => res.json())
    }
}

export default new GraphApi();