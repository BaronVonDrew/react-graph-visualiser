import { Graph } from "../../common/graph";
import { IAccountRepository } from "./accountrepository.service";
import { IAdviserRepository } from "./adviserrepository.service";
import { IFirmRepository } from "./firmrepository.service";

export class GraphService implements IGraphService { 
    constructor(
        private accountRepo: IAccountRepository, 
        private adviserRepo: IAdviserRepository, 
        private firmRepo: IFirmRepository) { }

    async getAccountGraph(accountId: number) : Promise<Graph> { 
        let account = await this.accountRepo.getAccount(accountId);
        let adviser = await this.adviserRepo.getAdviserById(accountId);
        let firm = await this.firmRepo.getFirmById(adviser.firmId);

        let graph = new Graph();
        graph.addNode(`account/${accountId}`, [ `adviser/${account.adviserId}`]);
        graph.addNode(`adviser/${adviser.id}`, [ `firm/${adviser.firmId}`]);
        adviser.assistants.forEach(assistantId => {
            graph.addNode(`assistant/${assistantId}`, []);
            graph.addLink(`adviser/${adviser.id}`, `assistant/${assistantId}`);
        });
        graph.addNode(`firm/${firm.id}`, firm.assistants.map(a => `assistant/${a}`));
        return Promise.resolve(graph);
    }
}

export interface IGraphService { 
    getAccountGraph(accountId: number) : Promise<Graph>;
}