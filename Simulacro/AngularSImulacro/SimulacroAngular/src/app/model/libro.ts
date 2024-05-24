export class libro {

    id: string ='';
    year: number = 0;
    tittle: string = '';
    handle: string= '';
    publisher:string= '';
    isbn:string = '';
    Pages: number = 0;
    notes: string[] = [];
    created: Date = new Date;
    villains: string[]= [];
}


export class Villain {
    name: string = ""
    url:string = ""
}