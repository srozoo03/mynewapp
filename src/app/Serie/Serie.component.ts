import { Component, OnInit } from '@angular/core';
import {Serie} from './Serie';
import {dataSeries} from './dataSeries';

@Component({
  selector: 'app-Serie',
  templateUrl: './Serie.component.html',
  styleUrls: ['./Serie.component.css']
})
export class SerieComponent implements OnInit {

  Series: Array<Serie>=[];
  promedioT:number=0;
  constructor() { }
  getSerieList(): Array<Serie>{
    return dataSeries;
  }
  getpromedio():number{
    let resultado:number =0;
    for (let serie of this.Series)
      resultado+=serie.seasons
      resultado=(resultado/this.Series.length)
    return  resultado;
  }

  ngOnInit() {
    this.Series =this.getSerieList();
    this.promedioT=this.getpromedio();
  }

}
