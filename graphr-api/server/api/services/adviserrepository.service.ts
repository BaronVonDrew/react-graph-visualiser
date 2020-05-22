export class AdviserRepository implements IAdviserRepository {
    getAdviserById(adviserId: number): Promise<Adviser> {
        return Promise.resolve(new Adviser(adviserId, "Test Adviser", 1, [4]));
    } 
}

export interface IAdviserRepository { 
    getAdviserById(adviserId: number): Promise<Adviser>;
}

export class Adviser {
    constructor(public id: number, public name: string, public firmId: number, public assistants: Array<number>){}
}