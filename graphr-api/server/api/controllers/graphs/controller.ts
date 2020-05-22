import { Request, Response } from 'express';
import { IGraphService, GraphService } from '../../services/graph.service';
import { AccountRepository } from '../../services/accountrepository.service';
import { AdviserRepository, Adviser } from '../../services/adviserrepository.service';
import { FirmRepository } from '../../services/firmrepository.service';
import logger from '../../../common/logger'

export class Controller { 
    //constructor(private graphService: IGraphService) { }

    getGraph(req: Request, res: Response): void { 
        const id = Number.parseInt(req.params['id']);
        logger.info(`${id}`);
        // this.graphService.getAccountGraph(id)
        //     .then(graph => {
        //       console.log(graph);
        //       if(graph) res.json(graph.toGraphModel())
        //       else res.status(404).end()
        //     });
    }
}
    
export default new Controller(
    // new GraphService(
    //     new AccountRepository(),
    //     new AdviserRepository(),
    //     new FirmRepository()
    // )
);