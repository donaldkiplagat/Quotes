export class Quote {
  constructor(public title:string,public author:string, public entry:string, public like:number, public dislike:number, public time: number){
    this.like = 0;
    this.dislike = 0;
    this.time= 0;
  }
}
