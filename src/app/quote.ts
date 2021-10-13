export class Quote {
    showDescription: boolean;
  name: any;
    constructor(public id: number,public author: string,public description: string,public publisher: string, public completeDate: Date){
      this.showDescription=false;
    }
  }  