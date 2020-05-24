import { Request, Response } from 'express';
import { IGraphService, GraphService } from '../../services/graph.service';
import { AccountRepository } from '../../services/accountrepository.service';
import { AdviserRepository, Adviser } from '../../services/adviserrepository.service';
import { FirmRepository } from '../../services/firmrepository.service';

export class Controller {
    constructor(private graphService: IGraphService) { }

    async getGraph(req: Request, res: Response): Promise<void> { 
        const id = Number.parseInt(req.params['id']);
        let graph = await this.graphService.getAccountGraph(id);
            
        if(graph) 
            res.json(graph.toGraphModel())
        else 
            res.status(404).end()
    }
}
    
export default new Controller(
    new GraphService(
        new AccountRepository(),
        new AdviserRepository(),
        new FirmRepository()
    )
);