export class AccountRepository implements IAccountRepository { 
    getAccount(id: number): Promise<Account> {
        return Promise.resolve(new Account(id, 1));
    }
}

export class Account { 
    constructor(public id: number, public adviserId: number) {}
}

export interface IAccountRepository { 
    getAccount(id: number): Promise<Account>   
}