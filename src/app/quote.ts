export class Quote {
  constructor(public id: number,public title:string,public author:string, public entry:string, public like:number, public dislike:number, public time: number, public highest: boolean){
    this.like = 0;
    this.dislike = 0;
    this.time= 0;
    this.highest =false;
  }
}
