export class Serie {
   id:number;
   name:string;
   channel:string;
   seasons:number;
   direction:string;

public constructor(id:number,name:string,channel:string,seasons:number,direction:string){
    this.id=id;
    this.name=name;
    this.channel=channel;
    this.seasons=seasons;
    this.direction=direction;
}

}
