export class Option {
    constructor(
        id?: number, 
        testing_id?: number, 
        question?: string
    ) {
      this.id = id;
      this.testing_id = testing_id;
      this.question = question;
    }
    public id: number;
    public testing_id: number;
    public question: string;
}