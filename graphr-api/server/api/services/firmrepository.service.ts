export class FirmRepository implements IFirmRepository {
    async getFirmById(firmId: number): Promise<Firm> {
      return new Firm(firmId, "Test Firm", [1, 2, 3]);
    } 
}

export interface IFirmRepository { 
    getFirmById(firmId: number): Promise<Firm>
}

export class Firm { 
    constructor(public id: number, public name: string, public assistants: Array<number>) {}
}